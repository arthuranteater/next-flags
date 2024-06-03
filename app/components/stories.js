import Story from "./story";
import { getClient } from "./apollo-client";
import { GET_STORIES } from "../../utils/api/github";

export default async function Stories() {
  const { data } = await getClient().query({ query: GET_STORIES });
  const stories = data.node.items.nodes;

  return (
    <ul className="w-full mt-6 flex flex-wrap gap-10 justify-center">
      <li className="grid grid-cols-[30px_minmax(0,_500px)_50px] gap-2 mb-2 border-b">
        <h2 className="text-bold"></h2>
        <h2 className="text-bold">Story</h2>
        <h2 className="text-bold">Status</h2>
      </li>
      {stories.map((story, index) => (
        <Story story={story} key={story.id} index={index} />
      ))}
    </ul>
  );
}
