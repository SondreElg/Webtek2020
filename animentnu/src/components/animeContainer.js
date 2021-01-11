import { useState, useEffect } from 'react';
import AnimeBox from "./animeBox";


export function ScreeningContainer(props) { // split into screeening and voting container
    return (
        <div class="screening_container">
            Date: {props.date} | Time: {props.time} | Location: {props.location}
            {props.animeList.map((value, index) => {
                return (
                    <AnimeBox
                        key={index}
                        animeKey={value.title}
                        episodes={value.episodes}
                        coverImage={value.coverImage}
                        class={props.className}
                    ></AnimeBox>
                );
            })}
        </div>
    );
}


export async function VotingContainer(props) {
    var aniList = await props.animeList;
    console.log(aniList);
    return (
        <div class="voting_container">
            {aniList.map((anime) => {
                return (
                    <AnimeBox
                        key={anime["id"]}
                        episodes={anime["episodes"]}
                        title={anime["title"]["english"] == null ? anime["title"]["english"] : anime["title"]["english"]}
                        coverImage={anime["coverImage"]}
                        class={"voting_box"}
                    ></AnimeBox>
                );
            })}
        </div>
    );
}

export default ScreeningContainer;


/*
export function VotingContainer(props) {
    let [data, setData] = useState(undefined);

    useEffect(() => {
        async function fetchData () {
            const result = await props.animeList;
            console.log(result);
            setData(result);
        }
        fetchData();
    }, []);
    console.log(data);
    return (
        <div class="voting_container">
            {data.map((anime) => {
                return (
                    <AnimeBox
                        key={anime["id"]}
                        episodes={anime["episodes"]}
                        title={anime["title"]["english"] == null ? anime["title"]["english"] : anime["title"]["english"]}
                        coverImage={anime["coverImage"]}
                        class={"voting_box"}
                    ></AnimeBox>
                );
            })}
        </div>
    );
}
*/