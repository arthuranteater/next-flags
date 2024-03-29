import Comment from "./comment";
import { getClient } from "./apollo-client";
import { GET_STORIES } from "../../utils/api/github";

export default async function CommentContainer({ comments }) {
  console.log("comments", comments);
  const { data } = await getClient().query({ query: GET_STORIES });
  console.log("nodes", data.node.items.nodes);
  const nodes = data.node.items.nodes;

  return (
    <ul className="w-full mt-6 flex flex-wrap gap-10 justify-center">
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </ul>
  );
}
