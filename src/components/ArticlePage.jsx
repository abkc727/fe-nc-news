import { getArticleById } from "../utils/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiNewspaper } from "react-icons/hi2";
import { Comments } from "./Comments";

export const ArticlePage = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [commentCount, setCommentCount] = useState(null)

  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
      setArticle(articleData);
      setCommentCount(articleData.comment_count);
      setIsLoading(false);
    });
  }, [article_id]);
  



  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="article_page">
      <h2>{article.title}</h2>
      <div className="sub_contents">
        <p>
          <HiNewspaper /> {article.topic}
        </p>
        <p>
          written by <b>{article.author}</b>
        </p>
        <p>
          <b>{article.votes}</b> votes
        </p>
      </div>
      <img
        className="article_page_img"
        src={article.article_img_url}
        alt={article.title}
      />
      <p className="article_body">{article.body}</p>

      <h4>{commentCount} Comments</h4>

      {commentCount > 0 && <Comments articleId={article.article_id} setCommentCount = {setCommentCount} />}
    </div>
  );
};
