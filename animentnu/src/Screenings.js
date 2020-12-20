import { useEffect } from "react";
import NavBar from "./components/navbar";
import generateScreenings, {
    generateSemesterAnime,
} from "./scripts/showScreenings";

function Screenings() {
    /*useEffect(() => {
        generateSemesterAnime(
            [
                "Rokka",
                "Hataraku",
                "Minami",
                "Zetsubou",
                "Shirobako",
                "Tokikake",
            ],
            "semester_screenings"
        );
        generateScreenings(
            new Date(),
            [
                "Rokka",
                "Hataraku",
                "Minami",
                "Zetsubou",
                "Shirobako",
                "Tokikake",
            ],
            "screenings_container"
        );
    }, []);*/

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
                        {/* This section will be filled with content by
                     the function 'generateSemesterAnime' */}
                    </div>
                </section>

                <section>
                    <header class="page_title">
                        <h1>Upcoming screenings</h1>
                        <hr />
                    </header>

                    <div id="screenings_container" class="page_container">
                        {/* This section will be filled with content by 
                     the function 'generateFutureScreenings' */}
                    </div>
                    <footer class="page_title">
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
