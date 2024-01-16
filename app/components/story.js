import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faReply,
  faCircleHalfStroke,
  faBarsProgress,
  faCheck,
  faCircle as faSolidCircle,
  faCircleExclamation,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  faCircle,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
// overflow-hidden

export default function Story({ story, index }) {
  const storyData = {};
  console.log("fieldValues", story.fieldValues);
  story.fieldValues.nodes.forEach((node, i) => {
    console.log("node", node);
    if (node.text) {
      storyData.title = node.text;
    }
    if (node.field?.name) {
      //helper
      const formatString = (str) => str.toLowerCase().replaceAll(" ", "");
      const field = formatString(node.field.name);
      const value = formatString(node.name);
      storyData[field] = value;
    }
  });
  const { title, devstory, status } = storyData;
  return (
    <li className="grid grid-cols-[30px_minmax(0,_500px)_50px] gap-2 mb-2 border-b">
      <span>{`${index + 1})`}</span>
      <Link href={`/story-details/${title}`}>{title}</Link>
      {status === "backlog" && <FontAwesomeIcon icon={faCircle} />}
      {status === "ready" && <FontAwesomeIcon icon={faCircle} />}
      {status === "inprogress" && <FontAwesomeIcon icon={faSpinner} />}
      {status === "done" && <FontAwesomeIcon icon={faCheck} />}
    </li>
  );
}
