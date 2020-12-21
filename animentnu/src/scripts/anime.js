import imgHataraku from "../images/hataraku.png";
import imgMinami from "../images/minami.png";
import imgRokka from "../images/rokka.png";
import imgShirobako from "../images/shirobako.png";
import imgTokikake from "../images/tokikake.png";
import imgZetsubou from "../images/zetsubou.png";

const firstScreening = new Date(2020, 7, 26, 23);
const totalScreenings = 13;

/**
 * Dict of the seen episodes
 * Negative numbers imply that they will be screened later in the semester
 */
var nextEpisode = {
    Rokka: 1,
    Hataraku: 1,
    Minami: -11,
    Zetsubou: -12,
    Shirobako: 1,
    Tokikake: -24,
};

/**
 * Dictionary containing information about each anime for this semester
 * Key is a nickname for the anime and points to a list of information
 *
 * 0 = Title of the anime
 * 1 = Synopsis of the anime
 * 2 = Total amount of episodes in the anime
 * 3 = Source of the thumbnail used for the anime
 *
 */
const animeDictionary = {
    Rokka: {
        title: "Rokka -Braves of the Six Flowers-",
        synopsis: (
            <>
                <p>
                    When the Majin awoke from the depths of darkness, the deity
                    of fate chose six heroes and bequeathed them with the power
                    to save the world. Adlet, a boy who proclaims himself the
                    strongest on Earth, was selected among the Rokka no Yuusha
                    (Heroes of the Six Flowers), and he goes to the rendezvous
                    point — but seven have gathered there. The heroes suspect
                    that someone among the seven is the enemy, and the initial
                    suspicion falls on Adlet.
                </p>
                <p>
                    Source:{" "}
                    <a
                        href="https://anilist.co/anime/20955"
                        target="_blank"
                        rel="noreferrer"
                    >
                        AniList
                    </a>
                </p>
            </>
        ),
        episodes: 12,
        imgsrc: imgRokka,
    },
    Hataraku: {
        title: "The Devil is a Part-Timer!",
        synopsis: (
            <>
                <p>
                    Devil King Sadao is only one step away from conquering the
                    world when he is beaten by Hero Emilia and forced to drift
                    to the other world: modern-day Tokyo. As 'conquering the
                    world' are the only skills the Devil King possesses—and are
                    obviously unnecessary in his new situation—he must work as a
                    freeter to pay for his living expenses!
                </p>
                <p>
                    Source:{" "}
                    <a
                        href="https://anilist.co/anime/15809"
                        target="_blank"
                        rel="noreferrer"
                    >
                        AniList
                    </a>
                </p>
            </>
        ),
        episodes: 13,
        imgsrc: imgHataraku,
    },
    Minami: {
        title: "Minami-ke",
        synopsis: (
            <>
                <p>
                    The Minami residence is home to three sisters: the strict
                    and diligent eldest sister Haruka; air-headed and lively
                    Kana; and the youngest, Chiaki, whose sharp tongue spares no
                    one. Living without adult supervision, the sisters share the
                    workload of cooking and laundry, as well as the occasional
                    romantic adventure. From combating chronic laziness to
                    hanging out with friends, there is never a boring day in the
                    Minami household.
                </p>
                <p>
                    Source:{" "}
                    <a
                        href="https://myanimelist.net/anime/2963"
                        target="_blank"
                        rel="noreferrer"
                    >
                        MyAnimeList
                    </a>
                </p>
            </>
        ),
        episodes: 13,
        imgsrc: imgMinami,
    },
    Zetsubou: {
        title: "Sayonara Zetsubou Sensei",
        synopsis: (
            <>
                <p>
                    Itoshiki Nozomu is always in despair! Even simple things
                    like paying for the toll on the subway can send him to a
                    despair so deep only attempted suicide is the answer. How
                    Strange is it then, that he should be the teacher of a High
                    School Class filled with students with even more emotional
                    problems than his. This great Comedy will leave you in
                    anything but 'Despair' as you meet each of his students and
                    watch their wacky adventures.
                </p>
                <p>
                    Source:{" "}
                    <a
                        href="https://anilist.co/anime/2605"
                        target="_blank"
                        rel="noreferrer"
                    >
                        AniList
                    </a>
                </p>
            </>
        ),
        episodes: 12,
        imgsrc: imgZetsubou,
    },
    Shirobako: {
        title: "Shirobako", //Anilist description is super short, while MAL is an essay. Create new description later
        synopsis: (
            <>
                <p>
                    It all started in Kaminoyama High School, when five best
                    friends—Aoi Miyamori, Ema Yasuhara, Midori Imai, Shizuka
                    Sakaki, and Misa Toudou—discovered their collective love for
                    all things anime and formed the animation club. After making
                    their first amateur anime together and showcasing it at the
                    culture festival, the group vow to pursue careers in the
                    industry, aiming to one day work together and create their
                    own mainstream show.
                </p>
                <p>
                    Two and a half years later, Aoi and Ema have managed to land
                    jobs at the illustrious Musashino Animation production
                    company. The others, however, are finding it difficult to
                    get their dream jobs. Shizuka is feeling the weight of not
                    being recognized as a capable voice actor, Misa has a secure
                    yet unsatisfying career designing 3D models for a car
                    company, and Midori is a university student intent on
                    pursuing her dream as a story writer. These five girls will
                    learn that the path to success is one with many diversions,
                    but dreams can still be achieved through perseverance and a
                    touch of eccentric creativity.
                </p>
                <p>
                    Source:{" "}
                    <a
                        href="https://myanimelist.net/anime/25835"
                        target="_blank"
                        rel="noreferrer"
                    >
                        MyAnimeList
                    </a>
                </p>
            </>
        ),
        episodes: 24,
        imgsrc: imgShirobako,
    },
    Tokikake: {
        title: "The Girl Who Leapt Through Time",
        synopsis: (
            <>
                <p>
                    The power to travel through time... It can be used for the
                    good of humanity, or just selfishly abused. While many may
                    fantasize about obtaining such a power, it has become
                    nothing less than reality for otherwise-normal schoolgirl
                    Konno Makoto.
                </p>
                <p>
                    After a fated event, her life takes a turn for the
                    extraordinary. Though she initially uses her power to
                    literally "leap" into the past and change little things in
                    order to make her life easier, she soon has to face the fact
                    that changing the past can have drastic consequences.
                </p>
                <p>
                    Source:{" "}
                    <a
                        href="https://anilist.co/anime/2236"
                        target="_blank"
                        rel="noreferrer"
                    >
                        AniList
                    </a>
                </p>
            </>
        ),
        episodes: 1,
        imgsrc: imgTokikake,
    },
};

export { firstScreening, totalScreenings, nextEpisode, animeDictionary };
