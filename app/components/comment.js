import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faReply } from "@fortawesome/free-solid-svg-icons";
// overflow-hidden

export default function Comment({ comment }) {
  return (
    <div
      className="min-w-full rounded-lg 
 
  shadow
  bg-color-el
  dark:bg-dark-el"
    >
      <div className="px-6 py-4 h-30 border-b">
        <span>Author : </span>
        <span>{comment.author}</span>
      </div>
      <div className="px-6 py-4 border-b">
        <p>{comment.message}</p>
      </div>
      <div className="flex gap-4 px-6 py-4 items-center">
        <span>{comment.likes}</span>
        <button className="border p-2">
          <FontAwesomeIcon icon={faThumbsUp} />
        </button>
        <ul className="flex gap-2">
          {comment.tags &&
            comment.tags.map((tag) => (
              <li key={tag} className="font-bold text-sm">
                # <span className="font-normal">{tag}</span>
              </li>
            ))}
        </ul>
        <button className="border p-2 ml-auto">
          <FontAwesomeIcon icon={faReply} />
        </button>
      </div>
    </div>
  );
}
