import RSSParser from "rss-parser"
import cors from "cors"
import express from "express"

const feedURL1 = "https://www.nasa.gov/rss/dyn/solar_system.rss";
const feedURL2 = "https://www.nasa.gov/rss/dyn/earth.rss";

const parser = new RSSParser();
let articles = [];
const parse = async url => {
    const feed = await parser.parseURL(url);
    console.log(feed.title)

    feed.items.forEach(item => {
        articles.push({ item })
    })
}

parse(feedURL1, feedURL2);

let app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send(articles);
})

const server = app.listen("5000", () => {
    console.log("listining on port 5000")
})

export default server