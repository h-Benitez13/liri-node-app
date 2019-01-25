// dotenv so that my precious keys dont go up into github
require('dotenv').config();

// =====================================================
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");
moment().format();

var keys = require("keys");
var spotify = new spotify(keys.spotify);


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
        band();
        break;
    case "do-what-it-says":
        doWhat();
        break;
}

// OMDB 
// make it work then move down to the requirements 
function movieTime() {


    var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

    

    axios
        .get(queryUrl)

        .then(

            function (response) {
                var movieD =response.data;
                
                //    * Title of the movie.
                console.log("Movie Title: " + movieD.Title 
                //    * Year the movie came out.
                          +  "\nYear the movie came out: " + movieD.Year
                //    * IMDB Rating of the movie.
                          +  "\nIMDB Rating: " + movieD.imdbRating
                //    * Rotten Tomatoes Rating of the movie.
                          +  "\nRotten Tomatoes Rating: " + movieD.Ratings[2].Value
                //    * Country where the movie was produced.
                          +  "\nThe country the movie was produced in: " + movieD.Country
                //    * Language of the movie.
                          +  "\nLanguage of the movie: " + movieD.Language
                //    * Plot of the movie.
                          +  "\nMovie Plot: " + movieD.Plot
                //    * Actors in the movie.
                          +  "\nActors/Actresses: " + movieD.Actors);
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

            // console.log(bandResponse.data[1]);
            var venueInfo = bandResponse.data[1];
            console.log("Name of the venue " + venueInfo.venue.name);
            console.log("Venue located at " + venueInfo.venue.city + "," + venueInfo.venue.region);
            console.log("Event date " + moment(venueInfo.datetime).format("MM/DD/YYYY"));
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

        // var dataArr = data.split(",");
       console.log(data);
       var userAction = data[1];

        if (userAction === "movie-this") {
            movieTime(userInput);
        }
    });
}
// // ===============================================
