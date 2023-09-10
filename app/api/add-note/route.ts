import { sql } from "@vercel/postgres";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  const username = await data.username;
  const note = await data.note;
  console.log(data);

  try {
    if (!username || !note) throw new Error("Pet and owner names required");
    await sql`INSERT INTO Notes (username, note) VALUES (${username}, ${note});`;
    return new Response("Ok");
  } catch (error) {
    return;
  }
}
