"use server";

import { Post } from "@/types/post";

export const sendPost = async (post: Post) => {
  try {
    // Send a POST request to your API endpoint
    const response = await fetch(
      "https://sudarshanmg.vercel.app/api/data/notes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to leave a note");
    } else {
      return true;
    }
  } catch (error) {
    console.error("Error creating note:", error);
  }
  return false;
};
