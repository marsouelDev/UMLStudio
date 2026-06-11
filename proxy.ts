import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. Ignorer les fichiers statiques et l'API
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes("Logo.ico")
  ) {
    return NextResponse.next();
  }

  // 2. Récupération du token
  const token =
    req.cookies.get("next-auth.session-token")?.value ||
    req.cookies.get("__Secure-next-auth.session-token")?.value;

  const isAuthPage =
    pathname.startsWith("/login") || pathname.startsWith("/register");

  // 3. Page d'accueil "/" = toujours accessible
  if (pathname === "/") {
    if (token) return NextResponse.redirect(new URL("/dashboard", req.url));
    return NextResponse.next();
  }

  // 4. Pages protégées : non connecté → /login
  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 5. Déjà connecté sur login/register → dashboard
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|Logo.ico).*)"],
};
