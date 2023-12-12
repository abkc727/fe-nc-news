import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../utils/api";
import { CommentCard } from "./CommentCard";
import { Collapsible } from "./Collapsible";

export const Comments = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        <ul className="article_box">
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      </Collapsible>
    </div>
  );
};
