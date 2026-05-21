// app/api/auth/[...nextauth]/Authoptions.ts
import type { NextAuthOptions, Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  //  jwt obligatoire avec CredentialsProvider
  session: { strategy: "jwt" },

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email:    { label: "Email",    type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user?.password) return null;

        const valid = await bcrypt.compare(credentials.password, user.password);
        if (!valid) return null;

        return {
          id:        user.id,
          email:     user.email     ?? undefined,
          name:      user.name      ?? undefined,
          image:     user.image     ?? undefined,
          firstName: user.firstName ?? undefined,
          lastName:  user.lastName  ?? undefined,
        };
      },
    }),
  ],

  callbacks: {
    // ✅ jwt : stocke id + firstName + lastName dans le token
    async jwt({ token, user }: { token: JWT; user?: User }): Promise<JWT> {
      if (user) {
        token.id        = user.id;
        token.firstName = user.firstName ?? null;
        token.lastName  = user.lastName  ?? null;
      }
      return token;
    },

    //  session : expose le token dans useSession()
    async session({ session, token }: { session: Session; token: JWT }): Promise<Session> {
      session.user.id        = token.id        as string;
      session.user.firstName = token.firstName as string | null;
      session.user.lastName  = token.lastName  as string | null;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};