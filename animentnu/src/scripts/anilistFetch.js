import { useState, useEffect } from 'react';

// Here we define our query as a multi-line string
// Storing it in a separate .graphql/.gql file is also possible
var animeQuery = `
query ($ids: [Int], $page: Int, $perPage: Int, $search: String) {
    Page (page: $page, perPage: $perPage) {
        media (id_in: $ids, search: $search) {
            id
            title {
                romaji
                english
            }
            description(asHtml: true)
                episodes
                coverImage {
                    large
                }
            }
        }
    }
`;

function FetchAnime(anime, query) {
    const [data, setData] = useState(undefined);

    useEffect((anime, query) => {
        // Define the config we'll need for our Api request
        var url = 'https://graphql.anilist.co'
        var options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: {"ids": anime}
            })
        };
        fetch(url, options).then(handleResponse)
                            .then(result => setData(handleData(result)))
                            .catch(handleError);
    }, []);
    return data;
}

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
    return data["data"]["Page"]["media"];
}

function returnData(data) {
    return data;
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}

function fetchDictionaryEntries(id) {
    const data = FetchAnime(id, animeQuery);
    console.log(data);
    return data;
}

export default fetchDictionaryEntries;


/*
function toDictionaryEntry() {
    //console.log(animeData);
    console.log(animeData);
    const obj = {};
    
    const id = animeData.id; 
    const title = animeData.title.english == null ? animeData.title.english : animeData.title.english;
    const description = animeData.description;
    const episodes = animeData.episodes;
    const image = animeData.coverImage;

    obj[id] = {
        title,
        description,
        episodes,
        image
    }

    return obj;
}

async function fetchAnime(anime) {
    // Define the config we'll need for our Api request
    var url = 'https://graphql.anilist.co'
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: animeQuery,
            variables: {"ids": anime}
        })
    };

    // Make the HTTP Api request
    return await fetch(url, options).then(handleResponse)
                            .then(handleData)
                            .catch(handleError);
}

function FetchAnime(anime, query) {
    const [data, setData] = useState(undefined);

    useEffect((anime) => {
        // Define the config we'll need for our Api request
        var url = 'https://graphql.anilist.co'
        var options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: {"ids": anime}
            })
        };
        const fetchData = async () => {
            // Make the HTTP Api request
            const result = await fetch(url, options).then(handleResponse)
                                                    .then(handleData)
                                                    .catch(handleError);
            setData(result);
        };
        fetchData();
    }, []);
    return data;
}
*/