import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { getArticles } from "../utils/api";
import { Error } from "./Error";

export const ArticlesContainer = ({topicName}) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(null)

  useEffect(() => {
    getArticles({topicName})
    .then((articlesData) => {
      setArticles(articlesData);
    }).catch((err)=> {
      console.log(err)
      setApiError(err)
      
    }).finally(()=> {
      setIsLoading(false);

    })
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (apiError) {

    return <Error message={`${apiError.message}:   ${apiError.response.data.msg}`} />;
  }

  return (
    <div className="element_container">
      <h2>{topicName ? `Articles on ${topicName}` : 'Articles'}</h2>
      <ul className="container_box">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </div>
  );
};

