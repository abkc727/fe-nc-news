import { useState } from "react";
import { deleteComment, getCommentsByArticleId } from "../utils/api";
export const CommentCard = ({ comment, setComments, setErr, setSuccess, setCommentCount}) => {
  const username = 'tickle122'
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  

  const handleDeleteButton = (e)=> {
    e.preventDefault()
    setIsButtonDisabled(true)
    if(username===comment.author) {
      deleteComment(comment.comment_id)
      .then((rowCount)=> {
        if(rowCount!==0) {        
            getCommentsByArticleId(comment.article_id)
            .then((updatedComments)=> {
              setComments(updatedComments)
            })
        }
        setCommentCount((currCommentCount)=> {
          return currCommentCount-1
      })
        setErr(null)
        setSuccess('Comment deleted successfully!')
      })
      .catch((err)=> {
        setErr('Something went wrong, please try again!');
        
        setSuccess(null)
        
      })
      .finally(()=> {
        setIsButtonDisabled(false)
      })
    }
  }

  
  return (
    <>
    
      <li className="comment_box">
      {username === comment.author && (
          <button className='deleteButton' disabled={isButtonDisabled}onClick={handleDeleteButton}>Delete ❌</button>
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
