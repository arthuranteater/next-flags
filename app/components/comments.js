import Comment from "./comment";
import { getClient } from "./apollo-client";

export default async function CommentContainer({ comments }) {
  //   const { data } = await getClient().query({ query: userQuery });
  //   console.log(data);
  return (
    <ul className="w-full mt-6 flex flex-wrap gap-10 justify-center">
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </ul>
  );
}
