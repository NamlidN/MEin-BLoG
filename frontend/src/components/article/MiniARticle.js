const MiniArticle = ({article}) => {

    return(
<article className="aabb">
    <img src={`http://localhost:9999/${article.path}`} alt="Bild konnte nicht geladen werden" />
     <h3>{article.title}</h3>
    <p>{article.text}</p>

</article>
    )
}
export default MiniArticle