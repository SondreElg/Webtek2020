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
        0: `
        Why hello there, everyone.
        We'll be kicking off with regular viewings today at 19:30.<br/>
        <br/>
        Social events at campus are still prohibited, so for the time 
        being, we'll be doing online viewings through berntjd's 
        website (link will be posted later) and gather in #general on our 
        Discord server.<br/>
        <br/>
        The series are as follows:<br/>
        Rokka no Yuusha (Rokka -Braves of Six Flowers-)<br/>
        Hataraku Maou-Sama (The Devil is a Part-Timer!)<br/>
        Shirobako<br/>
        <br/>
        Break entertainment: <br/>
        Saiki Kusuo no Ψ-nan (The Disastrous Life of Saiki K.)`,
        1: "sondrhel",
        2: "Aug 26, 2020",
    },
    {
        0: `
        Alright everyone, it's that time of the year again.
        It's time to vote for which series we'll be watching this semester.<br/>
        <br/>
        Please fill out this <a href="https://forms.gle/EPamhaSdTsxk5UKKA" target="blank">this form</a> 
        by the end of the week to make your votes count
        `,
        1: "sondrhel",
        2: "Aug 19, 2020",
    },
    {
        0: `We are starting off the spring 2020 semester 
        by showing the 2012 animated movie Wolf Children this 
        Wednesday (2020-01-15) at 19:30 in R5. Bring a friend! 
        <br>
        <br>
        The poll for new series is up, and available at <a 
        href="https://forms.gle/m8gQFJP8E2ATWr2e7" target="blank">
        https://forms.gle/m8gQFJP8E2ATWr2e7</a>. It will stay 
        active until the end of week 3.`,
        1: "berntjd",
        2: "Jan 19, 2020",
    },
    {
        0: `<h4>Spring 2020 - Voting open - Movie on Wednesday</h4>We are starting off the spring 2020 semester by showing the 2012 animated movie Wolf Children this Wednesday (2020-01-15) at 19:30 in R5. Bring a friend!<br /><br />The poll for new series is up, and available at <a href="https://forms.gle/m8gQFJP8E2ATWr2e7"  target="blank">https://forms.gle/m8gQFJP8E2ATWr2e7</a>. It will stay active until the end of week 3.
        `,
        1: "berntjd",
        2: "Jan 13, 2020",
    },
    {
        0: `<h4>Fall 2019 Program</h4>Hi all,<br />The votes have been counted, and the program this semester is:<br />- Cowboy Bebop<br />- Humanity Has Declined<br />- The Melancholy of Haruhi Suzumiya (season 1)<br />- Higurashi: When They Cry<br /><br />As usual, it will be every Wednesday (starting 2019-08-28) in R5 at 19:30, except for week 45 (2019-11-06); that week we will be in R9.
        `,
        1: "berntjd",
        2: "Aug 25, 2019",
    },
    {
        0: `<h4>Fall 2019 - Voting open - GitS on Wednesday</h4>We are starting off the fall 2019 semester by showing the 1995 animated classic Ghost in the Shell this Wednesday (2019-08-21) at 19:30 in R5. Bring a friend!<br /><br />The poll for new series is up (still using a Google form for now), and available at https://forms.gle/qhhfHJrc8iZScwJE9. It will stay active until the end of week 35.<br /><br />Also, Sondre will be taking over the rudder onward, as my time as a student has run its course. I still live in Trondheim, though, so I will stick around.
        `,
        1: "berntjd",
        2: "Aug 17, 2019",
    },
    {
        0: `<h4>Program, Spring 2019</h4>The results are in. The program for spring 2019 will be the following series:<br />- Mushishi<br />- Black Lagoon<br />- Gakkougurashi!<br />- When Supernatural Battles Became Commonplace (replaces Gakkougurashi after mid-point)<br /><br />They will be shown every Wednesday (starting 2019-01-23) in R5 at 19:30. Somehow the room was available every week this time, so there should be no room changes.
        `,
        1: "berntjd",
        2: "Jan 21, 2019",
    },
    {
        0: `<h4>Spring 2019</h4>Hi all,<br /><br />We are starting off the spring 2019 semester by showing the movie Akira next Wednesday (2019-01-16) at 19:30 in R5. Bring a friend!<br /><br />The poll for new sieries is up (STILL using a Google form for now), and available at <a href="https://goo.gl/forms/fOpWCTHIN78sNaPf1" target="blank">https://goo.gl/forms/fOpWCTHIN78sNaPf1</a>. It will stay active until the end of week 3.
        `,
        1: "berntjd",
        2: "Jan  9, 2019",
    },
    {
        0: `<h4>Program, Fall 2018</h4>The program for fall 2018 will be the following series:<br />- Beck<br />- Baccano<br />- Genshiken<br />- Chuunibyou demo Koi ga Shitai<br /><br />It will be every Wednesday (starting 2018-08-29) in R5 at 19.30, except for week 45 (2018-11-07); that week we will be in R8.
        `,
        1: "berntjd",
        2: "Aug 27, 2018",
    },
    {
        0: `<h4>Fall 2018</h4>We will start off the semester by showing the movie Steamboy next Wednesday (2018-08-22) at 19:30 in R5. Bring a friend!<br /><br />The poll for new series is ready (still using a Google form for now), at <a href="https://goo.gl/forms/7Dy6ZnSYQF5xOTM23" target="blank">https://goo.gl/forms/7Dy6ZnSYQF5xOTM23</a>. It will stay active until the end of next week.
        `,
        1: "berntjd",
        2: "Aug 18, 2018",
    },
    {
        0: `<h4>A new semester begins (spring 2018)</h4>Hi all, and welcome to a new semester of anime.<br /><br />The poll for new series is ready (still using a Google form for now), at https://goo.gl/forms/xJHMYkggCj69g5cC3. It will stay active until the end of next week.<br />Meanwhile, we will start off the semester by showing "Sword of the Stranger" next Wednesday (2017-01-17) at 19:30 in R9. Bring a friend! Once the regular program starts, we will switch to R5.<br /><br />Bernt Johan<br />Mostly benevolent dictator, Anime NTNU
        `,
        1: "CVi",
        2: "Jan 11, 2018",
    },
    {
        0: `<h4>Showings this fall</h4>We will be showing the first episodes of Lain, Steins;Gate and Bakemonogatari in R9 (map: http://bit.ly/2vtVnCK) on Wednesday (2017-08-30). Discord is up: https://discord.gg/jCDXUez
        `,
        1: "CVi",
        2: "Aug 27, 2017",
    },
    {
        0: `<h4>New semester new Anime</h4>We will start off the semester by showing the film "Koe No Katachi" (or "A Silent Voice") today (2017-08-23) at 19:30 in KJL5.<br /><br />From next Wednesday, we will be watching anime series. The poll can be accessed here: <a href="https://goo.gl/forms/BeWXB4WzXYieOKrq2" target="blank">https://goo.gl/forms/BeWXB4WzXYieOKrq2</a>. Please only vote once.
        `,
        1: "CVi",
        2: "Aug 23, 2017",
    },
    {
        0: `<h4>Relocation for the next three weeks</h4>We wil be in room R5 instead of R9 the next three weeks, and we may have to delay the start fifteen minutes (to 19.45) based on whether there are people using the room.
        `,
        1: "Kishin",
        2: "Jan 31, 2017",
    },
    {
        0: `<h4>Relocation for the next three weeks</h4>We wil be in room R5 instead of R9 the next three weeks, and we may have to delay the start fifteen minutes (to 19.45) based on whether there are people using the room.
        `,
        1: "Kishin",
        2: "Jan 31, 2017",
    },
    {
        0: `<h4>Spring 2017</h4>Anime NTNU will be starting up again from next Wednesday, January the 18th. We will be starting with the movie Redline, and then vote on the blackboard afterwards for the rest of the program. <br /><br />The place will be KJL 2 and the time will be 20:00. <br />- This is due to someone else having booked the room (And KJL 1 and 5) in advance, and the program may be shifted to 20:00 unless we can negotiate with the ones booking the room.
        `,
        1: "Kishin",
        2: "Jan 12, 2017",
    },
    {
        0: `<h4>Fall 2016</h4>Hello all.<br /><br />It is time for the program to start up again for this semester. We will start by showing the movie compilation Memories this Wednesday (the 24th of August), at 19:30 in KJL 5 as usual.<br /><br />After the movie we will vote for this semester's program, but with a twist: Series already seen by more than half the people present will be disqualified from the vote, because we want people to explore new series, not stay safely within their box of comfort.<br /><br />The candidates will be listed after the movie.
        `,
        1: "Kishin",
        2: "Aug 23, 2016",
    },
    {
        0: `<h4>Program, Spring 2016</h4>The program for spring 2016 will be the following series:<br />- Higurashi (second season)<br />- Princess Tutu<br />- Arakawa under the Bridge<br />- Aria the Animation<br /><br />It will be every Wednesday in KJL5 at 19.30, as usual.
        `,
        1: "Kishin",
        2: "Jan 15, 2016",
    },
    {
        0: `<h4>Fall 2015</h4>This year we will be showing:<br /><br />Space Battleship Yamato 2199<br />Welcome to the NHK<br />Higurashi: When they Cry<br /><br />We will also be showing the movie Millennium Actress at Wednesday 19th of August, and after that the ordinary program starts.<br /><br />We will mostly be in KJL5 at 19:30, but I have set up KJL2 as a backup in case it is already booked.
        `,
        1: "Kishin",
        2: "Aug 10, 2015",
    },
    {
        0: `<h4>Program, Spring 2015</h4>The following Anime series won the vote for this semester:<br /><br />Paranoia Agent (One of those old classics)<br />Toward the Terra (A rather obscure scifi gem)<br />Kore wa Zombie Desu ka? (A crazy monster-of-the-week comedy)<br />JoJos Bizarre Adventure (heh... hehehe... hahaha! AHAHAHAHA!!! ahem, move along, move along)<br /><br />The program will start Wednesday 21st and continue for the rest of the semester.
        `,
        1: "Kishin",
        2: "Jan 15, 2015",
    },
    {
        0: `<h4>Program for Spring 2015</h4>Wednesday 14th of January Anime NTNU will show the movie Jin-Roh: The Wolf Brigade in KJL5 at 19:30.<br /><br />Next week the ordinary program will follow with the series which wins the vote.
        `,
        1: "Kishin",
        2: "Jan 11, 2015",
    },
    {
        0: `<h4>Info</h4>We will finish for the semester at the 19th of November, that means we have two Wednesdays left.<br /><br />Afterwards the vote for the next year animes will be opened.
        `,
        1: "Kishin",
        2: "Nov  6, 2014",
    },
    {
        0: `<h4>A little heads up</h4>I just found out that Cinemateket (Trondheim Filmklubb) is showing the movie 5 centimeters per second at the cinema:<br /> Thursday 06 of November at 21:00, in Nova 3
        `,
        1: "Kishin",
        2: "Oct 20, 2014",
    },
    {
        0: `<h4>Notice</h4>We will be in KJL1 wednesday, because KJL5 was already booked before I got there.<br /><br />There will be posted arrows and notices in the building.
        `,
        1: "Kishin",
        2: "Sep  1, 2014",
    },
    {
        0: `<h4>Fall 2014 Anime program</h4>We will start the semester by showing Time of Eve, Wednesday the 20th in KJL 5 at 19:30<br /><br />Afterwards we will be showing:<br />- Shinsekai Yori<br />- And yet the Town Moves<br />- Kino no Tabi<br />- Gankutsuou: THe Count of Monte Cristo
        `,
        1: "Kishin",
        2: "Aug 19, 2014",
    },
    {
        0: `<h4>Starting on Humanity Has Declined tomorrow</h4>I wanted to remind people that we will be showing the first episode of Humanity has Declined today, before the last episode of Bakemonogatari, so people interested in the next series should come/stay after Ouran Host Club.
        `,
        1: "Kishin",
        2: "Mar 11, 2014",
    },
    {
        0: `<h4>Spring 2014 </h4>We will be starting the normal program for this semester Wednesday 22nd. <br /><br />The series we will be showing are:<br />- Bakemonogatari<br />- Cowboy Bebop<br />- Ouran High School Host Club<br />- Humanity Has Declined <br /><br />NB: We will be in KJEL 2 that day, but the rest of the semester we will be in KJEL 5
        `,
        1: "Kishin",
        2: "Jan 16, 2014",
    },
    {
        0: `<h4>Poster troubles</h4>(Resolved)
        `,
        1: "Kishin",
        2: "Jan 11, 2014",
    },
    {
        0: `<h4>Movie the 15th of January</h4>Anime NTNU will be showing the movie Tokyo Godfathers at Wednesday 15th of January, in KJEL 5 at 19:30.<br /><br />After this the ordinary program will begin. The voting poll will close this Saturday.<br /><br />NOTE: On January 22th we will use the room KJEL 2, due to KJEL 5 already being booked that date. KJEL 5 will be used the rest of the semester though.
        `,
        1: "Kishin",
        2: "Jan 10, 2014",
    },
    {
        0: `<h4>Next voting poll is ready</h4>So vote for what series you want to see the next semester.
        `,
        1: "Kishin",
        2: "Nov 26, 2013",
    },
    {
        0: `<h4>Program, Fall 2013</h4>We will be showing the following series this semester:<br /><br />Durarara!! <br /><br />Chūnibyō demo Koi ga Shitai!<br /><br />Mirai Nikki <br /><br />Daily Lives of High School Boys<br /><br /><br />Note: We will be using KJEL 1 the entire semester, not KJEL 5
        `,
        1: "Kishin",
        2: "Aug 25, 2013",
    },
    {
        0: `<h4>Program: Fall 2013</h4>We will start by showing Metropolis on Wednesday 21st, in KJEL 1 (not KJEL 5) at 19.30<br /><br />After that the program will commence with the series that have been voted for, the voting closes friday 23rd.
        `,
        1: "Kishin",
        2: "Aug 17, 2013",
    },
    {
        0: `<h4>1st and 8th of May</h4>There will be no program om May the 1st.<br /><br />On May the 8th we are planning to show the Steins;gate movie.<br /><br />EDIT: Await more info on the Steins;gate movie, since it is possible it will not be released in a while (it premiered the 20th april, so DVD-release is probably a while away)<br /><br />EDIT2: We will be showing a movie in any case; if the Steins;gate movie shows up we will be showing it, otherwise we will be showing another movie
        `,
        1: "Kishin",
        2: "Apr 30, 2013",
    },
    {
        0: `<h4>Program after easter</h4>We will be starting the program again Wednesday 3rd of April, due to time-constraints with finishing the program because of the 1st of May not being available.<br /><br />Also because we support diligent students who don't take extended vaccations :)
        `,
        1: "Kishin",
        2: "Apr  1, 2013",
    },
    {
        0: `<h4>Spring program starting today!</h4><br />Steins;Gate<br />Minami-ke<br />Ben-to! (Level-E after the midsemester)
        `,
        1: "danner",
        2: "Jan 23, 2013",
    },
    {
        0: `<h4>Spring 2013</h4>Seeing that we survived the Mayan Apocalypse, we will be starting the spring semester by showing Nausicaa of the Valley of the Wind on Wednesday 16th of January, in KJEL 5 as usual<br /><br />Then we will go on with the ordinary program, showing the series which are voted for.
        `,
        1: "Kishin",
        2: "Jan  9, 2013",
    },
    {
        0: `<h4>Changing room</h4>We are going to be in KJL 1 today and next week<br /><br />(late notice, I know, we found out today that the primary choice wasn't available)
        `,
        1: "Kishin",
        2: "Nov 21, 2012",
    },
    {
        0: `<h4>Plan for this fall</h4>The series that will be shown are:<br /><br />Nichijou<br />RahXephon<br />Daughter of 20 faces
        `,
        1: "Kishin",
        2: "Aug 21, 2012",
    },
    {
        0: `<h4>Voting for Fall 2012 open</h4>Vote for whatever you'd like or wouldn't like to see this fall
        `,
        1: "Kishin",
        2: "Aug 20, 2012",
    },
    {
        0: `<h4>Easter plan</h4>Wednesday the 4th there will be no anime showing. Enjoy the easter holiday!<br /><br />Anime showings will resume as normal starting wednesday the 11th. 
        `,
        1: "danner",
        2: "Apr 10, 2012",
    },
    {
        0: `<h4>Spring Semester</h4>The following series will be shown:<br /><br />Eden of the East<br />Puella magi Madoka Magica<br />Spice and Wolf S2<br />Angel Beats!<br />XXXHolic 
        `,
        1: "Kishin",
        2: "Jan 25, 2012",
    },
    {
        0: `<h4>Wednesday 18th of January</h4>The movie Ghost in the Shell will be shown<br /><br /><br />The series from the voting-poll will be shown the week after that and onwards
        `,
        1: "Kishin",
        2: "Jan 15, 2012",
    },
    {
        0: `<h4>Vote for 2012 spring semester</h4>The poll is now open, so please vote for the animes you want (or don't want) to see.
        `,
        1: "Kishin",
        2: "Dec 22, 2011",
    },
    {
        0: `<h4>Autumn Semester 2011</h4><b>What: </b><br />25th of Aug: Only Yesterday (film)<br />31th of Aug and onwards: Regular programme with 2 episodes each of<br /><br />- Darker Than Black<br />- Nodame Cantabile<br />- Spice & Wolf<br /><br /><b>Where: </b>Auditorium Kjel5<br /><b>When: </b>Every Wednesday at 19.30<br /><br />The showings are open for everyone. 
        `,
        1: "inebeate",
        2: "Aug 19, 2011",
    },
    {
        0: `<h4>Semester End</h4>There will be no showing at April 27th (or the 20th).<br /><br />The last showing this semester will be May 4th, with the last three episodes of Canaan.
        `,
        1: "inebeate",
        2: "Apr 18, 2011",
    },
    {
        0: `<h4>Spring semester starting</h4>Showing regular programme from Jan 19th  (2 episodes each):<br /><br />- Baccano<br />- Denno Coil<br />- Sayonara, Zetsubou-Sensei<br /><br />Every Wednesday 19:30 at KJL5.<br /><br />Showings are open for everyone.
        `,
        1: "inebeate",
        2: "Jan 12, 2011",
    },
    {
        0: `<h4>Autumn semester startup</h4><b>What: </b><br />25th of August: Whisper of the Heart<br />1st of September (and onwards): Regular program. Every week, we show 2 episodes of...<br /><br /> - Azumanga Daioh<br /> - Kare Kano<br /> - Abenobashi / FLCL<br /><br /><b>Place:</b> Auditorium Kjel5<br /><b>When:</b> 1930<br /><br />The showings are, as always, open for everyone.
        `,
        1: "danner",
        2: "Aug 16, 2010",
    },
    {
        0: `<h4>Spring Semester beginning today!</h4>So come join us at KJL5 like last semester. <br /><br />Program: <br /><br /> - Honey and Clover <br /> - Genshiken <br /> - Code Geass R2 (that's season 2 for those who don't know)
        `,
        1: "danner",
        2: "Jan 20, 2010",
    },
    {
        0: `<h4>Today: Kiki's Delivery Service</h4>KJL5, 19:30.
        `,
        1: "oysteini",
        2: "Jan 13, 2010",
    },
    {
        0: `<h4>Vote for the spring semester program!</h4>The voting is open, tell us what you want to see!<br /><br />Poll<br /><br />If you don't have an account, sign up to the mailing list and you will recieve one. 
        `,
        1: "danner",
        2: "Nov 19, 2009",
    },
    {
        0: `<h4>Season starting</h4>Wednesday the 26th we'll start the new semester series, showing:<br /><br /> - Code Geass<br /> - Ghost Hunt<br /> - Tengen Toppa Gurren-Lagann<br /><br />Time will as always be 19:30 on wednesdays, the place is Auditorum Kjel5, same as during Totoro last week.  
        `,
        1: "danner",
        2: "Aug 23, 2009",
    },
    {
        0: `<h4>Tonari no Totoro August 19th</h4>We will show Tonari no Totoro August 19th 19:30 in KJL5.  KJL5 is in Kjelhuset, second floor.
        `,
        1: "oysteini",
        2: "Aug 18, 2009",
    },
    {
        0: `<h4>15th of April</h4>Yes, there will be anime showing today. 
        `,
        1: "danner",
        2: "Apr 15, 2009",
    },
    {
        0: `<h4>March 4th is in F1</h4><br />March 4th is in F1<br />
        `,
        1: "gunnarre",
        2: "Mar  4, 2009",
    },
    {
        0: `<h4>Spring Semester starting</h4>We'll be starting the spring semester anime season today. Auditorium R7, 1930. For those wondering, Auditorium R7 is right below the cantina in Realfagsbygget. <br /><br />Program of the evening is<br /><br />* Ouran High School Host Club episode 1-2<br />* Black Lagoon episode 1-2<br />* Welcome to the NHK episode 1-2<br /><br />Spread the word. Unfortunately, noone seems to have gotten around to create some posters, so we'll have to do this through the word-of-mouth way. 
        `,
        1: "danner",
        2: "Jan 28, 2009",
    },
    {
        0: `<h4>Movie: 21st of January, 2009</h4>Tomorrow, we will start the semester with a showing of an anime movie. <br /><br />Which movie: "The Girl who Leapt through Time"<br />Place: Auditorium R2<br />Time: 19:30, 21st Jan 2009<br /><br />Be there ;)<br /><br />Next week we'll start on the regular program, consisting of Ouran High School Host Club, Black Lagoon and Welcome to the NHK. 
        `,
        1: "danner",
        2: "Jan 20, 2009",
    },
    {
        0: `<h4>Spring Semester Program</h4>Go ahead and vote for what you want to see!<br /><br />http://org.ntnu.no/anime/poll.php<br /><br />If you have write-in suggestions, mail them to the mailing list as soon as possible. We will close the poll sometime before christmas. 
        `,
        1: "danner",
        2: "Nov 20, 2008",
    },
    {
        0: `<h4>October 15th: New series</h4>On October 15th, we start with a new series: Full Metal Panic? Fumoffu. This will be shown as the first series of the evening.
        `,
        1: "gunnarre",
        2: "Oct  9, 2008",
    },
    {
        0: `<h4>Program Fall 2008</h4><img src="img/fall_semster_mike_logo.jpg" alt="Fall Semester Mike logo" width="326" height="266"><br />27th August: Film. Tekkonkinkreet<br /><br />Every week from there on, these series: <br /><br />- The Gokusen<br />- Fate/stay night<br />- Jungle wa Itsumo - Hale nochi Guu!<br />- Full Metal Panic? Fumoffu (After The Gokusen is finished half-way through the semester)<br /><br />See the program for details.<br /><br />We are booked into auditorium R2 for the Fall semester. See the maps here. There might be changes if technical issues arise. Watch this space.
        `,
        1: "gunnarre",
        2: "Aug 19, 2008",
    },
    {
        0: `<h4>Fall/semester Mike</h4>August is upon us again. The exact schedule is not yet complete, but we expect to show movies or shorts on the 20th and 27th with the series program beginning September 3rd. More details to follow.
        `,
        1: "dashiva",
        2: "Aug  4, 2008",
    },
    {
        0: `<h4>Program Spring 2008</h4>The program is ready<br /><br />16. January: Ghost in the Shell (movie)<br />23. January: Gunsmith Cats (miniseries)<br /><br />Every subsequent week from there on: <br /><br />- Ghost in the shell: SAC<br />- The Melancholy of Haruhi Suzumiya / Ichigo Mashimaro (after haruhi finishes)<br />- Mushishi<br /><br />The first two weeks are in auditorium R1, then R2 for the rest of the semester. 
        `,
        1: "danner",
        2: "Jan 14, 2008",
    },
    {
        0: `<h4>First showings 16. january</h4>There will be no anime showing tomorrow (9th of january). We will start the showings on the 16th, possibly opening with a movie. More info on program, location and all that to come well in time before the weekend. 
        `,
        1: "danner",
        2: "Jan  8, 2008",
    },
    {
        0: `<h4>Problems with the site?</h4>There's just been a change to the site backend. No troubles should arise, but if you do encounter something, let us know!
        `,
        1: "dashiva",
        2: "Dec 10, 2007",
    },
    {
        0: `<h4>Vote for the anime program, Sping 2008 ready</h4>The winners of the vote this semester was: <br /><br />* Mushishi<br />* Ghost in the Shell: SAC<br />* The melancoly of Haruhi Suzumiya<br />... and as a fillup to match the last quarter of the third anime<br />* Ichigo Mashimaro<br /><br />And on a personal note, I'd like to add that all of you who voted Tutu down in order to avoid its nauseatingly cute style SO deserve what's coming to you! ;)
        `,
        1: "danner",
        2: "Dec  9, 2007",
    },
    {
        0: `<h4>Anime showings, Fall 2007</h4>The program for the showings this semester is as follows:<br /><br />* August 22nd: Porco Rosso (Movie)<br />* August 29th: Nausicaa (Movie)<br /><br />Subsequent weeks:<br /><br />* Excel Saga<br />* RahXephon<br />* Princess Tutu / Kamichu!<br /><br />Place and time is auditorium R2, 1930. 
        `,
        1: "danner",
        2: "Aug 17, 2007",
    },
    {
        0: `<h4>SaiRAG 2007</h4><form method=post action="http://poll.pollcode.com/qu0N"><table border=0 width=150 bgcolor="EEEEEE" cellspacing=0 cellpadding=2><tr><td colspan=2><font face="Verdana" size=-1 color="Black"><b>SaiRAG 2007 Qualifier. Who is the most badass woman in RahXephon?</b></font></td></tr><tr><td width=5><input type=radio name=answer value="1"></td><td><font face="Verdana" size=-1 color="Black">Haruka Shitow</font></td></tr><tr><td width=5><input type=radio name=answer value="2"></td><td><font face="Verdana" size=-1 color="Black">Elvy Hadhiyat</font></td></tr><tr><td width=5><input type=radio name=answer value="3"></td><td><font face="Verdana" size=-1 color="Black">Maya Kamina</font></td></tr><tr><td width=5><input type=radio name=answer value="4"></td><td><font face="Verdana" size=-1 color="Black">Laila Costa</font></td></tr><tr><td width=5><input type=radio name=answer value="5"></td><td><font face="Verdana" size=-1 color="Black">Kim Hotal</font></td></tr><tr><td width=5><input type=radio name=answer value="6"></td><td><font face="Verdana" size=-1 color="Black">Helena von Bahbem</font></td></tr><tr><td width=5><input type=radio name=answer value="7"></td><td><font face="Verdana" size=-1 color="Black">Megumi Shitow</font></td></tr><tr><td width=5><input type=radio name=answer value="8"></td><td><font face="Verdana" size=-1 color="Black">Cathy "Crazy Horse" McMahon</font></td></tr><tr><td colspan=2><center><input type=submit value="Vote"><input type=submit name=view value="View"></center></td></tr><tr><td bgcolor="white" colspan=2 align=right><font face="Verdana" size=-2 color="black">pollcode.com <a href=http://pollcode.com/ target="blank"><font color="navy">free polls</font></a></font></td></tr></table></form>
        `,
        1: "gunnarre",
        2: "Jun 14, 2007",
    },
    {
        0: `<h4>Summertime 07</h4>Another semester ends.<br /><br />We hope to see you in Fall semester, everybody.
        `,
        1: "dashiva",
        2: "May  8, 2007",
    },
    {
        0: `<h4>Spring 2007</h4>Hi. We're on again. This time in <b>R2</b>. Still Wednesdays at 19:30. First with a film on the 17th, and then the series start again on the 24th.<br /><br />Heisan, da var vi i gang igjen. Denne gangen i R2. Fremdeles onsdager kl 19:30.<br /><br />17. januar: Metropolis<br /><br />24. januar: Samurai Champloo, Cromartie High, Witch Hunter Robin<br /><br />Senere på året tar Tsukihime over for Cromartie High. (Se programmet)
        `,
        1: "gunnarre",
        2: "Jan 14, 2007",
    },
    {
        0: `<h4>Transition to next semester</h4>It's soom time to wrap up the fall semester with Planetes and Nadesico on November 29th, and then a movie on December 6th.<br /><br />Spring 07 series vote is open. There might be an extra "preview" screening in connection with this vote. <br /><br />Also remember to vote for what you liked this fall.
        `,
        1: "gunnarre",
        2: "Nov 23, 2006",
    },
    {
        0: `<h4>utf-8</h4>Nettsidene bruker nå utf-8. Hvis dere kommer over noen tilfeller av gammel tekst i iso-8859-1 (typisk i form av firkanter i stedet for bokstaver) si gjerne i fra på IRC eller epost.<br /><br />Merk at selv om dere har støtte for utf-8 i nettleseren er det ikke sikkert dere har tilgjengelig (for eksempel) japanske tegn. Nyhetsposten under denne inneholder japansk og kan brukes som en test.<br /><br />Ekstra: Vi har gått over fra RSS til Atom 1.0 med tilhørende endring av URL. Hvis noen faktisk bruker feeden må dere oppdatere.
        `,
        1: "dashiva",
        2: "Oct 15, 2006",
    },
    {
        0: `<h4>Generell TODO</h4><b>[x]</b> Endre feed til Atom 1.0<br />Rydde opp i hva slags data som er trygt å skrive ut<br />Fikse korrekt bruk av HTML vs nl2br
        `,
        1: "dashiva",
        2: "Oct 15, 2006",
    },
    {
        0: `<h4>R1 it is</h4>Vi er altså i R1 nå og i all overskuelig fremtid. Det bare ble sånn.<br /><br />これからＲ１にいることになりました。
        `,
        1: "dashiva",
        2: "Sep 27, 2006",
    },
    {
        0: `<h4>Vi er i gang igjen</h4>Samme tid, ikke samme sted - vi er i R2 nå, igjen. Høstens serier blir Planetes, Martian Successor Nadesico, Genshiken (+ Kujibiki Unbalance) og Midori no Hibi. Se programsiden for detaljer. Seriene starter 6. september, men vi starter med to filmer<br /><br />23. august: The Place Promised In Our Early Days<br /><br />30. august: Grave of the Fireflies
        `,
        1: "gunnarre",
        2: "Aug 21, 2006",
    },
    {
        0: `<h4>i18n</h4>Tabeller i databasen som lagrer språkspesifikk info:<br /><br /><b>[done]</b> poll_valg - tekst<br /><b>[done]</b> poll_metadata - tittel, tekst<br /><b>[done]</b> nyheter - tittel, tekst<br /><b>[done]</b> anime_komm - tekst (fra brukere)<br /><b>[x]</b> anime_anime - tittel, tekst (alltid engelsk)<br /><b>[done]</b> (vist_sesong bør automatiseres, ignore)<br /><b>[x]</b> (brukere bør begrenses til latin1, ignore)
        `,
        1: "dashiva",
        2: "May 14, 2006",
    },
    {
        0: `<h4>Overgang til sommer</h4>Enda en eksamensperiode er i emning, og som vanlig betyr det programutvelgelse for neste semester. Avstemningen er allerede i gang. Stem på dine favoritter, og si ifra på mailingliste eller IRC hvis du mener andre serier bør nomineres.<br /><br />De neste visningene blir smakebitsvisninger lik de vi hadde før jul. Det vil si at vi viser en episode hver av forskjellige serier fra avstemningen. Når disse er over tar vi sommerferie, og kommer tilbake i midten av august. Vi vil som vanlig trenge plakatdesignere og plakatopphengere, så vær beredt på å melde dere som frivillige.
        `,
        1: "dashiva",
        2: "Apr 27, 2006",
    },
    {
        0: `<h4>Påske og fremover</h4>Det blir ingen visning 12. april grunnet ferieavvikling.<br /><ul><li>19. april - 7 episoder for å slippe å dele opp avslutningen av Paranoia Agent</li><li>26. april - Bonus: Memories siden alt utenom Trigun er ferdig</li><li>3. mai (og kanskje 10. mai) - Forhåndsvisninger av serier til neste semester</li></ul>
        `,
        1: "dashiva",
        2: "Apr  8, 2006",
    },
    {
        0: `<h4>Nytt semester</h4>Programmet for våren er nå tilgjengelig på programsidene.
        `,
        1: "dashiva",
        2: "Jan  9, 2006",
    },
    {
        0: `<h4>Ekstravisning 7. desember</h4>Som programmet på nettsidene viser er siste ordinære visning 30. november, med en ekstravisning 7. desember. Planen var å vise Advent Children (siden det er advent) men den har altså blitt utsatt.<br /><br />I stedet blir det en smakebitvisning, hvor vi viser første episode av flere forskjellige serier på avstemningen for neste semester. De av dere som ikke er helt sikre på hva dere skal stemme kan benytte anledningen til å få et inntrykk av de forskjellige seriene.
        `,
        1: "dashiva",
        2: "Nov 25, 2005",
    },
    {
        0: `<h4>Backup</h4>Vi bør ordne en cronjob som animebruker som kjører backup av database og hjemmeområde jevnlig.
        `,
        1: "dashiva",
        2: "Nov 11, 2005",
    },
    {
        0: `<h4>Avstemning og avstemninger</h4>De gode nyhetene er at avstemningen for neste semesters program er i gang.<br /><br />De dårlige nyhetene er noen av dere som stemte på torsdag eller fredag må stemme på nytt.
        `,
        1: "dashiva",
        2: "Nov 11, 2005",
    },
    {
        0: `<h4>Unix-brukergrupper</h4>legge til meg i org.ntnu.no-brukergruppen
        `,
        1: "metellius",
        2: "Oct 28, 2005",
    },
    {
        0: `<h4>Flytting av visningene</h4>Visningene blir i <b>EL2</b> fra og med 12. oktober. "Hvem er vi" har nå oppdaterte kart og retningslinjer.<br /><br />I tillegg har noen ivrige sjeler laget en video. Den starter ved inngangen nærmest hovedbygget og viser veien til EL2.
        `,
        1: "dashiva",
        2: "Oct  7, 2005",
    },
    {
        0: `<h4>Visning 21/9</h4>Som varslet blir visningen 21. september i R1, ikke i R2.
        `,
        1: "dashiva",
        2: "Sep 20, 2005",
    },
    {
        0: `<h4>Vi er i gang igjen</h4>Samme tid, ikke samme sted - vi er i R2 nå. Høstens serier blir Azumanga Daioh, Kino no Tabi, Saikano og Infinite Ryvius. Se programsiden for detaljer. Seriene starter <b>7. september</b>.
        `,
        1: "dashiva",
        2: "Aug 31, 2005",
    },
    {
        0: `<h4>Semesterslutt</h4>Siste visning er onsdag 11. mai. Etter visningen blir det et slags minimøte hvor vi tar imot tilbakemelding på semesteret som var, og lignende ting som gjøres på minimøter. Sannsynligvis blir det også litt snakking om hva som skal vises (og ikke vises) til høsten. Vel møtt.
        `,
        1: "dashiva",
        2: "May  8, 2005",
    },
    {
        0: `<h4>Omorganisering</h4>Planer om å endre medlemsstrukturen. Nettsidene har blitt såpass brukbare og omfattende at brukere skal bli sterke entiteter, ikke avhengige av mailingliste. Om mailingliste skal bli et subsett av medlemmene (opt-in), alle medlemmene (opt-out) eller fortsatt åpen for alle er ikke bestemt.<br /><br />Hvordan overgangen skal skje er ikke avgjort. Satser på å kombinere med en opprydning i inaktive brukere.
        `,
        1: "dashiva",
        2: "Apr  8, 2005",
    },
    {
        0: `<h4>Mot slutten</h4>Da var Lain så avsluttet som serien blir. De som føler at de sitter igjen som store spørsmålstegn kan gjøre som serien selv og glemme alt som skjedde før siste episode.<br /><br />De neste fire ukene tar Bubblegum Crisis over som siste post på programmet.
        `,
        1: "dashiva",
        2: "Apr  6, 2005",
    },
    {
        0: `<h4>Gammelt program</h4>Bruken av "aktuell" anime gjør at eldre programposter ikke kan oppdateres, fikses, endres, etc. Egentlig kosmetisk, men et problem som bør fikses på en eller annen måte.<br /><br />Løsning: tidligere sesonger genererer lister over all anime som har vært vist. Litt overflødig, men det virker og vi skal ikke justere mye i fortiden uansett.
        `,
        1: "dashiva",
        2: "Apr  5, 2005",
    },
    {
        0: `<h4>Sikkerhet</h4>Skal undersøke houelands monsterkode og se om det er mulig å bruke den uten å redusere alt ned til en side. Input fra dere andre er velkommen.
        `,
        1: "dashiva",
        2: "Mar 31, 2005",
    },
    {
        0: `<h4>Ordne storpoll</h4>Slå sammen storpoll med poll og deretter fikse link. Ingen vits å ha to sider som gjør akkurat det samme når vi kan ha mer enn en poll på hver side.
        `,
        1: "dashiva",
        2: "Mar 31, 2005",
    },
    {
        0: `<h4>Ordne opp</h4>Må fikse vårrengjøringen i databasen
        `,
        1: "dashiva",
        2: "Mar 31, 2005",
    },
    {
        0: `<h4>Etter påsketiden</h4>Avstemningen endte med flertall for å bli i R5. Det blir derfor ingen flytting før sommeren, men R2 blir en sterk kanditat neste høst hvis ingenting blir gjort med lyden i R5.<br /><br /><span style="text-decoration:line-through;">Ellers blir det en ny avstemning ganske snart om programmet etter Lain.</span><br /><br />Ny avstemning er i gang. Den varer bare en uke, så stem fort!
        `,
        1: "dashiva",
        2: "Mar 30, 2005",
    },
    {
        0: `<h4>Excenteraften på Samfundet: Anime</h4>Tirsdag den 25. januar kl 19 blir det excenteraften om Anime på Knaus, Samfundet. Det blir en liten tour gjennom animeens verden, hva dette egentlig er, og litt om de rare menneskene som ser på slikt. Ingen forkunnskaper om Anime er forutsatt.<br /><br />Fra tickeren på samfundets program: <br /><br />"Animé betegner den spesielle tegnestilen innenfor den japanske animasjonstradisjonen, og kjennetegnes blant annet ved at store overdrivelser er et vanlig virkemiddel. Men animé er også mer enn en tegnestil. På lik linje med vestlig film finnes det utallige forskjellige sjangre og historier, i tillegg til et bredere spekter av virkemidler siden tegnerene fritt kan bevege karakterene rundt. Animé er et friskt pust i filmens verden. Innleder er Andreas Danner Nilsen som er aktiv i Trondheims egen animéklubb ved NTNU. "
        `,
        1: "danner",
        2: "Jan 20, 2005",
    },
    {
        0: `<h4>Vårsemesteret 2005 er igang</h4>19. januar åpner vi semesteret med den koselige filmen Whisper of the Heart.<br /><br />Tirsdag 25. januar kl 19.00 er det Excenteraften: Animé på Samfundet. Innleder er vår egen kjære Andreas Danner Nilsen. Møt opp for en innføring i animéens verden. :-)<br /><br /><b>Akira</b> vil vises den 26. januar (kl 20.00) istedenfor The Cat Returns som tidligere var annonsert, da denne filmen ikke er oversatt ennå. Vi satser på å vise The Cat Returns senere i semesteret.<br /><br />Seriene begynner for fullt fra 2. februar. Se programmet for detaljer.
        `,
        1: "lance",
        2: "Jan 13, 2005",
    },
    {
        0: `<h4>Semesteret over</h4>Da var moroa over for i år. Men, vi kommer sterkt tilbake neste semester med mer anime. Send gjerne inn forslag til anime som skal vises - men det er som sagt en fordel om denne kan backes opp med dvd'er. Første visning blir <i>trolig</i> en gang 2 uker etter semesterstart (17-22), trolig i R5 og trolig kl 1930. Kanskje til og med en onsdag. Når vår skumle diktator bestemmer seg for dette blir det mer informasjon. <br /><br />I mellomtiden - God Jul. 
        `,
        1: "danner",
        2: "Nov 24, 2004",
    },
    {
        0: `<h4>Nye serier til våren.... (nominasjoner)</h4>Det var mye bra anime hos folket. Noen nominasjoner jeg syns er kjempebra:<br /><br />scryed (26)<br />cowboy bebop (26) <br />kino no tabi (13)<br />flcl (6)<br />slayers (26)<br /><br />og noen jeg tror kan bli populære:<br /><br />rune soldier louie (24)<br />saber marionette J (26)
        `,
        1: "danner",
        2: "Nov 18, 2004",
    },
    {
        0: `<h4>Boogiepop Spoileside</h4>Da var vi ferdig med 12 episoder boogiepop. Og trolig er det få som skjønner hva det hele handlet om. Jeg har derfor laget en spoileside som trolig skal forklare det meste. Les mer her
        `,
        1: "danner",
        2: "Oct  6, 2004",
    },
    {
        0: `<h4>Nyheter til mailingliste</h4><ul><li>Automatisk utsending av nyheter fra websidene til mailinglista.<br /></li><li>Valg for å kun publisere på nett (default til mailingliste).<br /></li><li>...<br /></li></ul>
        `,
        1: "lance",
        2: "Sep 30, 2004",
    },
    {
        0: `<h4>Nye websider</h4>Websidene er under omgjøring, som noen sikkert har sett. Programmet forover er nå litt mer strukturert utlagt, uten at det betyr at vi ikke kan forandre ting underveis ... ;-)<br /><br />Hvis noen har meninger om sidene anbefales de å komme til irc-kanalen, eller kontakte en av oss på visningene. Eller bruke mailinglista.
        `,
        1: "lance",
        2: "Sep 30, 2004",
    },
    {
        0: `<h4>Til opplysning</h4>Dørene nærmest bussholdeplassen stenger visstnok klokken 19.00. De som ikke er NTNU-studenter må enten gå til den andre inngangen (se kart), komme før klokken 19.00, eller bli venn med en NTNU-student. <br /><br />Ellers har folket talt: Rei er punk med 6 stemmer mot 3. Ny avstemning er i gang.
        `,
        1: "dashiva",
        2: "Sep 29, 2004",
    },
    {
        0: `<h4>md5-passord</h4>De ukrypterte passordene i databasen er borte, og de gamle er konvertert til md5-hasher. Passord for brukere resettes fra admin. Så nå kan man ha obskøne passord uten hetsing. ;)
        `,
        1: "lance",
        2: "Sep 24, 2004",
    },
    {
        0: `<h4>Serier, del 1</h4>Her er programmet for de første seks ukene (36-41) av høsten. Vi viser to episoder av hver serie per visning, i denne rekkefølgen:<br /><br />Photon (uke 1-3)<br />Shamanic Princess (uke 4-6)<br />Hyper Police<br />Boogiepop Phantom<br /><br />Og siden alge er paranoid kan vi nevne at det blir 19.30 i R5. Alle visninger er i R5 hvis det ikke gis eksplisitt beskjed om noe annet.
        `,
        1: "dashiva",
        2: "Aug 30, 2004",
    },
    {
        0: `<h4>Vi fortsetter (igjen?)</h4>Visningen 25. august blir i R8. Perfect Blue i R8, klokken 19.30 på onsdag. Lettskremte anbefales å ta med følge til veien hjem.Neida, vi bare tuller... litt.
        `,
        1: "dashiva",
        2: "Aug 23, 2004",
    },
    {
        0: `<h4>Vi begynner igjen</h4>Høstens første visning er onsdag 18. august, klokken 19.30. Samme sted som forrige semester, auditorium R5 i Realfagsbygget. For de som ikke er lokalkjent er det kart på "Hvem er vi"-siden. Vi viser Jin-Roh, the wolf brigade.
        `,
        1: "dashiva",
        2: "Aug 17, 2004",
    },

    {
        0: `<h4>Programutkast</h4>6 uker (start uke 36)<br />2x HP<br />2x Boogiepop<br />1x Shamanic<br />1x Photon<br />(alternativt 3+3 uker med 2x sham, 2x photon)<br /><br />7 uker (start uke 42)<br />2x HP<br />2x Haibane<br />2x Abeno<br />(3x haibane, 3x abeno) siste gang<br />(4x hp, blood: the last vampire) på halloween :)<br /><br />Uke 34, 35<br />2x film hver gang: GitS, Jin-Roh, Perfect Blue, og Grave of the Fireflies
        `,
        1: "dashiva",
        2: "Jul 17, 2004",
    },
    {
        0: `<h4>Anime Høsten 2004</h4>Vårens visninger er over, og høsten er neste semester ut. Ta i bruk pollen og stem på hva som skal vises, og send gjerne inn egne forslag hvis du føler det mangler noe. 
        `,
        1: "danner",
        2: "May  2, 2004",
    },
    {
        0: `<h4>Påsken 2004</h4>Påsken er på oss som Godzilla på Tokyo, og resultatet blir som vanlig kaos. Visningen mandag 5. april er avlyst pga manglende interesse. Visningen mandag 12. april er flyttet til onsdag 14. april, men ellers samme tid og sted. Altså<br />5/4 - ingen visning<br />12/4 - ingen visning<br />14/4 - visning<br />Og siden det er over midnatt burde alle være villige til å akseptere at dette ikke er en aprilsspøk.
        `,
        1: "dashiva",
        2: "Apr  2, 2004",
    },
    {
        0: `<h4>Tier 2 av Animevisningene</h4>Neste uke (30. februar) viser vi de tre siste episodene av Hellsing. Etter dette vil vi vise resten av Tiny Snow Fairy Sugar, fra der vi slapp i høst. Spørsmålet var hvordan sendeplanen da skulle legges opp, og siden vår diktator ikke vil gjøre seg opp noen formening sier vi bare at skjemaet fra og med Mars blir som følger:<br />Tiny Snow Fairy Sugar x2<br />Kare Kano x2<br />Neon Genesis Evangelion x2 <br /><br />Dette fører til mye sukker etter hverandre, men siden det er sterke meninger ute og går om både Sugar og Evangelion er dette den mest optimale løsningen sånn at folk får komme og eventuellt gå når de vil :)
        `,
        1: "danner",
        2: "Feb 23, 2004",
    },
    {
        0: `<h4>Sikkert Passord?</h4>Passordet kan sikres via noe togu har laget i det siste....
        `,
        1: "danner",
        2: "Feb  8, 2004",
    },
    {
        0: `<h4>Sikkerhet</h4>Det er umulig, men jeg må skrive et testnotat uansett, så hvorfor ikke? Vi må sikre passordet.
        `,
        1: "dashiva",
        2: "Jan 19, 2004",
    },
    {
        0: `<h4>Hvem-er-vi</h4>Denne siden trenger kanskje litt oppdatering, og kartene over innsiden av realfag kan sikkert fikses opp litt. En FAQ-type ting om registrering, visninger, forskjellen på nettsiden og epostlisten... masse sånt.<br /><br />Kanskje bilder og navn på de "ansvarlige" evt. en slik liste for alle sammen.
        `,
        1: "dashiva",
        2: "Jan 19, 2004",
    },
    {
        0: `<h4>Plakater / PR</h4>Fungerer bra i Realfag, IT, Elektro, Sentral. Kanskje finne folk som kan henge opp på de "populære" stedene for andre fakulteter enn IME. Og organisere litt på HIST også.
        `,
        1: "dashiva",
        2: "Jan 19, 2004",
    },
    {
        0: `<h4>Ordne admin-notater</h4>Ordne sidene så adminnotatene faktisk virker.
        `,
        1: "dashiva",
        2: "Jan 19, 2004",
    },
    {
        0: `<h4>Første melding</h4>Dette området skal erstatte huskelapper for ting som må gjøres i forbindelse med visninger og nettsidene.
        `,
        1: "dashiva",
        2: "Jan 19, 2004",
    },
    {
        0: `<h4>Slipp nyhetene fri, det er vår</h4>Lurer på om noen i det hele tatt leser disse... kan i det minste late som.<br />Programmet for våren er nå klart. I kategorien "laaaang serie" gikk Kare Kano av med seieren, fulgt av Neon Genesis Evangelion. Fruits basket tok tredjeplass og er derfor en god kandidat til høsten. Den andre kategorien, "kort serie" ble vunnet av Hellsing med Bastard! på en hederlig andreplass. Disse vil få følge av Tiny Snow Fairy Sugar, siden vi allerede har vist halve.<br />Så det blir noe omtrent som dette:<br />2x NGE<br />2x Kare Kano<br />2x Hellsing, 2x Sugar når Hellsing er slutt<br />Bastard! i påsken (detaljer om påsken kommer senere)<br />Det kan hende vi ikke starter seriene før 26. januar. I såfall viser vi noe annet (en film) på den 19. Det er <b>alltid</b> visning (på mandager).<br />In other news, her er reklamekampanjen vår. Det står fritt til den enkelte å skrive ut kopier og henge de opp der det passer seg.<br />Kare Kano,<br />Hellsing,<br />Neon Genesis Evangelion og <br />Neon Genesis Evangelion<br /><br />Og to litt mer "radikale": Hellsing og Neon Genesis Evangelion
        `,
        1: "dashiva",
        2: "Jan 17, 2004",
    },
    {
        0: `<h4>Kono sekai wa kusatte iru! (v3.0)</h4>Nei, det blir ikke mer Excel Saga. Det er ikke mer Excel Saga, og verden sørger. I følge mine kilder på IRC er jeg imidlertidig den eneste som bryr seg, så jeg skal ikke bruke for mye plass på det. Operasjon Mononoke er notert som en suksess, og vi vil derfor iverksette Operasjon DetKanBareGåEnVei:Oppover om kun kort tid (neste mandag).<br />Avstemningen lider fortsatt av manglende oppslutning. For ordens skyld opplyser vi om at blanke stemmer tolkes som "Jeg ønsket kun det ledelsen vil. De har min fulle støtte uansett hva de velger." Hvis ikke nok avgir mening til at det kan anses som representativt for helheten... <b>(DUN-DUN-DUN)</b><br />"Når du stemmer på hjemmesitterpartiet, stemmer du på Macross... og Kocho"
        `,
        1: "dashiva",
        2: "Jan 13, 2004",
    },
    {
        0: `<h4>Kore de owatta</h4>Da var det altså slutt på enda et semester med anime. På tross av skepsis fra enkelte, anser vi avslutningen som en stor suksess. (Ingen forlot i det minste salen i avsky. Men det samme gjelder jo for Kocho...)Forøvrig er det veldig greit om folk deltar på avstemningen. Jo fortere vi finner ut hvilken dag som passer best, jo fortere kan vi reservere vårt elskede auditorium 5 for våren. Og frigjøre plassen til valg av serier. Ellers er det ikke mye å si foreløpig enn å ønske alle god eksamenstid, god jul, og godt nyttår.
        `,
        1: "dashiva",
        2: "Nov 24, 2003",
    },
    {
        0: `<h4>Jeg har aldri likt tittelfelt</h4>Da var Tylor borte for evig og alltid, eventuelt til noen skaffer OAVen. Eller er det en OVA? Jeg husker aldri sånt. Uansett fortsetter vi visningene to mandager til. Neste uke avslutter vi Now and Then, sammen med en dose Excel Saga, og siste gang blir Excel-maraton for å komme i mål før eksamensperioden.<br />Et par andre småting... hvis dere har ideer til anime vi kan vise til våren (som finnes tilgjengelig på DVD) er det bare å sende inn forslag. Hvis forslagene kommer tidsnok er det tid til demokratisk prosess og avstemninger og alt det der. Hvis ikke må noen ta en lederavgjørelse, og da ender det lett med Macross. <i>*dukke unna slag fra danner*</i> Bruk gjerne epostlisten til å sende forslagene, slik at de med protester kan få sagt sitt før vi tar en avgjørelse.<br />Det vil komme en ny avstemning om hvilken ukedag vi skal ha visningene på til våren. Den foreløpige idéen er at folk krysser av når de absolutt ikke kan, og så velger vi dagen med færrest kryss. Stay tuned.<br />Sist, men ikke minst: feedback. Vi kan ikke akkurat si at alt har gått knirkefritt dette semesteret heller, men det er en betraktelig forbedring over forrige vår. Meninger, ris & ros, andre kommentarer er velkomne. Hvis dere ikke ønsker å ytre dere offentlig på epostlisten, kan dere sende konfidensielle beskjeder til anime-ntnu-admin@list.stud.ntnu.no<br />Det var vel alt for denne gang.
        `,
        1: "dashiva",
        2: "Nov 11, 2003",
    },
    {
        0: `<h4>Second Impact</h4>Da var første halvdel av visningene over. Banner of the Stars er slutt, og Sugar tar en pause frem til våren. Som erstatning kommer Excel Saga, Photon, og en serie til. Muligens 3x3 Eyes, muligens Natt & Hatt (aka Now and Then, Here and There.)
        `,
        1: "dashiva",
        2: "Oct 11, 2003",
    },
    {
        0: `<h4>Ting Tar Tid</h4>Avstemningen har nå oppnådd en total av 14 stemmer, langt forbi alt som har vært av tidligere saker. Kan det være engasjement, eller er det valgfusk? Kanskje noen stemmer her i tro om at det er til kommunevalget. Her er i det minste plakatene våre med de to duellantene.<br />R-noe Kenshin<br />Tiny Snow Fairy Sugar<br /><br />(R-noe fordi vi vil unngå stridigheter om romaniseringssystemer så tidlig i semesteret.)
        `,
        1: "dashiva",
        2: "Aug 29, 2003",
    },
    {
        0: `<h4>Systemet vs Anime, 1-0</h4>Ja, avstemningen var ganske klart i mandags favør, så auditorium ble bestilt. Dessverre var det kommunikasjonsproblemer, og de som har ansvar for å slippe folk inn i auditoriene de har reservert fikk aldri vite at vi har reservert det. Derfor blir det ingen visning idag.Det blir visning neste mandag, i auditorium R5, klokka 19.30 til 22.30.Programmet er Tylor og Banner, pluss en serie til som avgjøres ved avstemning. <b>Stem!</b>
        `,
        1: "dashiva",
        2: "Aug 25, 2003",
    },
    {
        0: `<h4>Anime neste uke, kanskje?</h4>Ingen animevisning fredag den 22. i alle fall. Det var rett og slett umulig å få tak i rom tidsnok. <br /><br />Avstemningen om ukedag det blir visning på endte VELDIG jevnt, med fem stemmer per dag. Slikt blir man ikke videre klok av. <br /><br />Av den grunn starter vi nå en ny poll om denne ukedagen. Valgene er nå redusert en anelse. Da den kjæreste riva (og eier) ikke kunne på freadger, og magnus ikke kunne på diverse andre dager, står nå valget mellom mandager kl 1930, ettermiddag på onsdager eller begge deler. Eller ingen av delene. Stem i vei, så skal vi kanskje endelig få avgjort dette. <br /><br />Hvis valget ender på mandager blir det muligens ikke førstkommende mandag (25. august), men dette avhenger om det er mulig å reservere rom på kort varsel neste uke. <br /><br />Forøvrig, kom med nominasjoner til hva vi skal vise. I tillegg til de to vi har begynt på (Tylor og Excel Saga) er Rurouni Kenshin, Tiny Snow Fairy Sugar (og samtlige andre søte serier!) nominert. Hvis det er noen serier du virkelig ikke likte, eller noen serier som du vil at vi skal vise, send inn nominasjoner på irc eller maillingliste! <br /><br />Det var vel stort sett det. *pusteut*
        `,
        1: "danner",
        2: "Aug 22, 2003",
    },
    {
        0: `<h4>Oppstart</h4>Sommerferien er over, og vi starter visningene igjen. <b>Mest sannsynlig</b> blir første visning fredag 22/8. Dette er ikke den fastsatte visningsdagen, vi vet at det er mange som ikke ønsker fredag, men inntil vi får avklart om det finnes en bedre dag, beholder vi fredagen. Hvilket rom vil bli annonsert så snart vi vet det.
        `,
        1: "dashiva",
        2: "Aug 15, 2003",
    },
    {
        0: `<h4>The End</h4>Da var alt over dette semesteret. Vi kommer tilbake til høsten med (delvis) nytt program og forhåpentligvis litt flere deltagere. Yay.
        `,
        1: "dashiva",
        2: "May 10, 2003",
    },
    {
        0: `<h4>Siste visning</h4>Fredag 9. mai blir siste visning før sommeren. Fordi noen okkuperer hele realfagsbygget denne uka, må vi imidlertid flytte oss. Visningen blir i <b>Kjel 1 klokken 17.00</b>, slik at vi har tid til å vente litt hvis folk ikke finner fram i tide. Ingen grunn til ikke å komme.<br /><br />Altså, siste visning, Kjel 1, 17.00.
        `,
        1: "dashiva",
        2: "May  8, 2003",
    },
    {
        0: `<h4>Visning 02/05</h4>Ja, det blir altså visning i dag og. Hurra. Nest siste vanlige visning før sommeren, så ikke sitt hjemme og tenk på karakterer, kom til R8 i stedet.
        `,
        1: "dashiva",
        2: "May  2, 2003",
    },
    {
        0: `<h4>Påsken som var</h4>Det ble vist Bubblegum Crisis 1-4 på 11. mars, men grunnet manglende oppmøte, ble det ingenting den 18. BGC 5-8 vil derfor bli vist ved en senere anledning. Denne uken (25. mars) vil vi fortsette med det vanlige programmet igjen.
        `,
        1: "dashiva",
        2: "Apr 21, 2003",
    },
    {
        0: `<h4>Påsketiden</h4>Da den eneste tilgjengelige boksen som kan spille det vi viser ikke er tilgjengelig på tirsdag og onsdag, faller valget likevel på fredag. For de som blir i Trondheim i påsken er det muligheter for enda en visning neste fredag, men denne vil ikke være med de seriene vi viser til vanlig.<br /><br />Påskeprogrammet er fastslått. På fredag 10/4 blir det Bubblegum Crisis ep 1-4, og fredag 17/4 ep 5-8. Det er ikke Macross, så forhåpentligvis er alle fornøyde. Og hvis det passer seg tar jeg med Demon Fighter Kocho på 17/4 som en liten bonus. Visningstiden blir fra 18 til ca 20 siden vi viser mindre enn vanlig.
        `,
        1: "dashiva",
        2: "Apr 10, 2003",
    },
    {
        0: `<h4>Neste uke</h4>Dashiva har lagt ut en eliminerings-type-poll oppe om når vi skal vise anime neste uke. Stem i vei :)<br /><br />Fredag er fjernet fra alternativene. Det er forøvrig hjelpsomt at mer enn 6 stemmer...
        `,
        1: "dashiva",
        2: "Apr  5, 2003",
    },
    {
        0: `<h4>Planer fremover</h4>Det er bekreftet to stykker som har tenkt å komme på animevisning på fredag. Det er litt få egentlig, men hvis flere melder seg før i morgen kveld, så gjør vi noe ut av det - dog kanskje ikke nødvendigvis seriene vi har begynt på. <br />Mer av interesse er at neste uke igjen er "den store hjemreisedagen" (tm) før påske. Det betyr at vi med fordel kunne hatt visning tidligere i uken. Så, i mandat av at dashiva fremdeles er i japan (eller i alle fall på flyet hjem) syns jeg at vi bør flytte denne frem til mandag, tirsdag eller onsdag i neste uke. Synspunkter på dette kan gjerne diskuteres i mailingliste eller irc :)<br /><br /> Hmm.. dessuten glemte jeg helt å lage noen aprilsnarr. Skam på meg. <br /><br /><b>Update: Det var ikke flere intresserte. Det blir derfor ikke noe animeaften fredag 4. april. Mer info om når det blir i neste uke kommer. </b>
        `,
        1: "danner",
        2: "Apr  3, 2003",
    },
    {
        0: `<h4>Anime neste uke...?</h4>Det later til at neste uke (4. april) passer særdeles <br />dårlig da 97% av menneskene som vanligvis er tenkelige <br />til å dra på animevisning faktisk skal på japanfest - som <br />er på akkurat det samme tidspunktet. Er det noen som <br />kommer neste uke i det hele tatt? Jeg <br />er jammen ikke sikker på om jeg kommer selv :)<br /><br />Poll om temaet er oppe, blir det mer enn to-tre stykker <br />som faktisk har tenkt å møte opp blir det animeaften. Ellers<br />tar vi en pause til den 11. april. 
        `,
        1: "danner",
        2: "Mar 28, 2003",
    },
    {
        0: `<h4>Animevisning på fredag</h4>På fredag kl 18 er vi i gang igjen, og viser episode 5+6 av crest of the stars, excel saga og tylor. Denne gangen loves det høyt og hellig at vi skal være i R8. Æresord. 
        `,
        1: "danner",
        2: "Mar 27, 2003",
    },
    {
        0: `<h4>Animevisning</h4>For de som måtte lure, det blir selvsagt animevisning fredag den 21. mars, sal R8 kl 18. Planen er å fortsette på seriene vi begynte på sist. Vel møtt! :)
        `,
        1: "danner",
        2: "Mar 20, 2003",
    },
    {
        0: `<h4>Fredag 14/03</h4>Da er fredagen mer eller mindre i boks. Vi kommer til å bruke auditorium R8, vegg i vegg med R9, siden verken R1, R2 eller R5 var ledige. Både Crest of the Stars og Excel Saga er anskaffet, og fra den labre deltagelsen på avstemningen, ser det ut som om det blir Irresponsible Mathematician Taylor som siste serie. De som ikke ønsker dette har imidlertid fortsatt muligheten til å forandre det ved å få de resterende 14 medlemmene til å stemme.<br /><br />Altså: R8 - 1800 - 14/03<br />Ta gjerne med venner og bekjente, neste gang kan det være for sent.
        `,
        1: "dashiva",
        2: "Mar 12, 2003",
    },
    {
        0: `<h4>Visning på fredag</h4>For de som ikke fikk det med seg - jo - det er selvsagt visning på fredag kl 18. Men, auditorium R9 har ikke lyd, og kommer nok ikke til å få det heller. Det kommer en mail om hvor vi forflytter oss sånn ca på torsdag. I mellomtiden er det bare å gå inn og stemme på hva som skal vises.
        `,
        1: "danner",
        2: "Mar 10, 2003",
    },
    {
        0: `<h4>Fremtiden</h4>Vel, etter at php spiste formateringen av det andre forsøket på å skrive en nyhet, prøver jeg igjen. Kun referat denne gangen, siden jeg begynner å bli lei av å høre på meg selv snakke.<br /><br />* Uansett hva vi viser, vil det være ulovlig etter åndsverksloven eller en relatert lov, siden vi ikke har mulighet til å skaffe tillatelse.<br />* Det gjøres hele tiden med alle typer film, ikke bare anime, og er ingenting i forhold til det som skjer på NTNU-nettet.<br />* De som har rettighetene til det vi viser, har ingen interesser i Norge. Unntaket er Ghibli, som visstnok er representert ved Buena Vista.<br /><br />Altså, det er egentlig ingen fare for problemer. Det er imidlertid en etisk problemstilling, så derfor skal dere få lov til å stemme over det. Hvis vi faktisk skal få vist en hel sesong av hva-det-nå-enn-er-vi-skal-vise før eksamen, må vi komme igang fort, så kast dere på stemmeknappen før det er for sent.
        `,
        1: "dashiva",
        2: "Mar  5, 2003",
    },
    {
        0: `<h4>Spring 2017</h4>Anime NTNU will be starting up again from next Wednesday, January the 18th. We will be starting with the movie Redline, and then vote on the blackboard afterwards for the rest of the program. <br /><br />The place will be KJL 2 and the time will be 20:00. <br />- This is due to someone else having booked the room (And KJL 1 and 5) in advance, and the program may be shifted to 20:00 unless we can negotiate with the ones booking the room.
        `,
        1: "alfborge",
        2: "Mar  3, 2003",
    },
];

export default newsList;
export { newsAuthor, newsContent, newsDate };
