import NavBar from "../components/navbar";
import { VotingContainer } from "../components/animeContainer";
import getVotingInfo from "../votingInfo";
import "../css/voting.css";
import "../css/popup.css";

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
                            can submit the answer by clicking on the "submit
                            vote" button.
                        </p>
                    </div>

                    <div id="voting_wrapper">
                        <VotingContainer
                            animeList={getVotingInfo}
                        />
                    </div>
                </section>
            </div>

            <script src="scripts/voting.js"></script>
        </>
    );
}

export default PageVoting;
