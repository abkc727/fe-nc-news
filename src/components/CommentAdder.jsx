import { useEffect, useState } from "react";

import { postComment } from "../utils/api";
export const CommentAdder = ({ setComments, articleId, setCommentCount }) => {
  const [newComment, setNewComment] = useState("");
  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isformDisabled, setIsFormDisabled] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendToBackEnd = () => {
    setIsFormDisabled(true);
    postComment(articleId, newComment)
      .then((newCommentFromApi) => {
        setNewComment("");
        setComments((currComments) => {
          return [newCommentFromApi, ...currComments];
        });
        setCommentCount((currCommentCount) => {
          return currCommentCount + 1;
        });
        setErr(null);
        setSuccess("Comment added successfully!");
        setIsError(false);
      })
      .catch((err) => {
        setErr("Something went wrong, please try again!");
        setSuccess(null);
      })
      .finally(() => {
        setIsFormDisabled(false);
      });
  };






  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.length > 0) {
      sendToBackEnd();
    } else {
      console.log("yes");
      setIsError(true);
    }
  };

  return (
    <form className="CommentAdder" onSubmit={handleSubmit}>
      <div className="NewComment">
        <label htmlFor="newComment">Add a comment:</label>
        <textarea
          id="newComment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          
        ></textarea>
        <button disabled={isformDisabled}>Add</button>

        {err ? <p className="error">{err}</p> : null}
        {success ? <p className="success">{success}</p> : null}
        {isError ? <p className="error"> Add all required fields! </p> : null}
      </div>
    </form>
  );
};
