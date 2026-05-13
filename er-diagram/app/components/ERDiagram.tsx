'use client';

import React, { useState } from 'react';
import styles from '../styles/ERDiagram.module.css';


interface Entity {
  id: string;
  name: string;
  displayName: string;
  attributes: string[];
  x: number;
  y: number;
  color: 'blue' | 'purple' | 'green';
}

interface Relationship {
  id: string;
  name: string;
  fromEntity: string;
  toEntity: string;
  fromCardinality: string;
  toCardinality: string;
}

const ERDiagram: React.FC = () => {
  const [selectedEntity, setSelectedEntity] = useState<string | null>(null);

  
  const entities: Entity[] = [
    {
      id: 'user',
      name: 'USER',
      displayName: 'USER (PK)',
      attributes: ['id_user (PK)', 'nom, email', 'password, facebook_id'],
      x: 80,
      y: 60,
      color: 'blue'
    },
    {
      id: 'order',
      name: 'ORDER',
      displayName: 'ORDER (PK)',
      attributes: ['id_order (PK)', 'status, total', 'created_at'],
      x: 280,
      y: 60,
      color: 'blue'
    },
    {
      id: 'admin',
      name: 'ADMIN',
      displayName: 'ADMIN (PK)',
      attributes: ['id_admin (PK)', 'nom, email', 'update_at', 'named_applications'],
      x: 30,
      y: 180,
      color: 'purple'
    },
    {
      id: 'product',
      name: 'PRODUCT',
      displayName: 'PRODUCT (PK)',
      attributes: ['id_product (PK)', 'name, description'],
      x: 220,
      y: 280,
      color: 'purple'
    },
    {
      id: 'has',
      name: 'HAS',
      displayName: 'HAS',
      attributes: [],
      x: 150,
      y: 140,
      color: 'green'
    },
    {
      id: 'order_item',
      name: 'ORDER_ITEM',
      displayName: 'ORDER_ITEM (PK)',
      attributes: ['id_item (PK)', 'quantity, unit_price'],
      x: 320,
      y: 180,
      color: 'blue'
    },
    {
      id: 'diagram',
      name: 'DIAGRAM',
      displayName: 'DIAGRAM (PK)',
      attributes: ['id_diagram (PK)', 'title, description', 'update_at'],
      x: 40,
      y: 280,
      color: 'blue'
    },
    {
      id: 'contains',
      name: 'CONTAINS',
      displayName: 'CONTAINS',
      attributes: [],
      x: 100,
      y: 240,
      color: 'green'
    }
  ];

  
  const relationships: Relationship[] = [
    {
      id: 'user_order',
      name: 'Places',
      fromEntity: 'user',
      toEntity: 'order',
      fromCardinality: '1',
      toCardinality: 'N'
    },
    {
      id: 'order_orderitem',
      name: 'Contains',
      fromEntity: 'order',
      toEntity: 'order_item',
      fromCardinality: '1',
      toCardinality: 'N'
    },
    {
      id: 'product_orderitem',
      name: 'Include',
      fromEntity: 'product',
      toEntity: 'order_item',
      fromCardinality: '1',
      toCardinality: 'N'
    }
  ];

  return (
    <div className={styles.appWrapper}>
      {/* ===== 1. TOP NAVBAR ===== */}
      <nav className={styles.topNav}>
        <div className={styles.navLeft}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>📐</span>
            <span className={styles.logoText}>UMLStudio</span>
          </div>
        </div>
        
        <div className={styles.navCenter}>
          <span className={styles.navTitle}>Système e-commerce</span>
          <span className={styles.navSubtitle}>Modèle conceptuel de données</span>
        </div>
        
        <div className={styles.navTabs}>
          <button className={styles.tab}>MCD</button>
          <button className={styles.tab}>MLD</button>
          <button className={styles.tab}>SQL</button>
        </div>
        
        <button className={styles.btnExporter}>⬆ Exporter</button>
      </nav>

      
      <div className={styles.subHeader}>
        <div className={styles.subHeaderLeft}>
          <span className={styles.icon}>📋</span>
          <span className={styles.subHeaderTitle}>Modèle Conceptuel de Données</span>
          <span className={styles.badge}>5 entités</span>
          <span className={styles.badge}>6 associations</span>
        </div>
        <div className={styles.subHeaderRight}>
          <span className={styles.icon}>🔗</span>
          <span>Associations</span>
          <span className={styles.icon}>→</span>
          <span>Lien</span>
        </div>
      </div>

      
      <div className={styles.canvasWrapper}>
        <svg className={styles.canvas} viewBox="0 0 500 320">
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#888" />
            </marker>
          </defs>

          
          {relationships.map((rel) => {
            const fromEntity = entities.find(e => e.id === rel.fromEntity);
            const toEntity = entities.find(e => e.id === rel.toEntity);

            if (!fromEntity || !toEntity) return null;

            return (
              <g key={rel.id} className={styles.relationshipLine}>
                <line
                  x1={fromEntity.x + 50}
                  y1={fromEntity.y + 25}
                  x2={toEntity.x + 50}
                  y2={toEntity.y + 25}
                  stroke="#999"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                <text
                  x={(fromEntity.x + toEntity.x) / 2 - 15}
                  y={(fromEntity.y + toEntity.y) / 2 - 5}
                  className={styles.cardinality}
                >
                  {rel.fromCardinality}
                </text>
                <text
                  x={(fromEntity.x + toEntity.x) / 2 + 10}
                  y={(fromEntity.y + toEntity.y) / 2 + 15}
                  className={styles.cardinality}
                >
                  {rel.toCardinality}
                </text>
              </g>
            );
          })}

         
          {entities.map((entity) => (
            <g
              key={entity.id}
              className={`${styles.entity} ${styles[entity.color]} ${
                selectedEntity === entity.id ? styles.selected : ''
              }`}
              onClick={() => setSelectedEntity(selectedEntity === entity.id ? null : entity.id)}
              style={{ cursor: 'pointer' }}
            >
              <rect
                x={entity.x}
                y={entity.y}
                width="100"
                height={entity.attributes.length > 0 ? 50 : 40}
                rx="3"
              />

              <text
                x={entity.x + 50}
                y={entity.y + 14}
                className={styles.entityName}
                textAnchor="middle"
              >
                {entity.displayName}
              </text>

              <line
                x1={entity.x}
                y1={entity.y + 20}
                x2={entity.x + 100}
                y2={entity.y + 20}
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1"
              />

              {entity.attributes.map((attr, idx) => (
                <text
                  key={idx}
                  x={entity.x + 50}
                  y={entity.y + 33 + idx * 10}
                  className={styles.entityAttr}
                  textAnchor="middle"
                >
                  {attr}
                </text>
              ))}
            </g>
          ))}

          
          <g className={styles.legendInDiagram}>
            <rect x="350" y="20" width="8" height="8" fill="#5856d6" />
            <text x="365" y="26" className={styles.legendLabel}>USER</text>

            <rect x="350" y="40" width="8" height="8" fill="#8b5cf6" />
            <text x="365" y="46" className={styles.legendLabel}>PRODUCT</text>

            <circle cx="354" cy="63" r="4" fill="#10b981" />
            <text x="365" y="68" className={styles.legendLabel}>ASSOCIATION</text>
          </g>
        </svg>
      </div>

      
      <div className={styles.bottomStats}>
        <div className={styles.statBox}>
          <div className={styles.statNumber}>5</div>
          <div className={styles.statText}>Entités</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statNumber}>6</div>
          <div className={styles.statText}>Associations</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statNumber}>1,N - 0,N</div>
          <div className={styles.statText}>Cardinalités</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statNumber}>1</div>
          <div className={styles.statText}>Applications</div>
        </div>
      </div>
    </div>
  );
};

export default ERDiagram;