import newsList from "../scripts/news";
import NewsItem from "./newsItem";

function NewsCollection(props) {
    const firstN = props.firstN >= 0 ? props.firstN : props.newsItems.length;
    const newsItems = props.newsItems.slice(0, firstN);
    return newsItems.map((value, index) => {
        return (
            <NewsItem key={index} author={value.author} date={value.date}>
                {value.content}
            </NewsItem>
        );
    });
}

NewsCollection.defaultProps = {
    newsItems: newsList,
    firstN: -1,
};

export default NewsCollection;
