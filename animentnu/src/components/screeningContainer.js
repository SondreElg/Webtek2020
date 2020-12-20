import Screenings from "../pages/Screenings";
import AnimeScreening from "./screening";

function ScreeningContainer(props) {
    return (
        <div class="screening_container">
            Date: {props.date} | Time: {props.time} | Location: {props.location}
            {props.animeList.map((value, index) => {
                return (
                    <AnimeScreening
                        key={index}
                        animeKey={value}
                    ></AnimeScreening>
                );
            })}
        </div>
    );
}

export default ScreeningContainer;
