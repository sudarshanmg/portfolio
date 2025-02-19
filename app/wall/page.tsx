"use client";
import { useRef, FormEvent, useState } from "react";
import Notes from "@/components/Notes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendPost } from "@/lib/sendPost";

export default function Wall() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const noteRef = useRef<HTMLInputElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Set loading state
    setIsSubmitting(true);

    const note = noteRef?.current?.value;
    const name = nameRef?.current?.value;

    if (!note || !name) {
      setIsSubmitting(false);
      return;
    }

    const post = { note, name };

    const result = async () => await sendPost(post);
    const val = result();
    setIsSubmitting(false);
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
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
          ref={noteRef}
          name="note"
          required
          id="note"
          className="mb-4 h-12 p-4 rounded-2xl w-5/6"
          placeholder="Say something..."
        />
        <Input
          type="text"
          name="name"
          ref={nameRef}
          required
          id="username"
          className="mb-4 h-12 p-4 rounded-2xl w-5/6"
          placeholder="Your name..."
        />
        <Button
          type="submit"
          variant={"outline"}
          className="rounded-3xl"
          disabled={isSubmitting} // Disable button while submitting
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
      <Notes />
    </div>
  );
}
