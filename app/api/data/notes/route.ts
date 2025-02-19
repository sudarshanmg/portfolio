import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { Post } from "@/types/post";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const collection = db.collection("notes");

    const headers = {
      "Access-Control-Allow-Origin": "https://www.sudarshanmg.tech",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    const data = await collection.find({}).toArray();
    return new NextResponse(JSON.stringify(data), { status: 200, headers });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const collection = db.collection<Post>("notes");

    const note: Post = await request.json();
    const result = await collection.insertOne(note);

    const headers = {
      "Access-Control-Allow-Origin": "https://www.sudarshanmg.tech",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    return NextResponse.json(result, { status: 201, headers });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
