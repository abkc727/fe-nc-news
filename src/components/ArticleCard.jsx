export const ArticleCard = (props) => {
    console.log(props.article.article_image_url)

    const {author, title, topic, votes, article_img_url} = props.article

    return (
        <>

        <li className="article">
            <div className="article_content">
            <h4>{title}</h4>
            <p>Author: {author}</p>
            <p>Topic: {topic}</p>
            <p>Votes: {votes}</p>
            </div>
            <img className = 'article_image' src={article_img_url} alt={title} />
        </li>
        

        


        </>
    )
}

