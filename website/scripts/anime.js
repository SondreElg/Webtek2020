const firstScreening = new Date(2020, 7, 26, 23);
const totalScreenings = 13;

const animeTitle = 0;
const animeSynopsis = 1;
const animeTotalEpisodes = 2;
const animeImgsrc = 3;
const animeCour = 4;

//Dict of seen epsiodes, necessary for screenings.js
var nextEpisode={
    "Rokka":1,
    "Hataraku":1,
    "Minami":-11,
    "Zetsubou":-12,
    "Shirobako":1    
}

//Totally not a database containing information about each anime for this semester
const animeDictionary={
    "Rokka":["Rokka -Braves of the Six Flowers-",
    `When the Majin awoke from the depths of darkness, 
    the deity of fate chose six heroes and bequeathed 
    them with the power to save the world. Adlet, a 
    boy who proclaims himself the strongest on Earth, 
    was selected among the Rokka no Yuusha (Heroes of 
    the Six Flowers), and he goes to the rendezvous 
    point — but seven have gathered there. The heroes 
    suspect that someone among the seven is the enemy, 
    and the initial suspicion falls on Adlet.<br/>
    <br/>
    source: <a href="https://anilist.co/anime/20955" target="blank">AniList<a/>`,
    12,
    "images/rokka.jpg",
    1],
    "Hataraku":["The Devil is a Part-Timer!",
    `Devil King Sadao is only one step away from conquering 
    the world when he is beaten by Hero Emilia and forced 
    to drift to the other world: modern-day Tokyo. As 
    "conquering the world" are the only skills the Devil 
    King possesses—and are obviously unnecessary in his 
    new situation—he must work as a freeter to pay for 
    his living expenses!<br/>
    <br/>
    source: <a href="https://anilist.co/anime/15809" target="blank">AniList<a/>`,
    13,
    "images/hataraku.jpg",
    1],
    "Minami":["Minami-ke",
    `The Minami residence is home to three sisters: the 
    strict and diligent eldest sister Haruka; air-headed 
    and lively Kana; and the youngest, Chiaki, whose sharp 
    tongue spares no one. Living without adult supervision, 
    the sisters share the workload of cooking and laundry, 
    as well as the occasional romantic adventure. From 
    combating chronic laziness to hanging out with friends, 
    there is never a boring day in the Minami household.<br/>
    <br/>
    source: <a href="https://myanimelist.net/anime/2963" target="blank">MyAnimeList<a/>`,
    13,
    "images/minami.jpg",
    2],
    "Zetsubou":["Sayonara Zetsubou Sensei",
    `Itoshiki Nozomu is always in despair! Even simple 
    things like paying for the toll on the subway can 
    send him to a despair so deep only attempted suicide 
    is the answer. How Strange is it then, that he should 
    be the teacher of a High School Class filled with 
    students with even more emotional problems than his. 
    This great Comedy will leave you in anything but 
    'Despair' as you meet each of his students and watch 
    their wacky adventures.<br/>
    <br/>
    source: <a href="https://anilist.co/anime/2605" target="blank">AniList<a/>`,
    12,
    "images/zetsubou.jpg",
    2],
    "Shirobako":["Shirobako", //Anilist description is super short, while MAL is an essay. Create new description later
    `It all started in Kaminoyama High School, when five 
    best friends—Aoi Miyamori, Ema Yasuhara, Midori Imai, 
    Shizuka Sakaki, and Misa Toudou—discovered their 
    collective love for all things anime and formed the 
    animation club. After making their first amateur anime 
    together and showcasing it at the culture festival, 
    the group vow to pursue careers in the industry, 
    aiming to one day work together and create their 
    own mainstream show.<br/>
    <br/>
    Two and a half years later, Aoi and Ema have managed 
    to land jobs at the illustrious Musashino Animation 
    production company. The others, however, are finding 
    it difficult to get their dream jobs. Shizuka is 
    feeling the weight of not being recognized as a 
    capable voice actor, Misa has a secure yet 
    unsatisfying career designing 3D models for a car 
    company, and Midori is a university student intent 
    on pursuing her dream as a story writer. These five 
    girls will learn that the path to success is one 
    with many diversions, but dreams can still be achieved 
    through perseverance and a touch of eccentric creativity.<br/>
    <br/>
    source: <a href="https://myanimelist.net/anime/25835" target="blank">MyAnimeList<a/>`,
    24,
    "images/shirobako.jpg",
    1]
};