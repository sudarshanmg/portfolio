import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { Post } from "@/types/post";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const collection = db.collection("notes");

    const data = await collection.find({}).toArray();
    return new Response(JSON.stringify(data), { status: 200 });
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

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
