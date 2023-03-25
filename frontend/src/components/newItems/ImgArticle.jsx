import axios from "axios";
import react, { useEffect, useState } from "react"
import Imgfeed from "./ImgFeed";

const backendURL = 'http://localhost:80'

function ImgArticles() {
    const [articles, setArticles] = useState([]);

    console.log(articles);

    const getArticles = async () => {
        try {
            const res = await axios.get(`${backendURL}/`);
            setArticles(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getArticles();
    }, [])

    return (
        <>
            {articles.map((item, i) => (
                <Imgfeed
                    key={i}
                    image={item.item.enclosure?.url} // get the image URL from the item's enclosure object
                />
            ))}
        </>
    )
}

export default ImgArticles;