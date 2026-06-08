import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// L'erreur demandait explicitement un export nommé "proxy"
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. Ignorer les fichiers statiques et l'API
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes("favicon.ico")
  ) {
    return NextResponse.next();
  }

  // 2. Récupération du token
  const token =
    req.cookies.get("next-auth.session-token")?.value ||
    req.cookies.get("__Secure-next-auth.session-token")?.value;

  const isAuthPage =
    pathname.startsWith("/login") || pathname.startsWith("/register");

  // 3. Logique de redirection
  if (!token && !isAuthPage) {
    // Non connecté -> Vers login
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && isAuthPage) {
    // Déjà connecté -> Vers dashboard
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

// Optionnel : garde le matcher pour optimiser les performances
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
