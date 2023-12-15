"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "@/utils/state/context";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function StoryDetail({ story }) {
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    if (window.history.length > 1) {
      setShowBackButton(true);
    }
  }, []);

  const router = useRouter();

  const { href, title, completed } = story;

  const { dark } = useContext(DarkModeContext);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="py-20 min-h-screen text-color-txt dark:text-dark-txt bg-color-bg dark:bg-dark-bg flex flex-wrap w-auto gap-10 justify-center items-center">
        {showBackButton ? (
          <button
            onClick={() => router.back()}
            className="flex justify-center items-center ml-10 border rounded-lg w-[100px] h-[40px]"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span className="ml-2">Back</span>
          </button>
        ) : (
          <></>
        )}

        <div className="relative w-[500px] p-6">
          <h1>{title}</h1>
          <p>description</p>
          <p>completed: {completed}</p>
        </div>
      </div>
    </div>
  );
}
