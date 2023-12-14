import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { getArticles } from "../utils/api";

export const ArticlesContainer = ({topicName}) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles({topicName}).then((articlesData) => {
      setArticles(articlesData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
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

