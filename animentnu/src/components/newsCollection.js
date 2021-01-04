import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import newsList from "../newsInfo";
import NewsItem from "./newsItem";

function NewsCollection(props) {
    const firstN = props.firstN >= 0 ? props.firstN : props.newsItems.length;
    const newsItems = props.newsItems.slice(0, firstN);

    const [itemCountVisible, setItemCountVisible] = useState(
        props.itemCountIncrease
    );

    return (
        <InfiniteScroll
            dataLength={itemCountVisible}
            next={() =>
                setItemCountVisible(itemCountVisible + props.itemCountIncrease)
            }
            hasMore={itemCountVisible < newsItems.length}
            loader={<p>Loading...</p>}
        >
            {newsItems.slice(0, itemCountVisible).map((value, index) => {
                return (
                    <NewsItem
                        key={index}
                        author={value.author}
                        date={value.date}
                    >
                        {value.content}
                    </NewsItem>
                );
            })}
        </InfiniteScroll>
    );
}

NewsCollection.defaultProps = {
    newsItems: newsList,
    firstN: -1,
    itemCountIncrease: 20,
};

export default NewsCollection;
