import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const { email, password, role, name } = await request.json();
    const hashedPassword = await hash(password, 10);
    const response = await sql`
            INSERT INTO users (email, password, role, name)
            VALUES (${email}, ${hashedPassword}, ${role}, ${name})`;
    return NextResponse.json({ message: response }, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }
}
