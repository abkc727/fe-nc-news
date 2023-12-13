import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../utils/api";
import { CommentCard } from "./CommentCard";
import { Collapsible } from "./Collapsible";


export const Comments = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    getCommentsByArticleId(articleId).then((commentsData) => {
      setComments(commentsData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="comments">
      <Collapsible descriptor="Comments">
      {err ? <p className="error">{err}</p> : null }
      {success ? <p className="success">{success}</p> : null }
        <ul className="article_box">
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} setComments={setComments} setErr={setErr} setSuccess={setSuccess}/>;
          })}
        </ul>
      </Collapsible>
    </div>
  );
};
