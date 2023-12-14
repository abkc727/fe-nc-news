import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../utils/api";
import { CommentCard } from "./CommentCard";
import { Collapsible } from "./Collapsible";
import { CommentAdder } from "./CommentAdder";


export const Comments = ({ articleId , setCommentCount}) => {
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
    <section>
      <CommentAdder setComments = {setComments} articleId={articleId} setCommentCount={setCommentCount}/>
    <div className="comments">
      <Collapsible descriptor="Comments">
      {err ? <p className="error">{err}</p> : null }
      {success ? <p className="success">{success}</p> : null }
        <ul className="article_box">
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} setComments={setComments} setErr={setErr} setSuccess={setSuccess} setCommentCount={setCommentCount}/>;
          })}
        </ul>
      </Collapsible>
    </div>
    </section>
  );
};
