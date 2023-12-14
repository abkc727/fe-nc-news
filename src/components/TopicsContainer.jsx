import { useEffect, useState } from "react"
import { getTopics } from "../utils/api";
import { TopicCard } from "./TopicCard";
import { TopicPage } from "./TopicPage";

export const TopicsContainer = () => {

    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getTopics().then((topicsData) => {
            setTopics(topicsData);
          setIsLoading(false);
        });
      }, []);



    if (isLoading) {
        return <p>Loading...</p>;
      }
    


    return (
       
        <div className="element_container">
      <h3>Topics</h3>
      <ul className="container_box">
        {topics.map((topic) => {
          return <TopicCard key={topic.slug} topic={topic} />;
        })}
      </ul>
      <TopicPage />
    </div>
      
    )

}