import { NextAuthOptions, User } from "next-auth";
import FacebookProvider, {
  FacebookProfile,
} from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      profile(profile: FacebookProfile) {
        return {
          id: profile.id,
          email: profile.email,
          firstName: profile.first_name ?? null,
          lastName: profile.last_name ?? null,
          name:
            [profile.first_name, profile.last_name].filter(Boolean).join(" ") ||
            null,
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
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Champs manquants.");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          throw new Error("Email ou mot de passe incorrect.");
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        if (!isValid) {
          throw new Error("Email ou mot de passe incorrect.");
        }

        return {
          id: user.id,
          email: user.email!,
          name:
            [user.firstName, user.lastName].filter(Boolean).join(" ") ||
            undefined,
        };
      },
    }),
  ],

  session: { strategy: "jwt" },
  pages: { signIn: "/login", error: "/login" },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },

    //  session expose l'id depuis le token JWT
    async session({ session, token }) {
      if (session.user) {
        (session.user as { id?: string }).id = token.id as string;
      }
      return session;
    },

    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      if (url.startsWith(baseUrl)) return url;
      return `${baseUrl}/dashboard`;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
