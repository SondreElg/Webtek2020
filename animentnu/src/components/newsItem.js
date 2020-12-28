function NewsItem(props) {
    const dateOptions = { month: "short", day: "numeric", year: "numeric" };
    const date = props.date.toLocaleDateString("en-US", dateOptions);

    return (
        <div className="info_content">
            {props.children}
            <span className="author">
                -{props.author}, {date}
            </span>
        </div>
    );
}

export default NewsItem;
