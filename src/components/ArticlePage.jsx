import { getArticleById } from "../utils/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiNewspaper } from "react-icons/hi2";

export const ArticlePage = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
      setArticle(articleData);
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
      <p><HiNewspaper /> {article.topic}</p>
      <p>written by <b>{article.author}</b></p>
      <p><b>{article.votes}</b> votes</p>
      <p><b>{article.votes}</b> comments</p>
  
      </div>
      <p className="article_body">{article.body}</p>
      <img className='article_page_img' src={article.article_img_url} alt={article.title} />
      
    </div>
  );
};
