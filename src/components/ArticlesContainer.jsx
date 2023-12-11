import { useState } from "react"
import { ArticleCard } from "./ArticleCard"

export const ArticlesContainer = () => {

  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  if(isLoading) {

    return <p>Loading...</p>
}


  return (

    <div className="articlesContainer">
      <h3>Articles</h3>
      <ul>
                {articles.map((article)=> {
                   
                    return <ArticleCard key = {article.article_id} article_id = {article.article_id} 
                    />

                })}
            </ul>
      
    </div>


  )
    
   }

