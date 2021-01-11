import NavBar from "../components/navbar";
import NewsCollection from "../components/newsCollection";
import ScreeningsCollection from "../components/animeCollection";
import "../css/frontpage.css";
import "../css/screenings.css";
import "../css/popup.css";

function PageFront() {
    return (
        <>
            <NavBar />
            <div id="frontpage_container">
                <div id="frontpage_welcome">
                    <section>
                        <header>
                            <h1>Welcome</h1>
                            <hr />
                        </header>
                        <div className="info_content">
                            <p>
                                Hello, and welcome to Anime NTNU's sparkling new
                                website!
                            </p>
                            <p>
                                Here you can find information about{" "}
                                <a href="screenings.html">
                                    upcoming screenings
                                </a>
                                ,{" "}
                                <a href="newsfeed.html">news for our members</a>
                                , and some{" "}
                                <a href="about.html">information about us</a>.
                            </p>
                            <p>
                                If you're new to Anime NTNU, maybe take a look
                                at "<a href="about.html">About us</a>"?
                            </p>
                        </div>
                    </section>
                </div>

                <div id="frontpage_news">
                    <section id="news_section">
                        <header
                            id="latest_news_header"
                            onClick="location.href = 'newsfeed.html';"
                        >
                            <h2>Latest news</h2>
                            <hr />
                        </header>
                        <NewsCollection firstN={1} />
                    </section>
                </div>

                <div id="frontpage_nextscreening">
                    <section id="next_screening">
                        <header
                            id="next_screening_header"
                            onClick="location.href = 'screenings.html';"
                        >
                            <h2>Next screening</h2>
                            <hr />
                        </header>
                        <ScreeningsCollection onlyNext={true} />
                    </section>
                </div>
            </div>
        </>
    );
}

export default PageFront;
