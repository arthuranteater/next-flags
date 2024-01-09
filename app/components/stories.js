import Story from "./story";
import { getClient } from "./apollo-client";
import { GET_STORIES } from "../../utils/api/github";

export default async function Stories() {
  console.log("comments", comments);
  const { data } = await getClient().query({ query: GET_STORIES });
  console.log("nodes", data.node.items.nodes);
  const stories = data.node.items.nodes;

  return (
    <ul className="w-full mt-6 flex flex-wrap gap-10 justify-center">
      {stories.map((story) => (
        <Story story={story} key={story.id} />
      ))}
    </ul>
  );
}
