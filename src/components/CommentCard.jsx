import { CiCircleRemove } from "react-icons/ci";
import { useEffect, useState } from "react";
import { deleteComment, getCommentsByArticleId } from "../utils/api";
export const CommentCard = ({ comment, setComments, setErr, setSuccess }) => {
  const username = 'jessjelly'
  

  const handleDeleteButton = (e)=> {
    e.preventDefault()
    if(username===comment.author) {
      deleteComment(comment.comment_id)
      .then((rowCount)=> {
        if(rowCount!==0) {        
            getCommentsByArticleId(comment.article_id)
            .then((updatedComments)=> {
              setComments(updatedComments)
            })
        }
        setErr(null)
        setSuccess('Comment deleted successfully!')
      })
      .catch((err)=> {
        setErr('Something went wrong, please try again!');
        setSuccess(null)
        
      })
    }
  }

  
  return (
    <>
    
      <li className="comment_box">
      {username === comment.author && (
          <button onClick={handleDeleteButton}>❌ Delete</button>
        )}
        <div className="sub_contents">
          <p>@{comment.author}</p>
          <p>{comment.votes} votes</p>
        </div>
        <p>{comment.body}</p>
        
      </li>
    </>
  );
};
