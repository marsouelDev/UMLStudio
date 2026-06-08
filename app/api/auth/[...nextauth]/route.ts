import NextAuth from "next-auth";
import { authOptions } from "../[...nextauth]/Authoptions";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
