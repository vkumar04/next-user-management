import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "@auth/core/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET ?? "",
};

export const handler = nextAuth(authOptions);
export { handler as GET, handler as POST };
