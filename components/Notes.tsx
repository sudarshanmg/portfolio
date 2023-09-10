"use client";

export const revalidate = 0;
import { useState, useEffect, useCallback } from "react";
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import { supabaseClient } from "@/supabase/supabaseClient";

const Notes = () => {
  const [posts, setPosts] = useState<
    | {
        username: string;
        note: string;
      }[]
    | null
  >(null);

  useEffect(() => {
    const fetchPosts = async () => {
      let { data: notes, error } = await supabaseClient
        .from("notes")
        .select("*");
      setPosts(notes);
    };
    fetchPosts();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center my-8">
      {posts && (
        <div className="w-full h-full">
          <GridContainer>
            {posts.map((post, index) => (
              <GridItem key={index}>
                <h1 className="font-acorn text-4xl text-neutral-700">
                  {post.note}
                </h1>
                <span className="font-playfair text-black">
                  - {post.username}
                </span>
              </GridItem>
            ))}
          </GridContainer>
        </div>
      )}
    </div>
  );
};

export default Notes;
