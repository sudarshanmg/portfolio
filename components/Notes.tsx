"use client";

import { useEffect, useState } from "react";
import { Post } from "@/types/post";
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";

const Notes = () => {
  const [posts, setNotes] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(
          "https://sudarshanmg.vercel.app/api/data/notes"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch notes");
        }
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return isLoading ? (
    <header className="text-center font-thin font-mono text-neutral-500">
      loading...
    </header>
  ) : (
    <div className="w-full h-full flex flex-col items-center my-8 overflow-x-clip">
      {posts && (
        <div className="w-full h-full">
          <GridContainer>
            {posts.map((post, index) => (
              <GridItem key={index}>
                <h1 className="font-acorn text-4xl text-neutral-700">
                  {post.note}
                </h1>
                <span className="font-playfair text-black">- {post.name}</span>
              </GridItem>
            ))}
          </GridContainer>
        </div>
      )}
    </div>
  );
};

export default Notes;
