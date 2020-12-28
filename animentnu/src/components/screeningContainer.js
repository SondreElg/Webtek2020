import Screening from "./screening";

function ScreeningContainer(props) {
    return (
        <div className="screening_container">
            Date: {props.date} | Time: {props.time} | Location: {props.location}
            {props.animeList.map((value, index) => {
                return (
                    <Screening
                        key={index}
                        animeKey={value.name}
                        episodes={value.episodes}
                    ></Screening>
                );
            })}
        </div>
    );
}

export default ScreeningContainer;
