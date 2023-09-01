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
  return <section>Form</section>;
}
