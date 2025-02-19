import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { Note } from '@/types/post';

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const client = await clientPromise;
    const db = client.db('sample_mflix');
    const collection = db.collection<Note>('notes');

    const result = await collection.deleteOne({ _id: params.id });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}