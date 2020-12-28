import { useEffect } from "react";
import NavBar from "../components/navbar";
import ScreeningContainer from "../components/screeningContainer";
import ScreeningsCollection from "../components/screeningsCollection";
import episodesInfo from "../episodesInfo";
import generateScreenings from "../scripts/showScreenings";

function Screenings(props) {
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
                        <ScreeningsCollection
                            episodesInfo={episodesInfo}
                            startDate={new Date(2020, 7, 26)}
                            dayIncr={7}
                            onlyNext={false}
                        />
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

export default Screenings;