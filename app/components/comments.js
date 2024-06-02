import Comment from "./comment";
import { getClient } from "./apollo-client";
import { GET_STORIES } from "../../utils/api/github";

export default async function CommentContainer({ comments }) {

  return (
    <ul className="w-full mt-6 flex flex-wrap gap-10 justify-center">
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </ul>
  );
}
