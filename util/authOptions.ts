import GoogleProvider from "next-auth/providers/google";
import { GoogleProfile } from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      profile(profile: GoogleProfile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        const user = { id: 1, name: "J Smith", email: "" };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
