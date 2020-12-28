const newsContent = 0;
const newsAuthor = 1;
const newsDate = 2;

/**
 * List of all news on the page
 * The list is sorted from newest to oldest
 * Each entry is a dictionary in the following format
 *
 * 0 = The body of the news post
 * 1 = The author of the news post
 * 2 = The date of the news post
 */
var newsList = [
    {
        content: (
            <>
                <p>
                    Why hello there, everyone. We'll be kicking off with regular
                    viewings today at 19:30.
                </p>
                <p>
                    Social events at campus are still prohibited, so for the
                    time being, we'll be doing online viewings through berntjd's
                    website (link will be posted later) and gather in #general
                    on our Discord server.
                </p>
                <p>
                    The series are as follows:
                    <ul>
                        <li>Rokka no Yuusha (Rokka -Braves of Six Flowers-)</li>
                        <li>Hataraku Maou-Sama (The Devil is a Part-Timer!)</li>
                        <li>Shirobako</li>
                    </ul>
                </p>
                <p>
                    Break entertainment:
                    <ul>
                        <li>
                            Saiki Kusuo no Ψ-nan (The Disastrous Life of Saiki
                            K.)
                        </li>
                    </ul>
                </p>
            </>
        ),
        author: "sondrhel",
        date: new Date(2020, 7, 26),
    },
    {
        content: (
            <>
                <p>
                    Alright everyone, it's that time of the year again. It's
                    time to vote for which series we'll be watching this
                    semester.
                </p>
                <p>
                    Please fill out
                    <a
                        href="https://forms.gle/EPamhaSdTsxk5UKKA"
                        target="blank"
                    >
                        this form
                    </a>
                    by the end of the week to make your votes count
                </p>
            </>
        ),
        author: "sondrhel",
        date: new Date(2020, 7, 19),
    },
    {
        content: (
            <>
                <p>
                    We are starting off the spring 2020 semester by showing the
                    2012 animated movie Wolf Children this Wednesday
                    (2020-01-15) at 19:30 in R5. Bring a friend!
                </p>
                <p>
                    The poll for new series is up, and available at{" "}
                    <a
                        href="https://forms.gle/m8gQFJP8E2ATWr2e7"
                        target="blank"
                    >
                        https://forms.gle/m8gQFJP8E2ATWr2e7
                    </a>
                    . It will stay active until the end of week 3.
                </p>
            </>
        ),
        author: "berntjd",
        date: new Date(2020, 0, 19),
    },
    {
        content: (
            <>
                <h4>Spring 2020 - Voting open - Movie on Wednesday</h4>
                <p>
                    We are starting off the spring 2020 semester by showing the
                    2012 animated movie Wolf Children this Wednesday
                    (2020-01-15) at 19:30 in R5. Bring a friend!
                </p>
                <p>
                    The poll for new series is up, and available at{" "}
                    <a
                        href="https://forms.gle/m8gQFJP8E2ATWr2e7"
                        target="blank"
                    >
                        https://forms.gle/m8gQFJP8E2ATWr2e7
                    </a>
                    . It will stay active until the end of week 3.
                </p>
            </>
        ),
        author: "berntjd",
        date: new Date(2020, 0, 13),
    },
    {
        content: (
            <>
                <h4>Fall 2019 Program</h4>
                <p>Hi all,</p>
                <p>
                    The votes have been counted, and the program this semester
                    is:
                    <ul>
                        <li>Cowboy Bebop</li>
                        <li>Humanity Has Declined</li>
                        <li>The Melancholy of Haruhi Suzumiya (season 1)</li>
                        <li>Higurashi: When They Cry</li>
                    </ul>
                </p>
                <p>
                    As usual, it will be every Wednesday (starting 2019-08-28)
                    in R5 at 19:30, except for week 45 (2019-11-06); that week
                    we will be in R9.
                </p>
            </>
        ),
        author: "berntjd",
        date: new Date(2019, 7, 25),
    },
    {
        content: (
            <>
                <h4>Fall 2019 - Voting open - GitS on Wednesday</h4>
                <p>
                    We are starting off the fall 2019 semester by showing the
                    1995 animated classic Ghost in the Shell this Wednesday
                    (2019-08-21) at 19:30 in R5. Bring a friend!
                </p>
                <p>
                    The poll for new series is up (still using a Google form for
                    now), and available at https://forms.gle/qhhfHJrc8iZScwJE9.
                    It will stay active until the end of week 35.
                </p>
                <p>
                    Also, Sondre will be taking over the rudder onward, as my
                    time as a student has run its course. I still live in
                    Trondheim, though, so I will stick around.
                </p>
            </>
        ),
        author: "berntjd",
        date: new Date(2019, 7, 17),
    },
    {
        content: (
            <>
                <h4>Program, Spring 2019</h4>
                <p>
                    The results are in. The program for spring 2019 will be the
                    following series:
                    <ul>
                        <li>- Mushishi</li>
                        <li>- Black Lagoon</li>
                        <li>- Gakkougurashi!</li>
                        <li>
                            - When Supernatural Battles Became Commonplace
                            (replaces Gakkougurashi after mid-point)
                        </li>
                    </ul>
                </p>
                <p>
                    They will be shown every Wednesday (starting 2019-01-23) in
                    R5 at 19:30. Somehow the room was available every week this
                    time, so there should be no room changes.
                </p>
            </>
        ),
        author: "berntjd",
        date: new Date(2019, 0, 21),
    },
    {
        content: (
            <>
                <h4>Spring 2019</h4>
                <p>Hi all,</p>
                <p>
                    We are starting off the spring 2019 semester by showing the
                    movie Akira next Wednesday (2019-01-16) at 19:30 in R5.
                    Bring a friend!
                </p>
                <p>
                    The poll for new sieries is up (STILL using a Google form
                    for now), and available at{" "}
                    <a
                        href="https://goo.gl/forms/fOpWCTHIN78sNaPf1"
                        target="blank"
                    >
                        https://goo.gl/forms/fOpWCTHIN78sNaPf1
                    </a>
                    . It will stay active until the end of week 3.
                </p>
            </>
        ),
        author: "berntjd",
        date: new Date(2019, 0, 9),
    },
    {
        content: (
            <>
                <h4>Program, Fall 2018</h4>
                <p>
                    The program for fall 2018 will be the following series:
                    <ul>
                        <li>Beck</li>
                        <li>Baccano</li>
                        <li>Genshiken</li>
                        <li>Chuunibyou demo Koi ga Shitai</li>
                    </ul>
                </p>
                <p>
                    It will be every Wednesday (starting 2018-08-29) in R5 at
                    19.30, except for week 45 (2018-11-07); that week we will be
                    in R8.
                </p>
            </>
        ),
        author: "berntjd",
        date: new Date(2018, 7, 27),
    },
    {
        content: (
            <>
                <h4>Fall 2018</h4>
                <p>
                    We will start off the semester by showing the movie Steamboy
                    next Wednesday (2018-08-22) at 19:30 in R5. Bring a friend!
                </p>
                <p>
                    The poll for new series is ready (still using a Google form
                    for now), at{" "}
                    <a
                        href="https://goo.gl/forms/7Dy6ZnSYQF5xOTM23"
                        target="blank"
                    >
                        https://goo.gl/forms/7Dy6ZnSYQF5xOTM23
                    </a>
                    . It will stay active until the end of next week.
                </p>
            </>
        ),
        author: "berntjd",
        date: new Date(2018, 7, 18),
    },
    {
        content: (
            <>
                <h4>A new semester begins (spring 2018)</h4>
                <p>Hi all, and welcome to a new semester of anime.</p>
                <p>
                    The poll for new series is ready (still using a Google form
                    for now), at https://goo.gl/forms/xJHMYkggCj69g5cC3. It will
                    stay active until the end of next week.
                </p>
                <p>
                    Meanwhile, we will start off the semester by showing "Sword
                    of the Stranger" next Wednesday (2017-01-17) at 19:30 in R9.
                    Bring a friend! Once the regular program starts, we will
                    switch to R5.
                </p>
                <p>Bernt Johan</p>
                <p>Mostly benevolent dictator, Anime NTNU</p>
            </>
        ),
        author: "CVi",
        date: new Date(2018, 0, 11),
    },
    {
        content: (
            <>
                <h4>Showings this fall</h4>
                <p>
                    We will be showing the first episodes of Lain, Steins;Gate
                    and Bakemonogatari in R9 (map: http://bit.ly/2vtVnCK) on
                    Wednesday (2017-08-30). Discord is up:
                    https://discord.gg/jCDXUez
                </p>
            </>
        ),
        author: "CVi",
        date: new Date(2017, 7, 27),
    },
    {
        content: (
            <>
                <h4>New semester new Anime</h4>
                <p>
                    We will start off the semester by showing the film "Koe No
                    Katachi" (or "A Silent Voice") today (2017-08-23) at 19:30
                    in KJL5.
                </p>
                <p>
                    From next Wednesday, we will be watching anime series. The
                    poll can be accessed here:{" "}
                    <a
                        href="https://goo.gl/forms/BeWXB4WzXYieOKrq2"
                        target="blank"
                    >
                        https://goo.gl/forms/BeWXB4WzXYieOKrq2
                    </a>
                    . Please only vote once.
                </p>
            </>
        ),
        author: "CVi",
        date: new Date(2017, 7, 23),
    },
    {
        content: (
            <>
                <h4>Relocation for the next three weeks</h4>
                <p>
                    We wil be in room R5 instead of R9 the next three weeks, and
                    we may have to delay the start fifteen minutes (to 19.45)
                    based on whether there are people using the room.
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2017, 0, 31),
    },
    {
        content: (
            <>
                <h4>Relocation for the next three weeks</h4>
                <p>
                    We wil be in room R5 instead of R9 the next three weeks, and
                    we may have to delay the start fifteen minutes (to 19.45)
                    based on whether there are people using the room.
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2017, 0, 31),
    },
    {
        content: (
            <>
                <h4>Spring 2017</h4>
                <p>
                    Anime NTNU will be starting up again from next Wednesday,
                    January the 18th. We will be starting with the movie
                    Redline, and then vote on the blackboard afterwards for the
                    rest of the program.{" "}
                </p>
                <p>
                    The place will be KJL 2 and the time will be 20:00. <br />-
                    This is due to someone else having booked the room (And KJL
                    1 and 5) in advance, and the program may be shifted to 20:00
                    unless we can negotiate with the ones booking the room.
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2017, 0, 12),
    },
    {
        content: (
            <>
                <h4>Fall 2016</h4>
                <p>Hello all.</p>
                <p>
                    It is time for the program to start up again for this
                    semester. We will start by showing the movie compilation
                    Memories this Wednesday (the 24th of August), at 19:30 in
                    KJL 5 as usual.
                </p>
                <p>
                    After the movie we will vote for this semester's program,
                    but with a twist: Series already seen by more than half the
                    people present will be disqualified from the vote, because
                    we want people to explore new series, not stay safely within
                    their box of comfort.
                </p>
                <p>The candidates will be listed after the movie.</p>
            </>
        ),
        author: "Kishin",
        date: new Date(2016, 7, 23),
    },
    {
        content: (
            <>
                <h4>Program, Spring 2016</h4>
                <p>
                    The program for spring 2016 will be the following series:
                    <ul>
                        <li>Higurashi (second season)</li>
                        <li>Princess Tutu</li>
                        <li>Arakawa under the Bridge</li>
                        <li>Aria the Animation</li>
                    </ul>
                </p>
                <p>It will be every Wednesday in KJL5 at 19.30, as usual.</p>
            </>
        ),
        author: "Kishin",
        date: new Date(2016, 0, 15),
    },
    {
        content: (
            <>
                <h4>Fall 2015</h4>
                <p>
                    This year we will be showing:
                    <ul>
                        <li>Space Battleship Yamato 2199</li>
                        <li>Welcome to the NHK</li>
                        <li>Higurashi: When they Cry</li>
                    </ul>
                </p>
                <p>
                    We will also be showing the movie Millennium Actress at
                    Wednesday 19th of August, and after that the ordinary
                    program starts.
                </p>
                <p>
                    We will mostly be in KJL5 at 19:30, but I have set up KJL2
                    as a backup in case it is already booked.
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2015, 7, 10),
    },
    {
        content: (
            <>
                <h4>Program, Spring 2015</h4>
                <p>
                    The following Anime series won the vote for this semester:
                    <ul>
                        <li>Paranoia Agent (One of those old classics)</li>
                        <li>Toward the Terra (A rather obscure scifi gem)</li>
                        <li>
                            Kore wa Zombie Desu ka? (A crazy monster-of-the-week
                            comedy)
                        </li>
                        <li>
                            JoJos Bizarre Adventure (heh... hehehe... hahaha!
                            AHAHAHAHA!!! ahem, move along, move along)
                        </li>
                    </ul>
                </p>
                <p>
                    The program will start Wednesday 21st and continue for the
                    rest of the semester.
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2015, 0, 15),
    },
    {
        content: (
            <>
                <h4>Program for Spring 2015</h4>
                <p>
                    Wednesday 14th of January Anime NTNU will show the movie
                    Jin-Roh: The Wolf Brigade in KJL5 at 19:30.
                </p>
                <p>
                    Next week the ordinary program will follow with the series
                    which wins the vote.
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2015, 0, 11),
    },
    {
        content: (
            <>
                <h4>Info</h4>
                <p>
                    We will finish for the semester at the 19th of November,
                    that means we have two Wednesdays left.
                </p>
                <p>
                    Afterwards the vote for the next year animes will be opened.
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2014, 10, 6),
    },
    {
        content: (
            <>
                <h4>A little heads up</h4>
                <p>
                    I just found out that Cinemateket (Trondheim Filmklubb) is
                    showing the movie 5 centimeters per second at the cinema:
                </p>
                <p>Thursday 06 of November at 21:00, in Nova 3</p>
            </>
        ),
        author: "Kishin",
        date: new Date(2014, 9, 20),
    },
    {
        content: (
            <>
                <h4>Notice</h4>
                <p>
                    We will be in KJL1 wednesday, because KJL5 was already
                    booked before I got there.
                </p>
                <p>There will be posted arrows and notices in the building.</p>
            </>
        ),
        author: "Kishin",
        date: new Date(2014, 8, 1),
    },
    {
        content: (
            <>
                <h4>Fall 2014 Anime program</h4>
                <p>
                    We will start the semester by showing Time of Eve, Wednesday
                    the 20th in KJL 5 at 19:30
                </p>
                <p>
                    Afterwards we will be showing:
                    <ul>
                        <li>Shinsekai Yori</li>
                        <li>And yet the Town Moves</li>
                        <li>Kino no Tabi</li>
                        <li>Gankutsuou: THe Count of Monte Cristo</li>
                    </ul>
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2014, 7, 19),
    },
    {
        content: (
            <>
                <h4>Starting on Humanity Has Declined tomorrow</h4>
                <p>
                    I wanted to remind people that we will be showing the first
                    episode of Humanity has Declined today, before the last
                    episode of Bakemonogatari, so people interested in the next
                    series should come/stay after Ouran Host Club.
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2014, 2, 11),
    },
    {
        content: (
            <>
                <h4>Spring 2014 </h4>
                <p>
                    We will be starting the normal program for this semester
                    Wednesday 22nd.
                </p>
                <p>
                    The series we will be showing are:
                    <ul>
                        <li>Bakemonogatari</li>
                        <li>Cowboy Bebop</li>
                        <li>Ouran High School Host Club</li>
                        <li>Humanity Has Declined</li>
                    </ul>
                </p>
                <p>
                    NB: We will be in KJEL 2 that day, but the rest of the
                    semester we will be in KJEL 5
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2014, 0, 16),
    },
    {
        content: (
            <>
                <h4>Poster troubles</h4>
                <p>(Resolved)</p>
            </>
        ),
        author: "Kishin",
        date: new Date(2014, 0, 11),
    },
    {
        content: (
            <>
                <h4>Movie the 15th of January</h4>
                <p>
                    Anime NTNU will be showing the movie Tokyo Godfathers at
                    Wednesday 15th of January, in KJEL 5 at 19:30.
                </p>
                <p>
                    After this the ordinary program will begin. The voting poll
                    will close this Saturday.
                </p>
                <p>
                    NOTE: On January 22th we will use the room KJEL 2, due to
                    KJEL 5 already being booked that date. KJEL 5 will be used
                    the rest of the semester though.
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2014, 0, 10),
    },
    {
        content: (
            <>
                <h4>Next voting poll is ready</h4>
                <p>
                    So vote for what series you want to see the next semester.
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2013, 10, 26),
    },
    {
        content: (
            <>
                <h4>Program, Fall 2013</h4>
                <p>
                    We will be showing the following series this semester:
                    <ul>
                        <li>Durarara!!</li>
                        <li>Chūnibyō demo Koi ga Shitai!</li>
                        <li>Mirai Nikki</li>
                        <li>Daily Lives of High School Boys</li>
                    </ul>
                </p>

                <p>
                    Note: We will be using KJEL 1 the entire semester, not KJEL
                    5
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2013, 7, 25),
    },
    {
        content: (
            <>
                <h4>Program: Fall 2013</h4>
                <p>
                    We will start by showing Metropolis on Wednesday 21st, in
                    KJEL 1 (not KJEL 5) at 19.30
                </p>
                <p>
                    After that the program will commence with the series that
                    have been voted for, the voting closes friday 23rd.
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2013, 7, 17),
    },
    {
        content: (
            <>
                <h4>1st and 8th of May</h4>
                <p>There will be no program om May the 1st.</p>
                <p>
                    On May the 8th we are planning to show the Steins;gate
                    movie.
                </p>
                <p>
                    EDIT: Await more info on the Steins;gate movie, since it is
                    possible it will not be released in a while (it premiered
                    the 20th april, so DVD-release is probably a while away)
                </p>
                <p>
                    EDITdate: We will be showing a movie in any case; if the
                    Steins;gate movie shows up we will be showing it, otherwise
                    we will be showing another movie
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2013, 3, 30),
    },
    {
        content: (
            <>
                <h4>Program after easter</h4>
                <p>
                    We will be starting the program again Wednesday 3rd of
                    April, due to time-constraints with finishing the program
                    because of the 1st of May not being available.
                </p>
                <p>
                    Also because we support diligent students who don't take
                    extended vaccations :)
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2013, 3, 1),
    },
    {
        content: (
            <>
                <h4>Spring program starting today!</h4>
                <p>
                    <ul>
                        <li>Steins;Gate</li>
                        <li>Minami-ke</li>
                        <li>Ben-to! (Level-E after the midsemester)</li>
                    </ul>
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2013, 0, 23),
    },
    {
        content: (
            <>
                <h4>Spring 2013</h4>
                <p>
                    Seeing that we survived the Mayan Apocalypse, we will be
                    starting the spring semester by showing Nausicaa of the
                    Valley of the Wind on Wednesday 16th of January, in KJEL 5
                    as usual
                </p>
                <p>
                    Then we will go on with the ordinary program, showing the
                    series which are voted for.
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2013, 0, 9),
    },
    {
        content: (
            <>
                <h4>Changing room</h4>
                <p>We are going to be in KJL 1 today and next week</p>
                <p>
                    (late notice, I know, we found out today that the primary
                    choice wasn't available)
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2012, 10, 21),
    },
    {
        content: (
            <>
                <h4>Plan for this fall</h4>
                <p>
                    The series that will be shown are:
                    <ul>
                        <li>Nichijou</li>
                        <li>RahXephon</li>
                        <li>Daughter of 20 faces</li>
                    </ul>
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2012, 7, 21),
    },
    {
        content: (
            <>
                <h4>Voting for Fall 2012 open</h4>
                <p>
                    Vote for whatever you'd like or wouldn't like to see this
                    fall
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2012, 7, 20),
    },
    {
        content: (
            <>
                <h4>Easter plan</h4>
                <p>
                    Wednesday the 4th there will be no anime showing. Enjoy the
                    easter holiday!
                </p>
                <p>
                    Anime showings will resume as normal starting wednesday the
                    11th.
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2012, 3, 10),
    },
    {
        content: (
            <>
                <h4>Spring Semester</h4>
                <p>
                    The following series will be shown:
                    <ul>
                        <li>Eden of the East</li>
                        <li>Puella magi Madoka Magica</li>
                        <li>Spice and Wolf S2</li>
                        <li>Angel Beats!</li>
                        <li>XXXHolic</li>
                    </ul>
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2012, 0, 25),
    },
    {
        content: (
            <>
                <h4>Wednesday 18th of January</h4>
                <p>The movie Ghost in the Shell will be shown</p>
                <p>
                    The series from the voting-poll will be shown the week after
                    that and onwards
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2012, 0, 15),
    },
    {
        content: (
            <>
                <h4>Vote for 2012 spring semester</h4>
                <p>
                    The poll is now open, so please vote for the animes you want
                    (or don't want) to see.
                </p>
            </>
        ),
        author: "Kishin",
        date: new Date(2011, 11, 22),
    },
    {
        content: (
            <>
                <h4>Autumn Semester 2011</h4>
                <p>
                    <b>What:</b>
                    <ul>
                        <li>25th of Aug: Only Yesterday (film)</li>
                        <li>
                            31th of Aug and onwards: Regular programme with 2
                            episodes each of
                            <ul>
                                <li>Darker Than Black</li>
                                <li>Nodame Cantabile</li>
                                <li>Spice &amp; Wolf</li>
                            </ul>
                        </li>
                    </ul>
                </p>
                <p>
                    <b>Where: </b>Auditorium Kjel5
                </p>
                <p>
                    <b>When: </b>Every Wednesday at 19.30
                </p>
                <p>The showings are open for everyone.</p>
            </>
        ),
        author: "inebeate",
        date: new Date(2011, 7, 19),
    },
    {
        content: (
            <>
                <h4>Semester End</h4>
                <p>There will be no showing at April 27th (or the 20th).</p>
                <p>
                    The last showing this semester will be May 4th, with the
                    last three episodes of Canaan.
                </p>
            </>
        ),
        author: "inebeate",
        date: new Date(2011, 3, 18),
    },
    {
        content: (
            <>
                <h4>Spring semester starting</h4>
                <p>
                    Showing regular programme from Jan 19th (2 episodes each):
                    <ul>
                        <li>Baccano</li>
                        <li>Denno Coil</li>
                        <li>Sayonara, Zetsubou-Sensei</li>
                    </ul>
                </p>
                <p>Every Wednesday 19:30 at KJL5.</p>
                <p>Showings are open for everyone.</p>
            </>
        ),
        author: "inebeate",
        date: new Date(2011, 0, 12),
    },
    {
        content: (
            <>
                <h4>Autumn semester startup</h4>
                <p>
                    <b>What: </b>
                    <ul>
                        <li>25th of August: Whisper of the Heart</li>
                        <li>
                            1st of September (and onwards): Regular program.
                            Every week, we show 2 episodes of...
                            <ul>
                                <li>Azumanga Daioh</li>
                                <li>Kare Kano</li>
                                <li>Abenobashi / FLCL</li>
                            </ul>
                        </li>
                    </ul>
                </p>
                <p>
                    <b>Place:</b> Auditorium Kjel5
                </p>
                <p>
                    <b>When:</b> 1930
                </p>
                <p>The showings are, as always, open for everyone.</p>
            </>
        ),
        author: "danner",
        date: new Date(2010, 7, 16),
    },
    {
        content: (
            <>
                <h4>Spring Semester beginning today!</h4>
                <p>So come join us at KJL5 like last semester. </p>
                <p>
                    Program:
                    <ul>
                        <li>Honey and Clover</li>
                        <li>Genshiken</li>
                        <li>
                            Code Geass R2 (that's season 2 for those who don't
                            know)
                        </li>
                    </ul>
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2010, 0, 20),
    },
    {
        content: (
            <>
                <h4>Today: Kiki's Delivery Service</h4>
                <p>KJL5, 19:30.</p>
            </>
        ),
        author: "oysteini",
        date: new Date(2010, 0, 13),
    },
    {
        content: (
            <>
                <h4>Vote for the spring semester program!</h4>
                <p>The voting is open, tell us what you want to see!</p>
                <p>Poll</p>
                <p>
                    If you don't have an account, sign up to the mailing list
                    and you will recieve one.
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2009, 10, 19),
    },
    {
        content: (
            <>
                <h4>Season starting</h4>
                <p>
                    Wednesday the 26th we'll start the new semester series,
                    showing:
                    <ul>
                        <li>Code Geass</li>
                        <li>Ghost Hunt</li>
                        <li>Tengen Toppa Gurren-Lagann</li>
                    </ul>
                </p>
                <p>
                    Time will as always be 19:30 on wednesdays, the place is
                    Auditorum Kjel5, same as during Totoro last week.
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2009, 7, 23),
    },
    {
        content: (
            <>
                <h4>Tonari no Totoro August 19th</h4>
                <p>
                    We will show Tonari no Totoro August 19th 19:30 in KJL5.
                    KJL5 is in Kjelhuset, second floor.
                </p>
            </>
        ),
        author: "oysteini",
        date: new Date(2009, 7, 18),
    },
    {
        content: (
            <>
                <h4>15th of April</h4>
                <p>Yes, there will be anime showing today.</p>
            </>
        ),
        author: "danner",
        date: new Date(2009, 3, 15),
    },
    {
        content: (
            <>
                <h4>March 4th is in F1</h4>
                <p>March 4th is in F1</p>
            </>
        ),
        author: "gunnarre",
        date: new Date(2009, 2, 4),
    },
    {
        content: (
            <>
                <h4>Spring Semester starting</h4>
                <p>
                    We'll be starting the spring semester anime season today.
                    Auditorium R7, 1930. For those wondering, Auditorium R7 is
                    right below the cantina in Realfagsbygget.
                </p>
                <p>
                    Program of the evening is
                    <ul>
                        <li>Ouran High School Host Club episode 1-2</li>
                        <li>Black Lagoon episode 1-2</li>
                        <li>Welcome to the NHK episode 1-2</li>
                    </ul>
                </p>
                <p>
                    Spread the word. Unfortunately, noone seems to have gotten
                    around to create some posters, so we'll have to do this
                    through the word-of-mouth way.
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2009, 0, 28),
    },
    {
        content: (
            <>
                <h4>Movie: 21st of January, 2009</h4>
                <p>
                    Tomorrow, we will start the semester with a showing of an
                    anime movie.
                </p>
                <p>Which movie: "The Girl who Leapt through Time"</p>
                <p>Place: Auditorium R2</p>
                <p>Time: 19:30, 21st Jan 2009</p>
                <p>Be there ;)</p>
                <p>
                    Next week we'll start on the regular program, consisting of
                    Ouran High School Host Club, Black Lagoon and Welcome to the
                    NHK.
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2009, 0, 20),
    },
    {
        content: (
            <>
                <h4>Spring Semester Program</h4>
                <p>Go ahead and vote for what you want to see!</p>
                <p>http://org.ntnu.no/anime/poll.php</p>
                <p>
                    If you have write-in suggestions, mail them to the mailing
                    list as soon as possible. We will close the poll sometime
                    before christmas.
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2008, 10, 20),
    },
    {
        content: (
            <>
                <h4>October 15th: New series</h4>
                <p>
                    On October 15th, we start with a new series: Full Metal
                    Panic? Fumoffu. This will be shown as the first series of
                    the evening.
                </p>
            </>
        ),
        author: "gunnarre",
        date: new Date(2008, 9, 9),
    },
    {
        content: (
            <>
                <h4>Program Fall 2008</h4>
                <p>
                    <img
                        src="img/fall_semster_mike_logo.jpg"
                        alt="Fall Semester Mike logo"
                        width="326"
                        height="266"
                    />
                    <br />
                    27th August: Film. Tekkonkinkreet
                </p>
                <p>Every week from there on, these series: </p>
                <p>
                    - The Gokusen
                    <br />- Fate/stay night
                    <br />- Jungle wa Itsumo - Hale nochi Guu!
                    <br />- Full Metal Panic? Fumoffu (After The Gokusen is
                    finished half-way through the semester)
                </p>
                <p>See the program for details.</p>
                <p>
                    We are booked into auditorium R2 for the Fall semester. See
                    the maps here. There might be changes if technical issues
                    arise. Watch this space.
                </p>
            </>
        ),
        author: "gunnarre",
        date: new Date(2008, 7, 19),
    },
    {
        content: (
            <>
                <h4>Fall/semester Mike</h4>
                <p>
                    August is upon us again. The exact schedule is not yet
                    complete, but we expect to show movies or shorts on the 20th
                    and 27th with the series program beginning September 3rd.
                    More details to follow.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2008, 7, 4),
    },
    {
        content: (
            <>
                <h4>Program Spring 2008</h4>
                <p>
                    The program is ready
                    <ul>
                        <li>16. January: Ghost in the Shell (movie)</li>
                        <li>23. January: Gunsmith Cats (miniseries)</li>
                    </ul>
                </p>
                <p>
                    Every subsequent week from there on:
                    <ul>
                        <li>Ghost in the shell: SAC</li>
                        <li>
                            The Melancholy of Haruhi Suzumiya / Ichigo Mashimaro
                            (after haruhi finishes)
                        </li>
                        <li>Mushishi</li>
                    </ul>
                </p>
                <p>
                    The first two weeks are in auditorium R1, then R2 for the
                    rest of the semester.
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2008, 0, 14),
    },
    {
        content: (
            <>
                <h4>First showings 16. january</h4>
                <p>
                    There will be no anime showing tomorrow (9th of january). We
                    will start the showings on the 16th, possibly opening with a
                    movie. More info on program, location and all that to come
                    well in time before the weekend.
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2008, 0, 8),
    },
    {
        content: (
            <>
                <h4>Problems with the site?</h4>
                <p>
                    There's just been a change to the site backend. No troubles
                    should arise, but if you do encounter something, let us
                    know!
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2007, 11, 10),
    },
    {
        content: (
            <>
                <h4>Vote for the anime program, Sping 2008 ready</h4>
                <p>
                    The winners of the vote this semester was:
                    <ul>
                        <li>Mushishi</li>
                        <li>Ghost in the Shell: SAC</li>
                        <li>The melancoly of Haruhi Suzumiya</li>
                    </ul>
                </p>
                <p>
                    ... and as a fillup to match the last quarter of the third
                    anime
                    <ul>
                        <li>Ichigo Mashimaro</li>
                    </ul>
                </p>
                <p>
                    And on a personal note, I'd like to add that all of you who
                    voted Tutu down in order to avoid its nauseatingly cute
                    style SO deserve what's coming to you! ;)
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2007, 11, 9),
    },
    {
        content: (
            <>
                <h4>Anime showings, Fall 2007</h4>
                <p>
                    The program for the showings this semester is as follows:
                    <ul>
                        <li>August 22nd: Porco Rosso (Movie)</li>
                        <li>August 29th: Nausicaa (Movie)</li>
                    </ul>
                </p>
                <p>
                    Subsequent weeks:
                    <ul>
                        <li>Excel Saga</li>
                        <li>RahXephon</li>
                        <li>Princess Tutu / Kamichu!</li>
                    </ul>
                </p>
                <p>Place and time is auditorium R2, 1930.</p>
            </>
        ),
        author: "danner",
        date: new Date(2007, 7, 17),
    },
    {
        content: (
            <>
                <h4>SaiRAG 2007</h4>
                <p>
                    <form method="post" action="http://poll.pollcode.com/qu0N">
                        <table
                            border="0"
                            width="150"
                            bgcolor="EEEEEE"
                            cellspacing="0"
                            cellpadding="2"
                        >
                            <tr>
                                <td colspan="2">
                                    <font
                                        face="Verdana"
                                        size="-1"
                                        color="Black"
                                    >
                                        <b>
                                            SaiRAG 2007 Qualifier. Who is the
                                            most badass woman in RahXephon?
                                        </b>
                                    </font>
                                </td>
                            </tr>
                            <tr>
                                <td width="5">
                                    <input
                                        type="radio"
                                        name="answer"
                                        value="1"
                                    />
                                </td>
                                <td>
                                    <font
                                        face="Verdana"
                                        size="-1"
                                        color="Black"
                                    >
                                        Haruka Shitow
                                    </font>
                                </td>
                            </tr>
                            <tr>
                                <td width="5">
                                    <input
                                        type="radio"
                                        name="answer"
                                        value="2"
                                    />
                                </td>
                                <td>
                                    <font
                                        face="Verdana"
                                        size="-1"
                                        color="Black"
                                    >
                                        Elvy Hadhiyat
                                    </font>
                                </td>
                            </tr>
                            <tr>
                                <td width="5">
                                    <input
                                        type="radio"
                                        name="answer"
                                        value="3"
                                    />
                                </td>
                                <td>
                                    <font
                                        face="Verdana"
                                        size="-1"
                                        color="Black"
                                    >
                                        Maya Kamina
                                    </font>
                                </td>
                            </tr>
                            <tr>
                                <td width="5">
                                    <input
                                        type="radio"
                                        name="answer"
                                        value="4"
                                    />
                                </td>
                                <td>
                                    <font
                                        face="Verdana"
                                        size="-1"
                                        color="Black"
                                    >
                                        Laila Costa
                                    </font>
                                </td>
                            </tr>
                            <tr>
                                <td width="5">
                                    <input
                                        type="radio"
                                        name="answer"
                                        value="5"
                                    />
                                </td>
                                <td>
                                    <font
                                        face="Verdana"
                                        size="-1"
                                        color="Black"
                                    >
                                        Kim Hotal
                                    </font>
                                </td>
                            </tr>
                            <tr>
                                <td width="5">
                                    <input
                                        type="radio"
                                        name="answer"
                                        value="6"
                                    />
                                </td>
                                <td>
                                    <font
                                        face="Verdana"
                                        size="-1"
                                        color="Black"
                                    >
                                        Helena von Bahbem
                                    </font>
                                </td>
                            </tr>
                            <tr>
                                <td width="5">
                                    <input
                                        type="radio"
                                        name="answer"
                                        value="7"
                                    />
                                </td>
                                <td>
                                    <font
                                        face="Verdana"
                                        size="-1"
                                        color="Black"
                                    >
                                        Megumi Shitow
                                    </font>
                                </td>
                            </tr>
                            <tr>
                                <td width="5">
                                    <input
                                        type="radio"
                                        name="answer"
                                        value="8"
                                    />
                                </td>
                                <td>
                                    <font
                                        face="Verdana"
                                        size="-1"
                                        color="Black"
                                    >
                                        Cathy "Crazy Horse" McMahon
                                    </font>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <center>
                                        <input type="submit" value="Vote" />
                                        <input
                                            type="submit"
                                            name="view"
                                            value="View"
                                        />
                                    </center>
                                </td>
                            </tr>
                            <tr>
                                <td bgcolor="white" colspan="2" align="right">
                                    <font
                                        face="Verdana"
                                        size="-2"
                                        color="black"
                                    >
                                        pollcode.com{" "}
                                        <a
                                            href="http://pollcode.com/"
                                            target="blank"
                                        >
                                            <font color="navy">free polls</font>
                                        </a>
                                    </font>
                                </td>
                            </tr>
                        </table>
                    </form>
                </p>
            </>
        ),
        author: "gunnarre",
        date: new Date(2007, 5, 14),
    },
    {
        content: (
            <>
                <h4>Summertime 07</h4>
                <p>Another semester ends.</p>
                <p>We hope to see you in Fall semester, everybody.</p>
            </>
        ),
        author: "dashiva",
        date: new Date(2007, 4, 8),
    },
    {
        content: (
            <>
                <h4>Spring 2007</h4>
                <p>
                    Hi. We're on again. This time in <b>R2</b>. Still Wednesdays
                    at 19:30. First with a film on the 17th, and then the series
                    start again on the 24th.
                </p>
                <p>
                    Heisan, da var vi i gang igjen. Denne gangen i R2. Fremdeles
                    onsdager kl 19:30.
                </p>
                <p>
                    <ul>
                        <li>17. januar: Metropolis</li>
                        <li>
                            24. januar: Samurai Champloo, Cromartie High, Witch
                            Hunter Robin
                        </li>
                    </ul>
                </p>
                <p></p>
                <p>
                    Senere på året tar Tsukihime over for Cromartie High. (Se
                    programmet)
                </p>
            </>
        ),
        author: "gunnarre",
        date: new Date(2007, 0, 14),
    },
    {
        content: (
            <>
                <h4>Transition to next semester</h4>
                <p>
                    It's soom time to wrap up the fall semester with Planetes
                    and Nadesico on November 29th, and then a movie on December
                    6th.
                </p>
                <p>
                    Spring 07 series vote is open. There might be an extra
                    "preview" screening in connection with this vote.{" "}
                </p>
                <p>Also remember to vote for what you liked this fall.</p>
            </>
        ),
        author: "gunnarre",
        date: new Date(2006, 10, 23),
    },
    {
        content: (
            <>
                <h4>utf-8</h4>
                <p>
                    Nettsidene bruker nå utf-8. Hvis dere kommer over noen
                    tilfeller av gammel tekst i iso-8859-1 (typisk i form av
                    firkanter i stedet for bokstaver) si gjerne i fra på IRC
                    eller epost.
                </p>
                <p>
                    Merk at selv om dere har støtte for utf-8 i nettleseren er
                    det ikke sikkert dere har tilgjengelig (for eksempel)
                    japanske tegn. Nyhetsposten under denne inneholder japansk
                    og kan brukes som en test.
                </p>
                <p>
                    Ekstra: Vi har gått over fra RSS til Atom 1.0 med tilhørende
                    endring av URL. Hvis noen faktisk bruker feeden må dere
                    oppdatere.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2006, 9, 15),
    },
    {
        content: (
            <>
                <h4>Generell TODO</h4>
                <p>
                    <ul>
                        <li>
                            <b>[x]</b> Endre feed til Atom 1.0
                        </li>
                        <li>
                            Rydde opp i hva slags data som er trygt å skrive ut
                        </li>
                        <li>Fikse korrekt bruk av HTML vs nl2br</li>
                    </ul>
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2006, 9, 15),
    },
    {
        content: (
            <>
                <h4>R1 it is</h4>
                <p>
                    Vi er altså i R1 nå og i all overskuelig fremtid. Det bare
                    ble sånn.
                </p>
                <p>これからＲ１にいることになりました。</p>
            </>
        ),
        author: "dashiva",
        date: new Date(2006, 8, 27),
    },
    {
        content: (
            <>
                <h4>Vi er i gang igjen</h4>
                <p>
                    Samme tid, ikke samme sted - vi er i R2 nå, igjen. Høstens
                    serier blir Planetes, Martian Successor Nadesico, Genshiken
                    (+ Kujibiki Unbalance) og Midori no Hibi. Se programsiden
                    for detaljer. Seriene starter 6. september, men vi starter
                    med to filmer
                    <ul>
                        <li>
                            23. august: The Place Promised In Our Early Days
                        </li>
                        <li>30. august: Grave of the Fireflies</li>
                    </ul>
                </p>
            </>
        ),
        author: "gunnarre",
        date: new Date(2006, 7, 21),
    },
    {
        content: (
            <>
                <h4>i18n</h4>
                <p>
                    Tabeller i databasen som lagrer språkspesifikk info:
                    <ul>
                        <li>
                            <b>[done]</b> poll_valg - tekst
                        </li>
                        <li>
                            <b>[done]</b> poll_metadata - tittel, tekst
                        </li>
                        <li>
                            <b>[done]</b> nyheter - tittel, tekst
                        </li>
                        <li>
                            <b>[done]</b> anime_komm - tekst (fra brukere)
                        </li>
                        <li>
                            <b>[x]</b> anime_anime - tittel, tekst (alltid
                            engelsk)
                        </li>
                        <li>
                            <b>[done]</b> (vist_sesong bør automatiseres,
                            ignore)
                        </li>
                        <li>
                            <b>[x]</b> (brukere bør begrenses til latin1,
                            ignore)
                        </li>
                    </ul>
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2006, 4, 14),
    },
    {
        content: (
            <>
                <h4>Overgang til sommer</h4>
                <p>
                    Enda en eksamensperiode er i emning, og som vanlig betyr det
                    programutvelgelse for neste semester. Avstemningen er
                    allerede i gang. Stem på dine favoritter, og si ifra på
                    mailingliste eller IRC hvis du mener andre serier bør
                    nomineres.
                </p>
                <p>
                    De neste visningene blir smakebitsvisninger lik de vi hadde
                    før jul. Det vil si at vi viser en episode hver av
                    forskjellige serier fra avstemningen. Når disse er over tar
                    vi sommerferie, og kommer tilbake i midten av august. Vi vil
                    som vanlig trenge plakatdesignere og plakatopphengere, så
                    vær beredt på å melde dere som frivillige.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2006, 3, 27),
    },
    {
        content: (
            <>
                <h4>Påske og fremover</h4>
                <p>
                    Det blir ingen visning 12. april grunnet ferieavvikling.
                    <ul>
                        <li>
                            19. april - 7 episoder for å slippe å dele opp
                            avslutningen av Paranoia Agent
                        </li>
                        <li>
                            26. april - Bonus: Memories siden alt utenom Trigun
                            er ferdig
                        </li>
                        <li>
                            3. mai (og kanskje 10. mai) - Forhåndsvisninger av
                            serier til neste semester
                        </li>
                    </ul>
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2006, 3, 8),
    },
    {
        content: (
            <>
                <h4>Nytt semester</h4>
                <p>Programmet for våren er nå tilgjengelig på programsidene.</p>
            </>
        ),
        author: "dashiva",
        date: new Date(2006, 0, 9),
    },
    {
        content: (
            <>
                <h4>Ekstravisning 7. desember</h4>
                <p>
                    Som programmet på nettsidene viser er siste ordinære visning
                    30. november, med en ekstravisning 7. desember. Planen var å
                    vise Advent Children (siden det er advent) men den har altså
                    blitt utsatt.
                </p>
                <p>
                    I stedet blir det en smakebitvisning, hvor vi viser første
                    episode av flere forskjellige serier på avstemningen for
                    neste semester. De av dere som ikke er helt sikre på hva
                    dere skal stemme kan benytte anledningen til å få et
                    inntrykk av de forskjellige seriene.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2005, 10, 25),
    },
    {
        content: (
            <>
                <h4>Backup</h4>
                <p>
                    Vi bør ordne en cronjob som animebruker som kjører backup av
                    database og hjemmeområde jevnlig.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2005, 10, 11),
    },
    {
        content: (
            <>
                <h4>Avstemning og avstemninger</h4>
                <p>
                    De gode nyhetene er at avstemningen for neste semesters
                    program er i gang.
                </p>
                <p>
                    De dårlige nyhetene er noen av dere som stemte på torsdag
                    eller fredag må stemme på nytt.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2005, 10, 11),
    },
    {
        content: (
            <>
                <h4>Unix-brukergrupper</h4>
                <p>legge til meg i org.ntnu.no-brukergruppen</p>
            </>
        ),
        author: "metellius",
        date: new Date(2005, 9, 28),
    },
    {
        content: (
            <>
                <h4>Flytting av visningene</h4>
                <p>
                    Visningene blir i <b>EL2</b> fra og med 12. oktober. "Hvem
                    er vi" har nå oppdaterte kart og retningslinjer.
                </p>
                <p>
                    I tillegg har noen ivrige sjeler laget en video. Den starter
                    ved inngangen nærmest hovedbygget og viser veien til EL2.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2005, 9, 7),
    },
    {
        content: (
            <>
                <h4>Visning 21/9</h4>
                <p>Som varslet blir visningen 21. september i R1, ikke i R2.</p>
            </>
        ),
        author: "dashiva",
        date: new Date(2005, 8, 20),
    },
    {
        content: (
            <>
                <h4>Vi er i gang igjen</h4>
                <p>
                    Samme tid, ikke samme sted - vi er i R2 nå. Høstens serier
                    blir Azumanga Daioh, Kino no Tabi, Saikano og Infinite
                    Ryvius. Se programsiden for detaljer. Seriene starter{" "}
                    <b>7. september</b>.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2005, 7, 31),
    },
    {
        content: (
            <>
                <h4>Semesterslutt</h4>
                <p>
                    Siste visning er onsdag 11. mai. Etter visningen blir det et
                    slags minimøte hvor vi tar imot tilbakemelding på semesteret
                    som var, og lignende ting som gjøres på minimøter.
                    Sannsynligvis blir det også litt snakking om hva som skal
                    vises (og ikke vises) til høsten. Vel møtt.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2005, 4, 8),
    },
    {
        content: (
            <>
                <h4>Omorganisering</h4>
                <p>
                    Planer om å endre medlemsstrukturen. Nettsidene har blitt
                    såpass brukbare og omfattende at brukere skal bli sterke
                    entiteter, ikke avhengige av mailingliste. Om mailingliste
                    skal bli et subsett av medlemmene (opt-in), alle medlemmene
                    (opt-out) eller fortsatt åpen for alle er ikke bestemt.
                </p>
                <p>
                    Hvordan overgangen skal skje er ikke avgjort. Satser på å
                    kombinere med en opprydning i inaktive brukere.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2005, 3, 8),
    },
    {
        content: (
            <>
                <h4>Mot slutten</h4>
                <p>
                    Da var Lain så avsluttet som serien blir. De som føler at de
                    sitter igjen som store spørsmålstegn kan gjøre som serien
                    selv og glemme alt som skjedde før siste episode.
                </p>
                <p>
                    De neste fire ukene tar Bubblegum Crisis over som siste post
                    på programmet.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2005, 3, 6),
    },
    {
        content: (
            <>
                <h4>Gammelt program</h4>
                <p>
                    Bruken av "aktuell" anime gjør at eldre programposter ikke
                    kan oppdateres, fikses, endres, etc. Egentlig kosmetisk, men
                    et problem som bør fikses på en eller annen måte.
                </p>
                <p>
                    Løsning: tidligere sesonger genererer lister over all anime
                    som har vært vist. Litt overflødig, men det virker og vi
                    skal ikke justere mye i fortiden uansett.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2005, 3, 5),
    },
    {
        content: (
            <>
                <h4>Sikkerhet</h4>
                <p>
                    Skal undersøke houelands monsterkode og se om det er mulig å
                    bruke den uten å redusere alt ned til en side. Input fra
                    dere andre er velkommen.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2005, 2, 31),
    },
    {
        content: (
            <>
                <h4>Ordne storpoll</h4>
                <p>
                    Slå sammen storpoll med poll og deretter fikse link. Ingen
                    vits å ha to sider som gjør akkurat det samme når vi kan ha
                    mer enn en poll på hver side.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2005, 2, 31),
    },
    {
        content: (
            <>
                <h4>Ordne opp</h4>
                <p>Må fikse vårrengjøringen i databasen</p>
            </>
        ),
        author: "dashiva",
        date: new Date(2005, 2, 31),
    },
    {
        content: (
            <>
                <h4>Etter påsketiden</h4>
                <p>
                    Avstemningen endte med flertall for å bli i R5. Det blir
                    derfor ingen flytting før sommeren, men R2 blir en sterk
                    kanditat neste høst hvis ingenting blir gjort med lyden i
                    R5.
                </p>
                <p>
                    <span style="text-decoration:line-through;">
                        Ellers blir det en ny avstemning ganske snart om
                        programmet etter Lain.
                    </span>
                </p>
                <p>
                    Ny avstemning er i gang. Den varer bare en uke, så stem
                    fort!
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2005, 2, 30),
    },
    {
        content: (
            <>
                <h4>Excenteraften på Samfundet: Anime</h4>
                <p>
                    Tirsdag den 25. januar kl 19 blir det excenteraften om Anime
                    på Knaus, Samfundet. Det blir en liten tour gjennom animeens
                    verden, hva dette egentlig er, og litt om de rare menneskene
                    som ser på slikt. Ingen forkunnskaper om Anime er forutsatt.
                </p>
                <p>Fra tickeren på samfundets program: </p>
                <p>
                    "Animé betegner den spesielle tegnestilen innenfor den
                    japanske animasjonstradisjonen, og kjennetegnes blant annet
                    ved at store overdrivelser er et vanlig virkemiddel. Men
                    animé er også mer enn en tegnestil. På lik linje med vestlig
                    film finnes det utallige forskjellige sjangre og historier,
                    i tillegg til et bredere spekter av virkemidler siden
                    tegnerene fritt kan bevege karakterene rundt. Animé er et
                    friskt pust i filmens verden. Innleder er Andreas Danner
                    Nilsen som er aktiv i Trondheims egen animéklubb ved NTNU. "
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2005, 0, 20),
    },
    {
        content: (
            <>
                <h4>Vårsemesteret 2005 er igang</h4>
                <p>
                    19. januar åpner vi semesteret med den koselige filmen
                    Whisper of the Heart.
                </p>
                <p>
                    Tirsdag 25. januar kl 19.00 er det Excenteraften: Animé på
                    Samfundet. Innleder er vår egen kjære Andreas Danner Nilsen.
                    Møt opp for en innføring i animéens verden. :-)
                </p>
                <p>
                    <b>Akira</b> vil vises den 26. januar (kl 20.00) istedenfor
                    The Cat Returns som tidligere var annonsert, da denne filmen
                    ikke er oversatt ennå. Vi satser på å vise The Cat Returns
                    senere i semesteret.
                </p>
                <p>
                    Seriene begynner for fullt fra 2. februar. Se programmet for
                    detaljer.
                </p>
            </>
        ),
        author: "lance",
        date: new Date(2005, 0, 13),
    },
    {
        content: (
            <>
                <h4>Semesteret over</h4>
                <p>
                    Da var moroa over for i år. Men, vi kommer sterkt tilbake
                    neste semester med mer anime. Send gjerne inn forslag til
                    anime som skal vises - men det er som sagt en fordel om
                    denne kan backes opp med dvd'er. Første visning blir{" "}
                    <i>trolig</i> en gang 2 uker etter semesterstart (17-22),
                    trolig i R5 og trolig kl 1930. Kanskje til og med en onsdag.
                    Når vår skumle diktator bestemmer seg for dette blir det mer
                    informasjon.{" "}
                </p>
                <p>I mellomtiden - God Jul.</p>
            </>
        ),
        author: "danner",
        date: new Date(2004, 10, 24),
    },
    {
        content: (
            <>
                <h4>Nye serier til våren.... (nominasjoner)</h4>
                <p>
                    Det var mye bra anime hos folket. Noen nominasjoner jeg syns
                    er kjempebra:
                    <ul>
                        <li>scryed (26)</li>
                        <li>cowboy bebop (26)</li>
                        <li>kino no tabi (13)</li>
                        <li>flcl (6)</li>
                        <li>slayers (26)</li>
                    </ul>
                </p>
                <p>
                    og noen jeg tror kan bli populære:
                    <ul>
                        <li>rune soldier louie (24)</li>
                        <li>saber marionette J (26)</li>
                    </ul>
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2004, 10, 18),
    },
    {
        content: (
            <>
                <h4>Boogiepop Spoileside</h4>
                <p>
                    Da var vi ferdig med 12 episoder boogiepop. Og trolig er det
                    få som skjønner hva det hele handlet om. Jeg har derfor
                    laget en spoileside som trolig skal forklare det meste. Les
                    mer her
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2004, 9, 6),
    },
    {
        content: (
            <>
                <h4>Nyheter til mailingliste</h4>
                <p>
                    <ul>
                        <li>
                            Automatisk utsending av nyheter fra websidene til
                            mailinglista.
                        </li>
                        <li>
                            Valg for å kun publisere på nett (default til
                            mailingliste).
                        </li>
                        <li>...</li>
                    </ul>
                </p>
            </>
        ),
        author: "lance",
        date: new Date(2004, 8, 30),
    },
    {
        content: (
            <>
                <h4>Nye websider</h4>
                <p>
                    Websidene er under omgjøring, som noen sikkert har sett.
                    Programmet forover er nå litt mer strukturert utlagt, uten
                    at det betyr at vi ikke kan forandre ting underveis ... ;-)
                </p>
                <p>
                    Hvis noen har meninger om sidene anbefales de å komme til
                    irc-kanalen, eller kontakte en av oss på visningene. Eller
                    bruke mailinglista.
                </p>
            </>
        ),
        author: "lance",
        date: new Date(2004, 8, 30),
    },
    {
        content: (
            <>
                <h4>Til opplysning</h4>
                <p>
                    Dørene nærmest bussholdeplassen stenger visstnok klokken
                    19.00. De som ikke er NTNU-studenter må enten gå til den
                    andre inngangen (se kart), komme før klokken 19.00, eller
                    bli venn med en NTNU-student.{" "}
                </p>
                <p>
                    Ellers har folket talt: Rei er punk med 6 stemmer mot 3. Ny
                    avstemning er i gang.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2004, 8, 29),
    },
    {
        content: (
            <>
                <h4>md5-passord</h4>
                <p>
                    De ukrypterte passordene i databasen er borte, og de gamle
                    er konvertert til md5-hasher. Passord for brukere resettes
                    fra admin. Så nå kan man ha obskøne passord uten hetsing. ;)
                </p>
            </>
        ),
        author: "lance",
        date: new Date(2004, 8, 24),
    },
    {
        content: (
            <>
                <h4>Serier, del 1</h4>
                <p>
                    Her er programmet for de første seks ukene (36-41) av
                    høsten. Vi viser to episoder av hver serie per visning, i
                    denne rekkefølgen:
                    <ul>
                        <li>Photon (uke 1-3)</li>
                        <li>Shamanic Princess (uke 4-6)</li>
                        <li>Hyper Police</li>
                        <li>Boogiepop Phantom</li>
                    </ul>
                </p>
                <p>
                    Og siden alge er paranoid kan vi nevne at det blir 19.30 i
                    R5. Alle visninger er i R5 hvis det ikke gis eksplisitt
                    beskjed om noe annet.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2004, 7, 30),
    },
    {
        content: (
            <>
                <h4>Vi fortsetter (igjen?)</h4>
                <p>
                    Visningen 25. august blir i R8. Perfect Blue i R8, klokken
                    19.30 på onsdag. Lettskremte anbefales å ta med følge til
                    veien hjem.Neida, vi bare tuller... litt.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2004, 7, 23),
    },
    {
        content: (
            <>
                <h4>Vi begynner igjen</h4>
                <p>
                    Høstens første visning er onsdag 18. august, klokken 19.30.
                    Samme sted som forrige semester, auditorium R5 i
                    Realfagsbygget. For de som ikke er lokalkjent er det kart på
                    "Hvem er vi"-siden. Vi viser Jin-Roh, the wolf brigade.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2004, 7, 17),
    },

    {
        content: (
            <>
                <h4>Programutkast</h4>
                <p>
                    6 uker (start uke 36)
                    <ul>
                        <li>2x HP</li>
                        <li>2x Boogiepop</li>
                        <li>1x Shamanic</li>
                        <li>1x Photon</li>
                    </ul>
                    (alternativt 3+3 uker med 2x sham, 2x photon)
                </p>
                <p>
                    7 uker (start uke 42)
                    <ul>
                        <li>2x HP</li>
                        <li>2x Haibane</li>
                        <li>2x Abeno</li>
                        <li>(3x haibane, 3x abeno) siste gang</li>
                        <li>
                            (4x hp, blood: the last vampire) på halloween :)
                        </li>
                    </ul>
                </p>
                <p>
                    Uke 34, 35
                    <ul>
                        <li>
                            2x film hver gang: GitS, Jin-Roh, Perfect Blue, og
                            Grave of the Fireflies
                        </li>
                    </ul>
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2004, 6, 17),
    },
    {
        content: (
            <>
                <h4>Anime Høsten 2004</h4>
                <p>
                    Vårens visninger er over, og høsten er neste semester ut. Ta
                    i bruk pollen og stem på hva som skal vises, og send gjerne
                    inn egne forslag hvis du føler det mangler noe.
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2004, 4, 2),
    },
    {
        content: (
            <>
                <h4>Påsken 2004</h4>
                <p>
                    Påsken er på oss som Godzilla på Tokyo, og resultatet blir
                    som vanlig kaos. Visningen mandag 5. april er avlyst pga
                    manglende interesse. Visningen mandag 12. april er flyttet
                    til onsdag 14. april, men ellers samme tid og sted. Altså
                    <ul>
                        <li>5/4 - ingen visning</li>
                        <li>12/4 - ingen visning</li>
                        <li>14/4 - visning</li>
                    </ul>
                    Og siden det er over midnatt burde alle være villige til å
                    akseptere at dette ikke er en aprilsspøk.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2004, 3, 2),
    },
    {
        content: (
            <>
                <h4>Tier 2 av Animevisningene</h4>
                <p>
                    Neste uke (30. februar) viser vi de tre siste episodene av
                    Hellsing. Etter dette vil vi vise resten av Tiny Snow Fairy
                    Sugar, fra der vi slapp i høst. Spørsmålet var hvordan
                    sendeplanen da skulle legges opp, og siden vår diktator ikke
                    vil gjøre seg opp noen formening sier vi bare at skjemaet
                    fra og med Mars blir som følger:
                    <ul>
                        <li>Tiny Snow Fairy Sugar x2</li>
                        <li>Kare Kano x2</li>
                        <li>Neon Genesis Evangelion x2</li>
                    </ul>
                </p>
                <p>
                    Dette fører til mye sukker etter hverandre, men siden det er
                    sterke meninger ute og går om både Sugar og Evangelion er
                    dette den mest optimale løsningen sånn at folk får komme og
                    eventuellt gå når de vil :)
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2004, 1, 23),
    },
    {
        content: (
            <>
                <h4>Sikkert Passord?</h4>
                <p>
                    Passordet kan sikres via noe togu har laget i det siste....
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2004, 1, 8),
    },
    {
        content: (
            <>
                <h4>Sikkerhet</h4>
                <p>
                    Det er umulig, men jeg må skrive et testnotat uansett, så
                    hvorfor ikke? Vi må sikre passordet.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2004, 0, 19),
    },
    {
        content: (
            <>
                <h4>Hvem-er-vi</h4>
                <p>
                    Denne siden trenger kanskje litt oppdatering, og kartene
                    over innsiden av realfag kan sikkert fikses opp litt. En
                    FAQ-type ting om registrering, visninger, forskjellen på
                    nettsiden og epostlisten... masse sånt.
                </p>
                <p>
                    Kanskje bilder og navn på de "ansvarlige" evt. en slik liste
                    for alle sammen.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2004, 0, 19),
    },
    {
        content: (
            <>
                <h4>Plakater / PR</h4>
                <p>
                    Fungerer bra i Realfag, IT, Elektro, Sentral. Kanskje finne
                    folk som kan henge opp på de "populære" stedene for andre
                    fakulteter enn IME. Og organisere litt på HIST også.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2004, 0, 19),
    },
    {
        content: (
            <>
                <h4>Ordne admin-notater</h4>
                <p>Ordne sidene så adminnotatene faktisk virker.</p>
            </>
        ),
        author: "dashiva",
        date: new Date(2004, 0, 19),
    },
    {
        content: (
            <>
                <h4>Første melding</h4>
                <p>
                    Dette området skal erstatte huskelapper for ting som må
                    gjøres i forbindelse med visninger og nettsidene.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2004, 0, 19),
    },
    {
        content: (
            <>
                <h4>Slipp nyhetene fri, det er vår</h4>
                <p>
                    Lurer på om noen i det hele tatt leser disse... kan i det
                    minste late som.
                </p>
                <p>
                    Programmet for våren er nå klart. I kategorien "laaaang
                    serie" gikk Kare Kano av med seieren, fulgt av Neon Genesis
                    Evangelion. Fruits basket tok tredjeplass og er derfor en
                    god kandidat til høsten. Den andre kategorien, "kort serie"
                    ble vunnet av Hellsing med Bastard! på en hederlig
                    andreplass. Disse vil få følge av Tiny Snow Fairy Sugar,
                    siden vi allerede har vist halve.
                </p>
                <p>
                    Så det blir noe omtrent som dette:
                    <ul>
                        <li>2x NGE</li>
                        <li>2x Kare Kano</li>
                        <li>2x Hellsing, 2x Sugar når Hellsing er slutt</li>
                        <li>
                            Bastard! i påsken (detaljer om påsken kommer senere)
                        </li>
                    </ul>
                </p>
                <p>
                    Det kan hende vi ikke starter seriene før 26. januar. I
                    såfall viser vi noe annet (en film) på den 19. Det er{" "}
                    <b>alltid</b> visning (på mandager).
                </p>
                <p>
                    In other news, her er reklamekampanjen vår. Det står fritt
                    til den enkelte å skrive ut kopier og henge de opp der det
                    passer seg.
                    <ul>
                        <li>Kare Kano,</li>
                        <li>Hellsing,</li>
                        <li>Neon Genesis Evangelion og</li>
                        <li>Neon Genesis Evangelion</li>
                    </ul>
                </p>
                <p>
                    Og to litt mer "radikale": Hellsing og Neon Genesis
                    Evangelion
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2004, 0, 17),
    },
    {
        content: (
            <>
                <h4>Kono sekai wa kusatte iru! (v3.0)</h4>
                <p>
                    Nei, det blir ikke mer Excel Saga. Det er ikke mer Excel
                    Saga, og verden sørger. I følge mine kilder på IRC er jeg
                    imidlertidig den eneste som bryr seg, så jeg skal ikke bruke
                    for mye plass på det. Operasjon Mononoke er notert som en
                    suksess, og vi vil derfor iverksette Operasjon
                    DetKanBareGåEnVei:Oppover om kun kort tid (neste mandag).
                </p>
                <p>
                    Avstemningen lider fortsatt av manglende oppslutning. For
                    ordens skyld opplyser vi om at blanke stemmer tolkes som
                    "Jeg ønsket kun det ledelsen vil. De har min fulle støtte
                    uansett hva de velger." Hvis ikke nok avgir mening til at
                    det kan anses som representativt for helheten...{" "}
                    <b>(DUN-DUN-DUN)</b>
                </p>
                <p>
                    "Når du stemmer på hjemmesitterpartiet, stemmer du på
                    Macross... og Kocho"
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2004, 0, 13),
    },
    {
        content: (
            <>
                <h4>Kore de owatta</h4>
                <p>
                    Da var det altså slutt på enda et semester med anime. På
                    tross av skepsis fra enkelte, anser vi avslutningen som en
                    stor suksess. (Ingen forlot i det minste salen i avsky. Men
                    det samme gjelder jo for Kocho...)Forøvrig er det veldig
                    greit om folk deltar på avstemningen. Jo fortere vi finner
                    ut hvilken dag som passer best, jo fortere kan vi reservere
                    vårt elskede auditorium 5 for våren. Og frigjøre plassen til
                    valg av serier. Ellers er det ikke mye å si foreløpig enn å
                    ønske alle god eksamenstid, god jul, og godt nyttår.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2003, 10, 24),
    },
    {
        content: (
            <>
                <h4>Jeg har aldri likt tittelfelt</h4>
                <p>
                    Da var Tylor borte for evig og alltid, eventuelt til noen
                    skaffer OAVen. Eller er det en OVA? Jeg husker aldri sånt.
                    Uansett fortsetter vi visningene to mandager til. Neste uke
                    avslutter vi Now and Then, sammen med en dose Excel Saga, og
                    siste gang blir Excel-maraton for å komme i mål før
                    eksamensperioden.
                </p>
                <p>
                    Et par andre småting... hvis dere har ideer til anime vi kan
                    vise til våren (som finnes tilgjengelig på DVD) er det bare
                    å sende inn forslag. Hvis forslagene kommer tidsnok er det
                    tid til demokratisk prosess og avstemninger og alt det der.
                    Hvis ikke må noen ta en lederavgjørelse, og da ender det
                    lett med Macross. <i>*dukke unna slag fra danner*</i> Bruk
                    gjerne epostlisten til å sende forslagene, slik at de med
                    protester kan få sagt sitt før vi tar en avgjørelse.
                </p>
                <p>
                    Det vil komme en ny avstemning om hvilken ukedag vi skal ha
                    visningene på til våren. Den foreløpige idéen er at folk
                    krysser av når de absolutt ikke kan, og så velger vi dagen
                    med færrest kryss. Stay tuned.
                </p>
                <p>
                    Sist, men ikke minst: feedback. Vi kan ikke akkurat si at
                    alt har gått knirkefritt dette semesteret heller, men det er
                    en betraktelig forbedring over forrige vår. Meninger, ris &
                    ros, andre kommentarer er velkomne. Hvis dere ikke ønsker å
                    ytre dere offentlig på epostlisten, kan dere sende
                    konfidensielle beskjeder til
                    anime-ntnu-admin@list.stud.ntnu.no
                </p>
                <p>Det var vel alt for denne gang.</p>
            </>
        ),
        author: "dashiva",
        date: new Date(2003, 10, 11),
    },
    {
        content: (
            <>
                <h4>Second Impact</h4>
                <p>
                    Da var første halvdel av visningene over. Banner of the
                    Stars er slutt, og Sugar tar en pause frem til våren. Som
                    erstatning kommer Excel Saga, Photon, og en serie til.
                    Muligens 3x3 Eyes, muligens Natt & Hatt (aka Now and Then,
                    Here and There.)
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2003, 9, 11),
    },
    {
        content: (
            <>
                <h4>Ting Tar Tid</h4>
                <p>
                    Avstemningen har nå oppnådd en total av 14 stemmer, langt
                    forbi alt som har vært av tidligere saker. Kan det være
                    engasjement, eller er det valgfusk? Kanskje noen stemmer her
                    i tro om at det er til kommunevalget. Her er i det minste
                    plakatene våre med de to duellantene.
                    <ul>
                        <li>R-noe Kenshin</li>
                        <li>Tiny Snow Fairy Sugar</li>
                    </ul>
                </p>
                <p>
                    (R-noe fordi vi vil unngå stridigheter om
                    romaniseringssystemer så tidlig i semesteret.)
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2003, 7, 29),
    },
    {
        content: (
            <>
                <h4>Systemet vs Anime, 1-0</h4>
                <p>
                    Ja, avstemningen var ganske klart i mandags favør, så
                    auditorium ble bestilt. Dessverre var det
                    kommunikasjonsproblemer, og de som har ansvar for å slippe
                    folk inn i auditoriene de har reservert fikk aldri vite at
                    vi har reservert det. Derfor blir det ingen visning idag.Det
                    blir visning neste mandag, i auditorium R5, klokka 19.30 til
                    22.30.Programmet er Tylor og Banner, pluss en serie til som
                    avgjøres ved avstemning. <b>Stem!</b>
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2003, 7, 25),
    },
    {
        content: (
            <>
                <h4>Anime neste uke, kanskje?</h4>
                <p>
                    Ingen animevisning fredag den 22. i alle fall. Det var rett
                    og slett umulig å få tak i rom tidsnok.{" "}
                </p>
                <p>
                    Avstemningen om ukedag det blir visning på endte VELDIG
                    jevnt, med fem stemmer per dag. Slikt blir man ikke videre
                    klok av.{" "}
                </p>
                <p>
                    Av den grunn starter vi nå en ny poll om denne ukedagen.
                    Valgene er nå redusert en anelse. Da den kjæreste riva (og
                    eier) ikke kunne på freadger, og magnus ikke kunne på
                    diverse andre dager, står nå valget mellom mandager kl 1930,
                    ettermiddag på onsdager eller begge deler. Eller ingen av
                    delene. Stem i vei, så skal vi kanskje endelig få avgjort
                    dette.{" "}
                </p>
                <p>
                    Hvis valget ender på mandager blir det muligens ikke
                    førstkommende mandag (25. august), men dette avhenger om det
                    er mulig å reservere rom på kort varsel neste uke.{" "}
                </p>
                <p>
                    Forøvrig, kom med nominasjoner til hva vi skal vise. I
                    tillegg til de to vi har begynt på (Tylor og Excel Saga) er
                    Rurouni Kenshin, Tiny Snow Fairy Sugar (og samtlige andre
                    søte serier!) nominert. Hvis det er noen serier du virkelig
                    ikke likte, eller noen serier som du vil at vi skal vise,
                    send inn nominasjoner på irc eller maillingliste!{" "}
                </p>
                <p>Det var vel stort sett det. *pusteut*</p>
            </>
        ),
        author: "danner",
        date: new Date(2003, 7, 22),
    },
    {
        content: (
            <>
                <h4>Oppstart</h4>
                <p>
                    Sommerferien er over, og vi starter visningene igjen.{" "}
                    <b>Mest sannsynlig</b> blir første visning fredag 22/8.
                    Dette er ikke den fastsatte visningsdagen, vi vet at det er
                    mange som ikke ønsker fredag, men inntil vi får avklart om
                    det finnes en bedre dag, beholder vi fredagen. Hvilket rom
                    vil bli annonsert så snart vi vet det.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2003, 7, 15),
    },
    {
        content: (
            <>
                <h4>The End</h4>
                <p>
                    Da var alt over dette semesteret. Vi kommer tilbake til
                    høsten med (delvis) nytt program og forhåpentligvis litt
                    flere deltagere. Yay.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2003, 4, 10),
    },
    {
        content: (
            <>
                <h4>Siste visning</h4>
                <p>
                    Fredag 9. mai blir siste visning før sommeren. Fordi noen
                    okkuperer hele realfagsbygget denne uka, må vi imidlertid
                    flytte oss. Visningen blir i <b>Kjel 1 klokken 17.00</b>,
                    slik at vi har tid til å vente litt hvis folk ikke finner
                    fram i tide. Ingen grunn til ikke å komme.
                </p>
                <p>Altså, siste visning, Kjel 1, 17.00.</p>
            </>
        ),
        author: "dashiva",
        date: new Date(2003, 4, 8),
    },
    {
        content: (
            <>
                <h4>Visning 02/05</h4>
                <p>
                    Ja, det blir altså visning i dag og. Hurra. Nest siste
                    vanlige visning før sommeren, så ikke sitt hjemme og tenk på
                    karakterer, kom til R8 i stedet.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2003, 4, 2),
    },
    {
        content: (
            <>
                <h4>Påsken som var</h4>
                <p>
                    Det ble vist Bubblegum Crisis 1-4 på 11. mars, men grunnet
                    manglende oppmøte, ble det ingenting den 18. BGC 5-8 vil
                    derfor bli vist ved en senere anledning. Denne uken (25.
                    mars) vil vi fortsette med det vanlige programmet igjen.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2003, 3, 21),
    },
    {
        content: (
            <>
                <h4>Påsketiden</h4>
                <p>
                    Da den eneste tilgjengelige boksen som kan spille det vi
                    viser ikke er tilgjengelig på tirsdag og onsdag, faller
                    valget likevel på fredag. For de som blir i Trondheim i
                    påsken er det muligheter for enda en visning neste fredag,
                    men denne vil ikke være med de seriene vi viser til vanlig.
                </p>
                <p>
                    Påskeprogrammet er fastslått. På fredag 10/4 blir det
                    Bubblegum Crisis ep 1-4, og fredag 17/4 ep 5-8. Det er ikke
                    Macross, så forhåpentligvis er alle fornøyde. Og hvis det
                    passer seg tar jeg med Demon Fighter Kocho på 17/4 som en
                    liten bonus. Visningstiden blir fra 18 til ca 20 siden vi
                    viser mindre enn vanlig.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2003, 3, 10),
    },
    {
        content: (
            <>
                <h4>Neste uke</h4>
                <p>
                    Dashiva har lagt ut en eliminerings-type-poll oppe om når vi
                    skal vise anime neste uke. Stem i vei :)
                </p>
                <p>
                    Fredag er fjernet fra alternativene. Det er forøvrig
                    hjelpsomt at mer enn 6 stemmer...
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2003, 3, 5),
    },
    {
        content: (
            <>
                <h4>Planer fremover</h4>
                <p>
                    Det er bekreftet to stykker som har tenkt å komme på
                    animevisning på fredag. Det er litt få egentlig, men hvis
                    flere melder seg før i morgen kveld, så gjør vi noe ut av
                    det - dog kanskje ikke nødvendigvis seriene vi har begynt
                    på.
                </p>
                <p>
                    Mer av interesse er at neste uke igjen er "den store
                    hjemreisedagen" (tm) før påske. Det betyr at vi med fordel
                    kunne hatt visning tidligere i uken. Så, i mandat av at
                    dashiva fremdeles er i japan (eller i alle fall på flyet
                    hjem) syns jeg at vi bør flytte denne frem til mandag,
                    tirsdag eller onsdag i neste uke. Synspunkter på dette kan
                    gjerne diskuteres i mailingliste eller irc :)
                </p>
                <p>
                    Hmm.. dessuten glemte jeg helt å lage noen aprilsnarr. Skam
                    på meg.
                </p>
                <p>
                    <b>
                        Update: Det var ikke flere intresserte. Det blir derfor
                        ikke noe animeaften fredag 4. april. Mer info om når det
                        blir i neste uke kommer.
                    </b>
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2003, 3, 3),
    },
    {
        content: (
            <>
                <h4>Anime neste uke...?</h4>
                <p>
                    Det later til at neste uke (4. april) passer særdeles dårlig
                    da 97% av menneskene som vanligvis er tenkelige til å dra på
                    animevisning faktisk skal på japanfest - som er på akkurat
                    det samme tidspunktet. Er det noen som kommer neste uke i
                    det hele tatt? Jeg er jammen ikke sikker på om jeg kommer
                    selv :)
                </p>
                <p>
                    Poll om temaet er oppe, blir det mer enn to-tre stykker som
                    faktisk har tenkt å møte opp blir det animeaften. Ellers tar
                    vi en pause til den 11. april.
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2003, 2, 28),
    },
    {
        content: (
            <>
                <h4>Animevisning på fredag</h4>
                <p>
                    På fredag kl 18 er vi i gang igjen, og viser episode 5+6 av
                    crest of the stars, excel saga og tylor. Denne gangen loves
                    det høyt og hellig at vi skal være i R8. Æresord.
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2003, 2, 27),
    },
    {
        content: (
            <>
                <h4>Animevisning</h4>
                <p>
                    For de som måtte lure, det blir selvsagt animevisning fredag
                    den 21. mars, sal R8 kl 18. Planen er å fortsette på seriene
                    vi begynte på sist. Vel møtt! :)
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2003, 2, 20),
    },
    {
        content: (
            <>
                <h4>Fredag 14/03</h4>
                <p>
                    Da er fredagen mer eller mindre i boks. Vi kommer til å
                    bruke auditorium R8, vegg i vegg med R9, siden verken R1, R2
                    eller R5 var ledige. Både Crest of the Stars og Excel Saga
                    er anskaffet, og fra den labre deltagelsen på avstemningen,
                    ser det ut som om det blir Irresponsible Mathematician
                    Taylor som siste serie. De som ikke ønsker dette har
                    imidlertid fortsatt muligheten til å forandre det ved å få
                    de resterende 14 medlemmene til å stemme.
                </p>
                <p>Altså: R8 - 1800 - 14/03</p>
                <p>
                    Ta gjerne med venner og bekjente, neste gang kan det være
                    for sent.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2003, 2, 12),
    },
    {
        content: (
            <>
                <h4>Visning på fredag</h4>
                <p>
                    For de som ikke fikk det med seg - jo - det er selvsagt
                    visning på fredag kl 18. Men, auditorium R9 har ikke lyd, og
                    kommer nok ikke til å få det heller. Det kommer en mail om
                    hvor vi forflytter oss sånn ca på torsdag. I mellomtiden er
                    det bare å gå inn og stemme på hva som skal vises.
                </p>
            </>
        ),
        author: "danner",
        date: new Date(2003, 2, 10),
    },
    {
        content: (
            <>
                <h4>Fremtiden</h4>
                <p>
                    Vel, etter at php spiste formateringen av det andre forsøket
                    på å skrive en nyhet, prøver jeg igjen. Kun referat denne
                    gangen, siden jeg begynner å bli lei av å høre på meg selv
                    snakke.
                </p>
                <p>
                    <ul>
                        <li>
                            Uansett hva vi viser, vil det være ulovlig etter
                            åndsverksloven eller en relatert lov, siden vi ikke
                            har mulighet til å skaffe tillatelse.
                        </li>
                        <li>
                            Det gjøres hele tiden med alle typer film, ikke bare
                            anime, og er ingenting i forhold til det som skjer
                            på NTNU-nettet.
                        </li>
                        <li>
                            De som har rettighetene til det vi viser, har ingen
                            interesser i Norge. Unntaket er Ghibli, som visstnok
                            er representert ved Buena Vista.
                        </li>
                    </ul>
                </p>
                <p>
                    Altså, det er egentlig ingen fare for problemer. Det er
                    imidlertid en etisk problemstilling, så derfor skal dere få
                    lov til å stemme over det. Hvis vi faktisk skal få vist en
                    hel sesong av hva-det-nå-enn-er-vi-skal-vise før eksamen, må
                    vi komme igang fort, så kast dere på stemmeknappen før det
                    er for sent.
                </p>
            </>
        ),
        author: "dashiva",
        date: new Date(2003, 2, 5),
    },
    {
        content: (
            <>
                <h4>Spring 2017</h4>
                <p>
                    Anime NTNU will be starting up again from next Wednesday,
                    January the 18th. We will be starting with the movie
                    Redline, and then vote on the blackboard afterwards for the
                    rest of the program.
                </p>
                <p>The place will be KJL 2 and the time will be 20:00.</p>
                <p>
                    - This is due to someone else having booked the room (And
                    KJL 1 and 5) in advance, and the program may be shifted to
                    20:00 unless we can negotiate with the ones booking the
                    room.
                </p>
            </>
        ),
        author: "alfborge",
        date: new Date(2003, 2, 3),
    },
];

export default newsList;
export { newsAuthor, newsContent, newsDate };
