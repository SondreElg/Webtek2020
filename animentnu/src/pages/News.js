import Footer from "../components/footer";
import NavBar from "../components/navbar";
import NewsCollection from "../components/newsCollection";

function PageNews() {
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

                    <Footer />
                </section>
            </div>
        </>
    );
}

export default PageNews;
