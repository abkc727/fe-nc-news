import { useEffect, useState } from "react"
import { ArticleCard } from "./ArticleCard"
import { getArticles } from "../utils/api"

export const ArticlesContainer = () => {

  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {

    getArticles().then((articlesData)=> {
        setArticles(articlesData)
        setIsLoading(false)
    })
}, [])


  if(isLoading) {

    return <p>Loading...</p>
}


  return (

    <div className="articlesContainer">
      <h3>Articles</h3>
      <ul className="article_box">
                {articles.map((article)=> {
                   
                    return <ArticleCard key = {article.article_id} article = {article}   />

                })}
            </ul>
      
    </div>


  )
    
   }

