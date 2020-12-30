import {
    SortableContainer,
    SortableElement,
    SortableHandle,
} from "react-sortable-hoc";
import arrayMove from "array-move";
import NavBar from "../components/navbar";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import { useState } from "react";

const DragHandle = SortableHandle(() => <DragHandleIcon />);
const VotingContainer = SortableContainer(({ children }) => {
    return <ol className="voting_container">{children}</ol>;
});
const VotingElement = SortableElement(({ value }) => {
    return (
        <li className="voting_item">
            {value}
            <div class="voting_drag_indicator">
                <DragHandle />
            </div>
        </li>
    );
});

function PageVoting() {
    const [anime, setAnimeOrder] = useState([
        "Minami-ke (2007)",
        "Natsume's Book of Friends (2008)",
        "Sayonara Zetsubou Sensei (2008)",
        "Kyouso Giga (2013)",
        "Rokka no Yuusha (2015)",
        "ERASED: Boku dake ga Inai Machi (2016)",
        "Konosuba (2016)",
        "Barakamon (2014)",
        "Overlord (2015)",
        "The Devil is a Part Timer (2013)",
        "Kino no Tabi: The Beautiful World (2003)",
        "Terror in Resonance (2014)",
    ]);

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setAnimeOrder(arrayMove(anime, oldIndex, newIndex));
    };

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

                    <div className="voting_wrapper">
                        <VotingContainer
                            onSortEnd={onSortEnd}
                            helperClass={"voting_item_dragged"}
                        >
                            {anime.map((value, index) => {
                                return (
                                    <VotingElement
                                        key={index}
                                        index={index}
                                        value={value}
                                    />
                                );
                            })}
                        </VotingContainer>

                        <div className="button_container">
                            <button
                                className="button"
                                type="button"
                                onClick="clicked_button()"
                            >
                                Submit vote
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default PageVoting;
