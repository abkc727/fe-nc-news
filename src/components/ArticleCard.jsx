import { useNavigate } from "react-router-dom";
import { HiNewspaper } from "react-icons/hi2";
export const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  const { article_id, author, title, topic, votes, article_img_url } = article;

  const handleSelectButton = () => {
    navigate(`/article/${article_id}`);
  };

  return (
    <>
      <li className="article" onClick={handleSelectButton}>
        <div className="article_content">
          <h4>{title}</h4>
          <p>Written by <b>{author}</b></p>
          <p>{votes} votes</p>
          
          <p><HiNewspaper /> {topic}</p>
        </div>
        <img className="article_image" src={article_img_url} alt={title} />
      </li>
    </>
  );
};