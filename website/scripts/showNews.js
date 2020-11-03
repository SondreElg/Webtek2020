// Clean this script later, shouldn't need all the logic in showScreenings
// Alternatively, find a way to separate what
var newsCount = 0;
var loaded = false;

function displayFirstTwentyNews() {
    newsCount += 20;
    displayNews(0, newsCount);
}

function displayAllNews() {
    displayNews(newsCount, newsList.length - 1);
}

function displayNews(start, end) {
    loaded = false;
    var thisNewsContent;
    var thisNewsAuthor;
    var thisNewsDate;

    if (start >= end) {
        return;
    }

    if (end >= newsList.length) {
        end = newsList.length - 1;
    }

    for (i = start; i < end; i++) {
        thisNewsContent = newsList[i][newsContent];
        thisNewsAuthor = newsList[i][newsAuthor];
        thisNewsDate = newsList[i][newsDate];

        document.getElementById("newsfeed_container").innerHTML += `
            <div class="info_content">
                <p>
                    ${thisNewsContent}
                </p>
                <span class="author">-${thisNewsAuthor}, ${thisNewsDate}</span>
            </div>`;
    }
    newsCount = end;
    loaded = true;
}

function displayLatestNews() {
    const latestContent = newsList[0][newsContent];
    const latestAuthor = newsList[0][newsAuthor];
    const latestDate = newsList[0][newsDate];

    document.getElementById("news_section").innerHTML += `
    <div class="info_content">
        <p>
            ${latestContent}
        </p>
        <span class="author">-${latestAuthor}, ${latestDate}</span>
    </div>`;
}

function checkScroll() {
    console.log(window.scrollY, document.documentElement.scrollHeight);
    if (
        window.scrollY + 1200 >= document.documentElement.scrollHeight &&
        loaded
    ) {
        loaded = false;
        displayNews(newsCount, newsCount + 20);
        newsCount += 20;
    }
}
