// It's API o'clock
import fetchDictionaryEntries from "./scripts/anilistFetch";
//import { useState, useEffect } from 'react';

const votingAnime = {
    20955: 'Rokka',
    15809: 'Hataraku',
    2963: 'Minami',
    2605: 'Zetsubou',
    20812: 'Shirobako',
    2236: 'Tokikake',
    4081: 'Natsume',
    19703: 'Kyouso',
    21234: 'Erased',
    21202: 'Konosuba',
    20722: 'Barakamon',
    20832: 'Overlord',
    486: 'Kino',
    20661: 'Zankyou'
};


const votingAnimeInfo = fetchDictionaryEntries(Object.entries(votingAnime).map((tup) => tup[0]));

/*
function GetVotingInfo() {
    const [data, setData] = useState({});
   
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchDictionaryEntries(
                Object.entries(votingAnime).map((tup) => tup[0])
                );
            setData(result);
            console.log(result);
        };

        fetchData();
    }, []);
   
    return (
      data
    );
}
var votingAnimeInfo = {};

function getVotingInfo() {
    /*if (votingAnimeInfo !== {}) {
        return votingAnimeInfo;
    }*
    var temp = Object.entries(votingAnime).map((tup) => tup[0]);
    console.log(temp);
    votingAnimeInfo = fetchDictionaryEntry(temp);
    console.log(votingAnimeInfo);
    return votingAnimeInfo;
}

var votingAnimeInfo = (async () => {
    return votingAnimeInfo = await Object.entries(votingAnime).map(async (key, value) => {
        fetchDictionaryEntry(key);
    });
})
var votingAnimeInfo = {};

*/

export default votingAnimeInfo;