import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface User {
    firstName?: string | null;
    lastName?: string | null;
  }

  interface Session {
    user: {
      id: string;
      email?: string | null;
      name?: string | null;
      image?: string | null;
      firstName?: string | null;
      lastName?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    firstName?: string | null;
    lastName?: string | null;
    picture?: string | null;
  }
}
