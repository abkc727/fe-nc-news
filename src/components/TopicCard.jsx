import { useNavigate } from "react-router-dom";
export const TopicCard = ({ topic }) => {
    const navigate = useNavigate();

    const handleSelectButton = () => {
        navigate(`/articles/${topic.slug}`);
      };


    return (
      <>
        <li className="topicbox" onClick={handleSelectButton}>
            
            <h4>{topic.slug}</h4>
            <p>{topic.description}</p>
        </li>
      </>
    );
  };
  