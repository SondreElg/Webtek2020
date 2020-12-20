import NavBar from "../components/navbar";

function News() {
    return (
        <>
            <NavBar />

            <div class="page_container">
                <section>
                    <header class="page_title">
                        <h1>Newsfeed</h1>
                        <hr />
                    </header>

                    <div id="newsfeed_container">
                        {/* This section will be filled with content
                     by the script 'showNews.js' */}
                    </div>

                    <footer class="page_title">
                        <hr />
                        <h2>That's all folks!</h2>
                    </footer>
                </section>
            </div>

            {/*<script src="scripts/navbar.js"></script>
    <script src="scripts/becomeMember.js"></script>
    <script src="scripts/news.js"></script>
    <script src="scripts/showNews.js"></script>
    <script>
        displayFirstTwentyNews();
</script>*/}
        </>
    );
}

export default News;
