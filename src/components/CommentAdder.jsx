import { useEffect, useState } from "react";

import { postComment } from "../utils/api";
export const CommentAdder = ({ setComments, articleId, setCommentCount}) => {
  const [newComment, setNewComment] = useState("");
  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(articleId, newComment).then((newCommentFromApi)=> {
        setNewComment("")
        setComments((currComments)=> {
            return [newCommentFromApi, ...currComments]
        })
        setCommentCount((currCommentCount)=> {
            return currCommentCount+1
        })
        setErr(null)
        setSuccess('Comment added successfully!')
    }).catch((err)=> {
        setErr('Something went wrong, please try again!');
        setSuccess(null)
    })
    
  }

  return (
    <form className="CommentAdder" onSubmit={handleSubmit}>
        <div className="NewComment">
      <label htmlFor="newComment">Add a comment:</label>
      <textarea 
      id="newComment"
      value={newComment}
      onChange={(e)=> setNewComment(e.target.value)}
      required
      ></textarea>
      <button>Add</button>

      {err ? <p className="error">{err}</p> : null }
      {success ? <p className="success">{success}</p> : null }
    

      </div>
    </form>
  );
};
