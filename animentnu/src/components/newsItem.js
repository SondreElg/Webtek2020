function NewsItem(props) {
    return (
        <div className="info_content">
            {props.children}
            <span className="author">
                -{props.author}, {props.date.toDateString()}
            </span>
        </div>
    );
}

export default NewsItem;
