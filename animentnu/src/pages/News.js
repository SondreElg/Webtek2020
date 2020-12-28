import NavBar from "../components/navbar";
import NewsCollection from "../components/newsCollection";

function News() {
    return (
        <>
            <NavBar />

            <div className="page_container">
                <section>
                    <header className="page_title">
                        <h1>Newsfeed</h1>
                        <hr />
                    </header>

                    <div id="newsfeed_container">
                        <NewsCollection />
                    </div>

                    <footer className="page_title">
                        <hr />
                        <h2>That's all folks!</h2>
                    </footer>
                </section>
            </div>
        </>
    );
}

export default News;
