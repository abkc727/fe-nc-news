import { useParams } from "react-router-dom"
import { ArticlesContainer } from "./ArticlesContainer"

export const TopicPage = ()=> {
    
    const topicName = useParams().topic
    return(
        <>
        <ArticlesContainer topicName={topicName}/>
        </>
    )
}