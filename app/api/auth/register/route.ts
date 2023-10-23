import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const { email, password, role } = await request.json();
    const hashedPassword = await hash(password, 10);
    const response = await sql`
      INSERT INTO users (email, password, role)
      VALUES (${email}, ${hashedPassword}, ${role})`;
    return NextResponse.json({ message: "success" });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
