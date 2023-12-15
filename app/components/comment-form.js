"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function CommentForm() {
  const [status, setStatus] = useState(false);
  const [comment, setComment] = useState({ body: "", tags: [] });

  async function createComment() {
    return;
  }
  return (
    <form onSubmit={createComment}>
      <h2>Comment</h2>
      <textarea></textarea>
      <h2>Hashtags</h2>
      <input placeholder="#React"></input>
      <button type="submit">Submit</button>
    </form>
  );
}
