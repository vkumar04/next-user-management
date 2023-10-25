import GoogleProvider from "next-auth/providers/google";
import { GoogleProfile } from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { sql } from "@vercel/postgres";
import { User } from "@/types/user";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { type: "text", label: "Email" },
        password: { type: "password", label: "Password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ): Promise<User | null> {
        if (!credentials) {
          return null;
        }
        const res =
          await sql`SELECT * FROM users WHERE email = ${credentials?.email}`;
        const user = res.rows[0];
        const isValid = await compare(
          credentials?.password ?? "",
          user?.password
        );
        if (user && isValid) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            role: user.role,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      if (trigger === "update" && session?.name) {
        token.name = session.name;
      }
      if (user) {
        return { ...token, id: user.id, role: user?.role };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
          name: token.name,
        },
      };
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
