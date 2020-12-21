import { useEffect } from "react";
import NavBar from "../components/navbar";
import ScreeningContainer from "../components/screeningContainer";
import ScreeningsCollection from "../components/screeningsCollection";
import generateScreenings from "../scripts/showScreenings";

function Screenings(props) {
    /*useEffect(() => {
        generateScreenings(
            new Date(2020, 6, 30),
            [
                "Rokka",
                "Hataraku",
                "Minami",
                "Zetsubou",
                "Shirobako",
                "Tokikake",
            ],
            "screenings_container",
            false
        );
    }, []);*/

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

            <div id="semester_container" className="page_container">
                <section>
                    <header className="page_title">
                        <h1>Shows of the semester</h1>
                        <hr />
                    </header>

                    <div className="info_content">
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
                        />
                    </div>
                </section>

                <section>
                    <header className="page_title">
                        <h1>Upcoming screenings</h1>
                        <hr />
                    </header>

                    <div id="screenings_container" className="page_container">
                        <ScreeningsCollection />
                    </div>
                    <footer className="page_title">
                        <hr />
                        <h2>That's all folks!</h2>
                    </footer>
                </section>
            </div>

            {/*<script src="scripts/navbar.js"></script>
            <script src="scripts/anime.js"></script>
            <script src="scripts/showScreenings.js"></script>
            <script src="scripts/popupNotification.js"></script>
            <script>
                generateSemesterAnime( ["Rokka", "Hataraku", "Minami",
                "Zetsubou", "Shirobako", "Tokikake"], "semester_screenings" );
                generateScreenings ( new Date(), ["Rokka", "Hataraku", "Minami",
                "Zetsubou", "Shirobako", "Tokikake"], "screenings_container", );
            </script>
                    <script src="scripts/becomeMember.js"></script>*/}
        </>
    );
}

export default Screenings;
