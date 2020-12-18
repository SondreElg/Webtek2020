import newsList, { newsAuthor, newsContent, newsDate } from "./news";

var newsCount = 0; // Total news loaded
var loaded = false; // Bool for checking if news have finished loading

/**
 * Calls displayNews() with arguments to display the first twenty news posts at
 * the Newsfeed page and updates newsCount
 */
function displayFirstTwentyNews() {
    newsCount += 20;
    displayNews(0, newsCount, "newsfeed_container");
}

/**
 * Calls displayNews() with arguments to display just the first news post at the frontpage
 */
function displayLatestNews() {
    displayNews(0, 1, "news_section");
}

/**
 * Generates "info_content" divs for all the news in newsList with index from (inclusive)
 * start to (exclusive) end
 *
 * @param {Int} start The lower bound for which news posts to load
 * @param {Int} end The upper bound for which news posts to load
 * @param {String} target The div in which the news posts will be appended
 */
function displayNews(start, end, target) {
    loaded = false;

    if (end >= newsList.length) {
        end = newsList.length - 1;
    }

    for (var i = start; i < end; i++) {
        //Append each news post to info_content
        document.getElementById(target).innerHTML += `
            <div class="info_content">
                <p>
                    ${newsList[i][newsContent]}
                </p>
                <span class="author">-${newsList[i][newsAuthor]}, ${newsList[i][newsDate]}</span>
            </div>`;
    }
    newsCount = end;
    loaded = true;
}

/**
 * Loads 20 more news if the user scrolls near the bottom of the page
 */
function checkScroll() {
    if (
        window.scrollY + 1200 >= document.documentElement.scrollHeight &&
        loaded
    ) {
        loaded = false;
        displayNews(newsCount, newsCount + 20, "newsfeed_container");
        newsCount += 20;
    }
}

export { displayFirstTwentyNews, displayLatestNews, displayNews, checkScroll };
