import axios from "axios";
import react, {useEffect, useState} from "react"
import Feed from "./Feed";


function Articles() {
    const [articles, setArticles] = useState([]);

    console.log(articles);

    const getArticles = async () => {
        try {
            const res = await axios.get("http://localhost:5000/");
            setArticles(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getArticles();
    }, [])
    return(
        <>
        {articles.map((item, i) => 
        <Feed key={i} title={item.item.title} link={item.item.link} date={item.item.pubDate}/>)}
        </>
    )
}

export default Articles;