import { getArticleById, patchArticle } from "../utils/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiNewspaper } from "react-icons/hi2";
import { Comments } from "./Comments";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsHandThumbsDown } from "react-icons/bs";

export const ArticlePage = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});
  const [votes, setVotes] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
      setArticle(articleData);
      setVotes(articleData.votes)
      setIsLoading(false);
    });
  }, [article_id]);

  const handleVote = (event, articleId) => {
    const incValue = event.currentTarget.value === 'upvote' ? 1 : event.currentTarget.value === 'downvote' ? -1 : 0;
    setVotes((prevVotes)=> prevVotes +incValue)
    setErr(null);
    patchArticle(articleId, incValue)
    .catch((err)=> {
      setVotes((prevVotes)=> prevVotes-incValue)
      setErr('Something went wrong, please try again!');
    })
  }


  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    
    <section className="article_page">
      <h2>{article.title}</h2>
      <div className="sub_contents">
        <p>
          <HiNewspaper /> {article.topic}
        </p>
        <p>
          written by <b>{article.author}</b>
        </p>
      </div>

      <img
        className="article_page_img"
        src={article.article_img_url}
        alt={article.title}
      />
      <p className="article_body">{article.body}</p>
      <div className="vote">

      <p>Vote:    </p>
      
      <button value='upvote' onClick={(event)=> handleVote(event, article_id)}><BsHandThumbsUp /></button>
      <button value='downvote' onClick={(event)=> handleVote(event, article_id)}><BsHandThumbsDown /></button>
      </div>
      {err ? <p className="error">{err}</p> : null}  
      <div className="sub_contents">

        <p>
          <b>{votes}</b> votes
        </p>
        

        <h4>{article.comment_count} Comments</h4>
      </div>

      {article.comment_count > 0 && <Comments articleId={article.article_id} />}
    </section>
   
  );
};
