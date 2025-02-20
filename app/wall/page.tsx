import Notes from "@/components/Notes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import clientPromise from "@/lib/mongodb";
import { revalidatePath } from "next/cache";

export default function Wall() {
  const submitForm = async (formData: FormData) => {
    "use server";

    const note = formData.get("note")!;
    const name = formData.get("name")!;

    try {
      const client = await clientPromise;
      const db = client.db("sample_mflix");
      const collection = db.collection("notes");

      const post = { note, name };
      await collection.insertOne(post);
      location.reload();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form
        action={submitForm}
        className="flex flex-col w-full items-center p-8"
      >
        <header className="m-8 text-center font-acorn">
          <span className="text-6xl m-8 md:m-0 text-center">The</span>
          <span className="text-6xl md:text-8xl m-8 md:m-0 text-blue-300 text-center">
            {" "}
            W
          </span>
          <span className="text-6xl md:text-8xl m-8 md:m-0 text-yellow-300 text-center">
            a
          </span>
          <span className="text-6xl md:text-8xl m-8 md:m-0 text-pink-300 text-center">
            l
          </span>
          <span className="text-6xl md:text-8xl m-8 md:m-0 text-green-300 text-center">
            l
          </span>

          <p className="my-4 text-lg font-serif text-left">
            Check out what others have to say and also...
          </p>
          <h1 className="sm:text-4xl md:text-6xl text-4xl">
            Go ahead and leave your footprint!
          </h1>
        </header>

        <Input
          type="text"
          name="note"
          required
          id="note"
          className="mb-4 h-12 p-4 rounded-2xl w-5/6"
          placeholder="Say something..."
        />
        <Input
          type="text"
          name="name"
          required
          id="username"
          className="mb-4 h-12 p-4 rounded-2xl w-5/6"
          placeholder="Your name..."
        />
        <Button type="submit" variant={"outline"} className="rounded-3xl">
          {"Submit"}
        </Button>
      </form>
      <Notes />
    </div>
  );
}
