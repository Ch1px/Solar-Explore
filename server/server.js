import RSSParser from "rss-parser"
import cors from "cors"
import express from "express"

const feedURL1 = "https://www.space.com/feeds/all";

const parser = new RSSParser();
let articles = [];
const parse = async url => {
    const feed = await parser.parseURL(url);
    console.log(feed.title)

    feed.items.forEach(item => {
        articles.push({ item })
    })
}

parse(feedURL1);

let app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send(articles);
})

const server = app.listen("5000", () => {
    console.log("listining on port 5000")
})

export default server