"use client";

import { useState, useEffect, useCallback } from "react";
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";

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
      const response = await fetch("/api/fetch-notes", {
        method: "GET",
      });
      const data = await response.json();
      setPosts(data.notes.rows);
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
