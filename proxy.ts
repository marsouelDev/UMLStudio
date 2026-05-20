import { NextRequest, NextResponse } from "next/server";

const authRoutes = ["/login", "/register", "/forgot-password"];
const protectedRoutes = ["/dashboard", "/classe", "/export", "/mld", "/sql"];

export function proxy(req: NextRequest) {
  console.log("PROXY:", req.nextUrl.pathname);
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route));
  const isProtected = protectedRoutes.some(route => pathname.startsWith(route));

  // Pas connecté et page protégée → redirige vers /
  if (!token && isProtected) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Déjà connecté et tente d'accéder au login/register → redirige vers dashboard
  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};