import type { NextAuthOptions, Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider, {
  FacebookProfile,
} from "next-auth/providers/facebook";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      profile(profile: FacebookProfile) {
        return {
          id: profile.id,
          email: profile.email,
          name:
            [profile.first_name, profile.last_name].filter(Boolean).join(" ") ||
            null,
          firstName: profile.first_name ?? null,
          lastName: profile.last_name ?? null,
          image: profile.picture?.data?.url ?? null,
        };
      },
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) return null;

        const valid = await bcrypt.compare(credentials.password, user.password);
        if (!valid) return null;

        return {
          id: user.id,
          email: user.email ?? undefined,
          name:
            [user.firstName, user.lastName].filter(Boolean).join(" ") ||
            undefined,
          firstName: user.firstName ?? undefined,
          lastName: user.lastName ?? undefined,
          image: user.image ?? undefined,
        };
      },
    }),
  ],

  pages: {
    signIn: "/login",
    error: "/login",
  },

  callbacks: {
    async jwt({ token, user, account, profile }): Promise<JWT> {
      if (user) {
        token.id = user.id;
        token.firstName = user.firstName ?? null;
        token.lastName = user.lastName ?? null;
        token.picture = user.image ?? null;
      }

      if (account?.provider === "facebook" && profile) {
        const fb = profile as FacebookProfile;
        token.firstName = fb.first_name ?? token.firstName;
        token.lastName = fb.last_name ?? token.lastName;
        token.picture = fb.picture?.data?.url ?? token.picture;
      }

      if (!token.firstName && token.sub) {
        const dbUser = await prisma.user.findUnique({
          where: { id: token.sub },
          select: { firstName: true, lastName: true, image: true },
        });
        if (dbUser) {
          token.firstName = token.firstName ?? dbUser.firstName ?? null;
          token.lastName = token.lastName ?? dbUser.lastName ?? null;
          token.picture = token.picture ?? dbUser.image ?? null;
        }
      }

      return token;
    },

    async session({ session, token }): Promise<Session> {
      if (session.user) {
        const userSession = session.user as {
          id?: string;
          firstName?: string | null;
          lastName?: string | null;
          email?: string | null;
          name?: string | null;
          image?: string | null;
        };

        userSession.id = token.id as string;
        userSession.firstName = token.firstName as string | null;
        userSession.lastName = token.lastName as string | null;
        userSession.image =
          (token.picture as string) ?? userSession.image ?? null;
      }
      return session;
    },

    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      if (url.startsWith(baseUrl)) return url;
      return `${baseUrl}/dashboard`;
    },
  },
};
