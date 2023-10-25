import GoogleProvider from "next-auth/providers/google";
import { GoogleProfile } from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      profile(profile: GoogleProfile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile.role ?? "farmer",
        };
      },
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { type: "text", label: "Email" },
        password: { type: "password", label: "Password" },
        name: { type: "text", label: "Name" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return new NextResponse("Missing Credentials", { status: 400 });
        }
        const res =
          await sql`SELECT * FROM users WHERE email = ${credentials?.email}`;
        const user = res.rows[0];
        const isValid = await compare(
          credentials?.password ?? "",
          user?.password
        );
        if (user && isValid) {
          return NextResponse.json(user);
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
