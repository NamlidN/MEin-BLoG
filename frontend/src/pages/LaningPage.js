import { useEffect, useState } from "react";
import MiniArticle from "../components/article/MiniARticle";
import HeroHeader from "../components/HeroHeader";

const LandingPage = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9999/api/posts")
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <HeroHeader title="ADD MOre STi
        uff" />
            <h1>Home</h1>
            <div className="miniA">
            {
                articles.map((article, key) => <MiniArticle key={key} article={article} />)
            }
            </div>
        </>
    );
};
export default LandingPage;