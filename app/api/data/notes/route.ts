import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { Post } from "@/types/post";

// List of allowed origins
const allowedOrigins = [
  "http://localhost:3000", // Local development
  "https://www.sudarshanmg.tech", // Your production domain
  "https://sudarshanmg.vercel.app", // Your Vercel deployment
];

export async function GET(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const collection = db.collection("notes");

    // Get the request origin
    const origin: string = request.headers.get("origin")!;

    // Check if the origin is allowed
    const isAllowedOrigin = allowedOrigins.includes(origin || "");

    // Add CORS headers to the response
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      Vary: "Origin", // Prevents caching of CORS responses
    };

    const data = await collection.find({}).sort({ createdAt: -1 }).toArray();
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

    // Get the request origin
    const origin: string = request.headers.get("origin")!;

    // Check if the origin is allowed
    const isAllowedOrigin = allowedOrigins.includes(origin || "");

    // Add CORS headers to the response
    const headers = {
      "Access-Control-Allow-Origin": isAllowedOrigin ? origin : "", // Allow the origin if it's in the list
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      Vary: "Origin", // Prevents caching of CORS responses
    };

    return NextResponse.json(result, { status: 201, headers });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}

// Handle preflight OPTIONS request
export async function OPTIONS(request: Request) {
  // Get the request origin
  const origin: string = request.headers.get("origin")!;

  // Check if the origin is allowed
  const isAllowedOrigin = allowedOrigins.includes(origin || "");

  // Add CORS headers to the response
  const headers = {
    "Access-Control-Allow-Origin": isAllowedOrigin ? origin : "", // Allow the origin if it's in the list
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin", // Prevents caching of CORS responses
  };

  return new NextResponse(null, { status: 200, headers });
}
