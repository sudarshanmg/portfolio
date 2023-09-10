import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const notes = await sql`SELECT * FROM notes;`;
  return NextResponse.json({ notes }, { status: 200 });
}
