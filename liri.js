require("dotenv").config();

var keys= require("./keys.js");
var spotify = new Spotify(keys.spotify);



// node liri.js concert-this <artist/band name here>
// serach Bands in town artist API and render the foloowing info
// 1. name of the venue
// 2. venue location
// 3. date fo the event (use moment to format this at "MM/DD/YYYY")
console.log ("concert-this");


// node liri.js spotify-this-song '<song name here>' 
// show the following info about the song in terminal/bash window
// 1. Artist(s)
// 2. the Song's name 
// 3. a preview link of the song from spotify
// 4. the album that the song is from
// ** if no song is provided then your program will default "The Sing " by Ace of Base
console.log("spotify-this-song");


// node liri.js movie-this '<movie name here>'
// output the foloowing information to your terminal/bash window:
// 1. title of the movie
// 2. year movie came out 
// 3. IMDB rating of the movie
// 4. rotten tomatoes rating of the movie
// 5. country where the movie was produced
// 6. language of the movie
// 7. plot of the movie
// 8. actors in the movie
// ** if the user doesnt type in a movie" output data for the movie 'Mr. Nobody'
// ***API KEY : trilogy
console.log("movie-this");


// node liri.js do-what-it-says
// using fs node package, liri will take the text inside of random.txt 
// and then us it to callone of the Liri's commands
// it should run "spotify-this-song" for "I want it that way" as follows the text in random.js
// edit random.txt to test out the feature for movie-this and concert-this
console.log("do-what-it-says");