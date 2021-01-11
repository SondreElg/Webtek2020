import Footer from "../components/footer";
import NavBar from "../components/navbar";
import ScreeningContainer from "../components/animeContainer";
import ScreeningsCollection from "../components/animeCollection";
import "../css/screenings.css";
import "../css/popup.css";

function PageScreenings() {
    const animeListSemester = [
        { name: "Rokka", episodes: null },
        { name: "Hataraku", episodes: null },
        { name: "Minami", episodes: null },
        { name: "Zetsubou", episodes: null },
        { name: "Shirobako", episodes: null },
        { name: "Tokikake", episodes: null },
    ];

    return (
        <>
            <NavBar />

            <div id="semester_container" class="page_container">
                <section>
                    <header class="page_title">
                        <h1>Shows of the semester</h1>
                        <hr />
                    </header>

                    <div class="info_content">
                        <p>
                            Here you can find an overview of what we're watching
                            this semester, and the details of upcoming
                            screenings.
                        </p>
                    </div>

                    <div id="semester_screenings">
                        <ScreeningContainer
                            animeList={animeListSemester}
                            date={"Wednesdays"}
                            time={"19:30"}
                            location={"Discord"}
                            class={"anime_screening"}
                        />
                    </div>
                </section>

                <section>
                    <header class="page_title">
                        <h1>Upcoming screenings</h1>
                        <hr />
                    </header>

                    <div id="screenings_container" class="page_container">
                        <ScreeningsCollection />
                    </div>
                    <Footer />
                </section>
            </div>
        </>
    );
}

export default PageScreenings;
