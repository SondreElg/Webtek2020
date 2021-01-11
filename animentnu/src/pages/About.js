import NavBar from "../components/navbar";
import "../css/popup.css";

function PageAbout() {
    return (
        <>
            <NavBar />

            <div className="page_container">
                <section>
                    <header className="page_title">
                        <h1>About Anime NTNU</h1>
                        <hr />
                    </header>
                    <div className="info_content">
                        <p>
                            Anime NTNU is a student organization for students
                            and other people who are fond of anime (Japanese
                            animation) or would like to give it a try. We host
                            open screenings of anime weekly at Gløshaugen. Our
                            screenings take place on Wednesdays at 19:30,
                            usually in{" "}
                            <a
                                href="https://bit.ly/34wlaOV"
                                target="_blank"
                                rel="noreferrer"
                            >
                                R5 at "Realfagsbygget"
                            </a>
                            .
                        </p>
                        <p>
                            At the beginning of each semester, we hold a poll
                            which decides which anime will be screened
                            throughout the semester. What anime is in the poll
                            is based on suggestions from the audience and culled
                            to a reasonable amount. We usually end up watching
                            four 1-cour (12-13 episodes) and one 2-cour (24-26
                            episodes) anime each semester.
                        </p>
                        <p>
                            Due to the ongoing pandemic, our screenings are
                            currently held digitally. For more infomation about
                            how we're handling screenings this semester, check
                            out our Discord.
                        </p>
                    </div>
                </section>

                <section>
                    <header className="page_title">
                        <h1>Contact us</h1>
                        <hr />
                    </header>
                    <div className="info_content">
                        <p>
                            You can contact us through our{" "}
                            <a
                                href="https://discord.com/invite/3SQwHyZ"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Discord server
                            </a>
                            .
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}

export default PageAbout;
