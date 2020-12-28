function NewsItem(props) {
    return (
        <div class="info_content">
            {props.children}
            <span class="author">
                -{props.author}, {props.date.toDateString()}
            </span>
        </div>
    );
}

export default NewsItem;
