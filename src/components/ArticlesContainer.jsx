import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { getArticles } from "../utils/api";
import { useSearchParams } from "react-router-dom";

    

export const ArticlesContainer = ({topicName}) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSortOption, setSelectedSortOption] = useState('');
  const [sortValues, setSortValues] = useState({sort_by: 'created_at', order:'desc'})
  let [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value
    setSelectedSortOption(value);
    const params = new URLSearchParams();
    
    if(value==='dateAsc') {
      setSortValues({sort_by: 'created_at', order:'asc'})
      params.set("sort_by", "date");
      params.set("order", "asc");
      
    }
    else if(value==='dateDesc') {
      setSortValues({sort_by: 'created_at', order:'desc'})
      params.set("sort_by", "date");
      params.set("order", "desc");
      
    }
    else if(value==='countAsc') {
      setSortValues({sort_by: 'comment_count', order:'asc'})
      params.set("sort_by", "comment_count");
      params.set("order", "asc");
      
    }
    else if(value==='countDesc') {
      setSortValues({sort_by: 'comment_count', order:'desc'})
      params.set("sort_by", "comment_count");
      params.set("order", "desc");
      
    }
    else if(value==='votesAsc') {
      setSortValues({sort_by: 'votes', order:'asc'})
      params.set("sort_by", "votes");
      params.set("order", "asc");
      
    }
    else if(value==='votesDesc') {
      setSortValues({sort_by: 'votes', order:'desc'})
      params.set("sort_by", "votes");
      params.set("order", "desc");
      
    }
    
    setSearchParams(params);
  };

  useEffect(() => {
    
    getArticles({topicName}, sortValues).then((articlesData) => {
      setArticles(articlesData);
      setIsLoading(false);
    });
  }, [topicName, sortValues, searchParams]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="element_container">

      

      <h2>{topicName ? `Articles on ${topicName}` : 'Articles'}</h2>
      <div className="sort_bar">


    <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedSortOption} onChange={handleChange}>
        
        <option value="dateDesc">Date (Descending)</option>
        <option value="dateAsc">Date (Ascending)</option>
        <option value="countAsc">Comment Count (Ascending)</option>
        <option value="countDesc">Comment Count (Descending)</option>
        <option value="votesAsc">Votes (Ascending)</option>
        <option value="votesDesc">Votes (Descending)</option>
      </select>

      </div>
      <ul className="container_box">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </div>
  );
};

