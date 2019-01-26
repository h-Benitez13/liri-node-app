// dotenv so that my precious keys dont go up into github
require('dotenv').config();

// =====================================================
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");
moment().format();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);


var action = process.argv[2];
var input = process.argv.slice(3).join(" ");

    switch (input, action) {
        case "movie-this":
            if (input !== "") {
                movieTime(input);
            }
            else {
                input = "Mr. Nobody"
                movieTime(input);
            }
            break;
        case "concert-this":
            if (input !== "") {
                band();
            }
            else {
                input = "Chainsmokers"
                band();
            }
            break;
        case "spotify-this-song":
            if (input !== "") {
                spofityPlay();
            } else {
                input = "The Sign"
                spofityPlay();
            }
            break;
        case "do-what-it-says":
            doWhat();
            break;


    }


// spotify
// make it work 
function spofityPlay() {
    spotify
        .search({ type: 'track', query: "\" " + input + "\" " })
        .then(function (data) {
            console.log(
                "\n ========== Spotify Search ==========\n"
            )

            // console.log(data);
            // The song's name
            // A preview link of the song from Spotify
            // The album that the song is from
            //Artist(s)
            // console.log(data.tracks.items[1])
            var song = data.tracks.items[1];
            console.log("Song Search: " + song.album.name);
            console.log("Want a quick listen, click here: " + song.external_urls.spotify)
            console.log("The Song is in Album: " + song.album.name);
            console.log("Artist(s): " + song.artists[0].name + "\n");

            // ARTISTS VS ALBUM
            // ALBUM: given to us as an object allows us to call on it normally
            // ARISTS: looks like an object but its really an array with an object
            // nested inside (sneaky bitch.)
            // for the artist name you have to call the array FIRST then the object

        })
        .catch(function (err) {
            console.log('Error occurred: '+ err);
            

        });


}


// OMDB 
// make it work then move down to the requirements 
function movieTime() {


    var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";



    axios
        .get(queryUrl)

        .then(

            function (response) {
                var movieD = response.data;
                // console.log(response)
                console.log(
                    "\n ========== Movie Search ==========\n"
                )

                //    * Title of the movie.
                console.log("Movie Title: " + movieD.Title
                    //    * Year the movie came out.
                    + "\nYear the movie came out: " + movieD.Year
                    //    * IMDB Rating of the movie.
                    + "\nIMDB Rating: " + movieD.imdbRating
                    //    * Rotten Tomatoes Rating of the movie.
                    + "\nRotten Tomatoes Rating: " + movieD.Ratings[2].Value
                    //    * Country where the movie was produced.
                    + "\nThe country the movie was produced in: " + movieD.Country
                    //    * Language of the movie.
                    + "\nLanguage of the movie: " + movieD.Language
                    //    * Plot of the movie.
                    + "\nMovie Plot: " + movieD.Plot
                    //    * Actors in the movie.
                    + "\nActors/Actresses: " + movieD.Actors + "\n");
            }
        )
}

// =================================================================

// the BandsInTown api
function band() {

    var queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp"



    axios
        .get(queryUrl)
        .then(function (bandResponse) {
            console.log(
                "\n ========== Band Search ==========\n"
            )

            // console.log(bandResponse.data);
            var venueInfo = bandResponse.data[1];
            console.log("Name of the venue " + venueInfo.venue.name);
            console.log("Venue located at " + venueInfo.venue.city + "," + venueInfo.venue.region);
            console.log("Event date " + moment(venueInfo.datetime).format("MM/DD/YYYY") + "\n");
            // name of the venue
            // venue location 
            // date of the event (use moment to format this as "MM/DD/YYYY");
        }
        );
}

function doWhat() {
    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(" yo my man...wasss good " + error);
        }
        console.log(
            "\n ========== SURRRRPRISE =========="
        )
        console.log("\nYou dont even know what's about to go down");


        var dataArr = data.split(",");
        action = dataArr[0];
        input = dataArr[1];
        spofityPlay();
    });
}
// // ===============================================
