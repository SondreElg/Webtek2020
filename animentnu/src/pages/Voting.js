import NavBar from "../components/navbar";

function PageVoting() {
    return (
        <>
            <NavBar />

            <div class="page_container">
                <section>
                    <header class="page_title">
                        <h1>Voting page</h1>
                        <hr />
                    </header>

                    <div class="info_content">
                        <p>
                            From this page you may vote on which screenings you
                            would like Anime NTNU to host first this upcoming
                            semester. You can do so by dragging and dropping the
                            options to the desired positions. The order of
                            preference is read from top to bottom, meaning that
                            the title you arrange first on the list will be
                            considered the title you would like to watch the
                            most. Likewise, the title at the bottom of the list
                            will be considered the title you want to see the
                            least. After reordering the list to your liking, you
                            can submit the answerby clicking on the "submit
                            vote" button.
                        </p>
                    </div>

                    <div class="voting_wrapper">
                        <ul class="voting_container">
                            <li>Minami-ke (2007)</li>
                            <li>Natsume’s Book of Friends (2008)</li>
                            <li>Sayonara Zetsubou Sensei (2008)</li>
                            <li>Kyouso Giga (2013)</li>
                            <li>Rokka no Yuusha (2015)</li>
                            <li>ERASED: Boku dake ga Inai Machi (2016)</li>
                            <li>Konosuba (2016)</li>
                            <li>Barakamon (2014)</li>
                            <li>Overlord (2015)</li>
                            <li>The Devil is a Part Timer (2013)</li>
                            <li>Kino no Tabi: The Beautiful World (2003)</li>
                            <li>Terror in Resonance (2014)</li>
                        </ul>
                        <div class="button_container">
                            <button
                                class="button"
                                type="button"
                                onClick="clicked_button()"
                            >
                                Submit vote
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            <script src="scripts/voting.js"></script>
        </>
    );
}

export default PageVoting;
