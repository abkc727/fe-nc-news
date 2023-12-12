export const ArticleCard = (props) => {
   
    const {author, title, topic, votes, article_img_url} = props.article

    return (
        <>

        <li className="article">
            <div className="article_content">
            <h4>{title}</h4>
            <p>Written by <b>{author}</b></p>
            <p>Topic: {topic}</p>
            <p>{votes} votes</p>
            </div>
            <img className = 'article_image' src={article_img_url} alt={title} />
        </li>
        

        


        </>
    )
}

