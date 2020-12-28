import newsList from "../scripts/news";
import NewsItem from "./newsItem";

function NewsCollection(props) {
    return props.newsItems.map((value, index) => {
        return (
            <NewsItem key={index} author={value.author} date={value.date}>
                {value.content}
            </NewsItem>
        );
    });
}

NewsCollection.defaultProps = {
    newsItems: newsList,
};

export default NewsCollection;
