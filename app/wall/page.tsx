import Notes from "@/components/Notes";
import clientPromise from "@/lib/mongodb";
import { revalidatePath } from "next/cache";

const MAX_NOTE = 200;
const MAX_NAME = 40;

export default function Wall() {
  const submitForm = async (formData: FormData) => {
    "use server";

    const rawNote = formData.get("note");
    const rawName = formData.get("name");

    // Type checks — both fields must be non-empty strings
    if (typeof rawNote !== "string" || typeof rawName !== "string") {
      return;
    }

    const note = rawNote.trim();
    const name = rawName.trim();

    // Validation: non-empty + length limits
    if (
      note.length === 0 ||
      name.length === 0 ||
      note.length > MAX_NOTE ||
      name.length > MAX_NAME
    ) {
      return;
    }

    try {
      const client = await clientPromise;
      const db = client.db("sample_mflix");
      const collection = db.collection("notes");

      await collection.insertOne({ note, name, createdAt: new Date() });
    } catch (error: any) {
      console.log(error.message);
    }
    revalidatePath("/wall");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <span className="inline-block bg-pink-400 text-black font-mono font-bold text-xs tracking-widest uppercase px-3 py-1.5 border-2 border-black brutal-shadow-sm rotate-2 mb-6">
          // guestbook
        </span>
        <h1 className="font-acorn text-6xl md:text-8xl leading-[0.85] noise-text">
          <span className="text-white">The </span>
          <span className="text-cyan-400">W</span>
          <span className="text-yellow-400">a</span>
          <span className="text-pink-400">l</span>
          <span className="text-lime-400">l</span>
        </h1>
        <p className="mt-5 font-mono text-sm text-neutral-400 max-w-md mx-auto">
          See what others left behind — then go ahead and leave your footprint.
        </p>
      </header>

      {/* Form */}
      <form
        action={submitForm}
        className="max-w-xl mx-auto bg-white text-black border-2 border-black brutal-shadow p-6 mb-16 -rotate-1"
      >
        <label className="block font-mono text-xs font-bold uppercase tracking-widest mb-2">
          Your message
        </label>
        <input
          type="text"
          name="note"
          required
          maxLength={MAX_NOTE}
          id="note"
          className="w-full mb-4 h-12 px-4 bg-neutral-100 border-2 border-black font-mono text-sm outline-none focus:bg-yellow-100"
          placeholder="Say something nice..."
        />
        <label className="block font-mono text-xs font-bold uppercase tracking-widest mb-2">
          Your name
        </label>
        <input
          type="text"
          name="name"
          required
          maxLength={MAX_NAME}
          id="username"
          className="w-full mb-6 h-12 px-4 bg-neutral-100 border-2 border-black font-mono text-sm outline-none focus:bg-yellow-100"
          placeholder="Who are you?"
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-black font-mono font-bold uppercase tracking-widest py-3 border-2 border-black brutal-press brutal-shadow-sm"
        >
          Stick it on the wall →
        </button>
      </form>

      <Notes key={Date.now()} />
    </div>
  );
}
