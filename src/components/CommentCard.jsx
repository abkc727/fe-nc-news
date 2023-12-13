export const CommentCard = ({ comment }) => {
  return (
    <>
      <li className="comment_box">
        <div className="sub_contents">
          <p>@{comment.author}</p>
          <p>{comment.votes} votes</p>
        </div>
        <p>{comment.body}</p>
      </li>
    </>
  );
};
