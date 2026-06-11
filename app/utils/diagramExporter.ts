// utils/diagramExporter.ts

export type ExportClass = {
  id: string;
  name: string;
  stereotype?: string | null;
  color: string;
  positionX: number;
  positionY: number;
  attributes: { name: string; type: string; visibility: string }[];
  methods: { name: string; returnType: string; visibility: string }[];
};

export type ExportRelation = {
  id: string;
  type: string;
  name?: string | null;
  sourceLabel?: string | null;
  targetLabel?: string | null;
  sourceId: string;
  targetId: string;
};

// Dimensions d'une classe UML
const PADDING = 12;
const HEADER_H = 36;
const ROW_H = 22;
const MIN_WIDTH = 160;

function getVisibilitySymbol(v: string) {
  if (v === "public") return "+";
  if (v === "protected") return "#";
  return "-";
}

function getClassDimensions(cls: ExportClass) {
  const allTexts = [
    cls.name,
    ...cls.attributes.map(
      (a) => `${getVisibilitySymbol(a.visibility)} ${a.name}: ${a.type}`,
    ),
    ...cls.methods.map(
      (m) =>
        `${getVisibilitySymbol(m.visibility)} ${m.name}(): ${m.returnType}`,
    ),
  ];
  const longestText = Math.max(...allTexts.map((t) => t.length));
  const width = Math.max(MIN_WIDTH, longestText * 7.5 + PADDING * 2);

  const attrH =
    cls.attributes.length > 0
      ? cls.attributes.length * ROW_H + PADDING
      : PADDING;
  const methodH =
    cls.methods.length > 0 ? cls.methods.length * ROW_H + PADDING : PADDING;
  const height = HEADER_H + attrH + methodH;

  return { width, height };
}

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function lighten(hex: string, amount = 0.85) {
  const { r, g, b } = hexToRgb(hex);
  return `rgb(${Math.round(r + (255 - r) * amount)}, ${Math.round(g + (255 - g) * amount)}, ${Math.round(b + (255 - b) * amount)})`;
}

function drawClass(ctx: CanvasRenderingContext2D, cls: ExportClass) {
  const { width, height } = getClassDimensions(cls);
  const x = cls.positionX;
  const y = cls.positionY;
  const radius = 8;

  // Ombre
  ctx.shadowColor = "rgba(0,0,0,0.12)";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 4;

  // Fond blanc arrondi
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.shadowColor = "transparent";

  // Header coloré
  const headerBg = lighten(cls.color, 0.75);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + HEADER_H);
  ctx.lineTo(x, y + HEADER_H);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fillStyle = headerBg;
  ctx.fill();

  // Bordure header colorée
  ctx.strokeStyle = cls.color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + HEADER_H);
  ctx.lineTo(x, y + HEADER_H);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.stroke();

  // Bordure complète
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.stroke();

  // Stereotype
  let nameY = y + HEADER_H / 2 + 8;
  if (cls.stereotype) {
    ctx.font = "italic 10px Inter, sans-serif";
    ctx.fillStyle = cls.color;
    ctx.textAlign = "center";
    ctx.fillText(`«${cls.stereotype}»`, x + width / 2, y + 14);
    nameY = y + HEADER_H - 8;
  }

  // Nom de la classe
  ctx.font = "bold 13px Inter, sans-serif";
  ctx.fillStyle = cls.color;
  ctx.textAlign = "center";
  ctx.fillText(cls.name, x + width / 2, nameY);

  // Ligne séparation attributs
  let currentY = y + HEADER_H;
  if (cls.attributes.length > 0) {
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, currentY);
    ctx.lineTo(x + width, currentY);
    ctx.stroke();

    ctx.font = "12px 'Courier New', monospace";
    ctx.textAlign = "left";
    cls.attributes.forEach((attr) => {
      currentY += ROW_H;
      const symbol = getVisibilitySymbol(attr.visibility);
      const color =
        attr.visibility === "public"
          ? "#16a34a"
          : attr.visibility === "protected"
            ? "#d97706"
            : "#6b7280";
      ctx.fillStyle = color;
      ctx.fillText(symbol, x + PADDING, currentY - 5);
      ctx.fillStyle = "#1e293b";
      ctx.fillText(` ${attr.name}`, x + PADDING + 10, currentY - 5);
      ctx.fillStyle = "#94a3b8";
      ctx.fillText(
        `: ${attr.type}`,
        x + PADDING + 10 + attr.name.length * 7.2,
        currentY - 5,
      );
    });
    currentY += PADDING / 2;
  }

  // Ligne séparation méthodes
  if (cls.methods.length > 0) {
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, currentY);
    ctx.lineTo(x + width, currentY);
    ctx.stroke();

    ctx.font = "12px 'Courier New', monospace";
    ctx.textAlign = "left";
    cls.methods.forEach((method) => {
      currentY += ROW_H;
      const symbol = getVisibilitySymbol(method.visibility);
      const color =
        method.visibility === "public"
          ? "#16a34a"
          : method.visibility === "protected"
            ? "#d97706"
            : "#6b7280";
      ctx.fillStyle = color;
      ctx.fillText(symbol, x + PADDING, currentY - 5);
      ctx.fillStyle = "#1e293b";
      ctx.fillText(` ${method.name}()`, x + PADDING + 10, currentY - 5);
      ctx.fillStyle = "#94a3b8";
      ctx.fillText(
        `: ${method.returnType}`,
        x + PADDING + 10 + (method.name.length + 2) * 7.2,
        currentY - 5,
      );
    });
  }
}

function getConnectionPoint(
  cls: ExportClass,
  targetX: number,
  targetY: number,
): { x: number; y: number } {
  const { width, height } = getClassDimensions(cls);
  const cx = cls.positionX + width / 2;
  const cy = cls.positionY + height / 2;

  const dx = targetX - cx;
  const dy = targetY - cy;

  // Choisir le côté le plus proche
  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);

  if (absDx > absDy) {
    return dx > 0
      ? { x: cls.positionX + width, y: cy }
      : { x: cls.positionX, y: cy };
  } else {
    return dy > 0
      ? { x: cx, y: cls.positionY + height }
      : { x: cx, y: cls.positionY };
  }
}

function drawArrowHead(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  angle: number,
  type: string,
) {
  const size = 12;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  if (type === "inheritance" || type === "realization") {
    // Triangle creux blanc (héritage)
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-size, -size / 2);
    ctx.lineTo(-size, size / 2);
    ctx.closePath();
    ctx.fillStyle = type === "realization" ? "#ffffff" : "#ffffff";
    ctx.fill();
    ctx.strokeStyle = "#475569";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  } else if (type === "composition") {
    // Losange plein
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-size / 2, -size / 3);
    ctx.lineTo(-size, 0);
    ctx.lineTo(-size / 2, size / 3);
    ctx.closePath();
    ctx.fillStyle = "#475569";
    ctx.fill();
  } else if (type === "aggregation") {
    // Losange creux
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-size / 2, -size / 3);
    ctx.lineTo(-size, 0);
    ctx.lineTo(-size / 2, size / 3);
    ctx.closePath();
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.strokeStyle = "#475569";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  } else {
    // Flèche simple (association, dependency)
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-size, -size / 2);
    ctx.moveTo(0, 0);
    ctx.lineTo(-size, size / 2);
    ctx.strokeStyle = "#475569";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  ctx.restore();
}

function drawRelation(
  ctx: CanvasRenderingContext2D,
  rel: ExportRelation,
  classMap: Map<string, ExportClass>,
) {
  const source = classMap.get(rel.sourceId);
  const target = classMap.get(rel.targetId);
  if (!source || !target) return;

  const { width: sw, height: sh } = getClassDimensions(source);
  const { width: tw, height: th } = getClassDimensions(target);

  const scx = source.positionX + sw / 2;
  const scy = source.positionY + sh / 2;
  const tcx = target.positionX + tw / 2;
  const tcy = target.positionY + th / 2;

  const sp = getConnectionPoint(source, tcx, tcy);
  const tp = getConnectionPoint(target, scx, scy);

  // Style selon le type
  ctx.strokeStyle = "#475569";
  ctx.lineWidth = 1.5;

  if (rel.type === "realization" || rel.type === "dependency") {
    ctx.setLineDash([6, 4]);
  } else {
    ctx.setLineDash([]);
  }

  // Ligne
  ctx.beginPath();
  ctx.moveTo(sp.x, sp.y);
  ctx.lineTo(tp.x, tp.y);
  ctx.stroke();
  ctx.setLineDash([]);

  // Flèche
  const angle = Math.atan2(tp.y - sp.y, tp.x - sp.x);
  drawArrowHead(ctx, tp.x, tp.y, angle, rel.type);

  // Labels
  const midX = (sp.x + tp.x) / 2;
  const midY = (sp.y + tp.y) / 2;

  ctx.font = "11px Inter, sans-serif";
  ctx.textAlign = "center";

  if (rel.name) {
    ctx.fillStyle = "#1e293b";
    ctx.fillText(rel.name, midX, midY - 8);
  }
  if (rel.sourceLabel) {
    ctx.fillStyle = "#64748b";
    ctx.fillText(
      rel.sourceLabel,
      sp.x + (tp.x - sp.x) * 0.15,
      sp.y + (tp.y - sp.y) * 0.15 - 8,
    );
  }
  if (rel.targetLabel) {
    ctx.fillStyle = "#64748b";
    ctx.fillText(
      rel.targetLabel,
      tp.x - (tp.x - sp.x) * 0.15,
      tp.y - (tp.y - sp.y) * 0.15 - 8,
    );
  }
}

export async function exportDiagramToCanvas(
  classes: ExportClass[],
  relations: ExportRelation[],
): Promise<HTMLCanvasElement> {
  // Calculer les bounds du diagramme
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;
  classes.forEach((cls) => {
    const { width, height } = getClassDimensions(cls);
    minX = Math.min(minX, cls.positionX);
    minY = Math.min(minY, cls.positionY);
    maxX = Math.max(maxX, cls.positionX + width);
    maxY = Math.max(maxY, cls.positionY + height);
  });

  const MARGIN = 60;
  const canvasWidth = maxX - minX + MARGIN * 2;
  const canvasHeight = maxY - minY + MARGIN * 2;
  const offsetX = -minX + MARGIN;
  const offsetY = -minY + MARGIN;

  // Créer le canvas
  const canvas = document.createElement("canvas");
  const scale = 2; // Retina
  canvas.width = canvasWidth * scale;
  canvas.height = canvasHeight * scale;
  canvas.style.width = `${canvasWidth}px`;
  canvas.style.height = `${canvasHeight}px`;

  const ctx = canvas.getContext("2d")!;
  ctx.scale(scale, scale);

  // Fond blanc
  ctx.fillStyle = "#f8fafc";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Grille légère
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 0.5;
  const gridSize = 20;
  for (let gx = 0; gx < canvasWidth; gx += gridSize) {
    ctx.beginPath();
    ctx.moveTo(gx, 0);
    ctx.lineTo(gx, canvasHeight);
    ctx.stroke();
  }
  for (let gy = 0; gy < canvasHeight; gy += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, gy);
    ctx.lineTo(canvasWidth, gy);
    ctx.stroke();
  }

  // Décaler les classes
  const offsetClasses = classes.map((cls) => ({
    ...cls,
    positionX: cls.positionX + offsetX,
    positionY: cls.positionY + offsetY,
  }));

  const classMap = new Map(offsetClasses.map((c) => [c.id, c]));

  // Dessiner relations en premier (sous les classes)
  relations.forEach((rel) => drawRelation(ctx, rel, classMap));

  // Dessiner les classes
  offsetClasses.forEach((cls) => drawClass(ctx, cls));

  return canvas;
}

export function canvasToDataUrl(canvas: HTMLCanvasElement): string {
  return canvas.toDataURL("image/png");
}
