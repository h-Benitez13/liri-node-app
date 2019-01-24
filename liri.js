// dotenv so that my precious keys dont go up into github
require('dotenv').config();

// =====================================================
var axios = require("axios");
var moment = require("moment");
moment().format();

var action = process.argv[2];
var input = process.argv.slice(3).join(" ");

switch (input, action) {
    case "movie-this":
        if(input !== "") {
            movieTime(input);
        } else {
            input = "Mr. Nobody"
            movieTime(input);
        }
    
        movieTime(input);
        break;
    case "concert-this":
        band();
        break;
}

// OMDB 
// make it work then move down to the requirements 
function movieTime() {


    var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

    console.log(queryUrl);

    axios
        .get(queryUrl)

        .then(

            function (response) {
                //    * Title of the movie.
                console.log("Movie Title: " + response.data.Title);
                //    * Year the movie came out.
                console.log("Year the movie came out: " + response.data.Year);
                //    * IMDB Rating of the movie.
                console.log("IMDB Rating: " + response.data.imdbRating);
                //    * Rotten Tomatoes Rating of the movie.
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[2].Value);
                //    * Country where the movie was produced.
                console.log("The country the movie was produced in: " + response.data.Country);
                //    * Language of the movie.
                console.log("Language of the movie: " + response.data.Language);
                //    * Plot of the movie.
                console.log("Movie Plot: " + response.data.Plot);
                //    * Actors in the movie.
                console.log("Actors/Actresses: " + response.data.Actors);
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
// // ===============================================
