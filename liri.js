// OMDB 
// make it work then move down to the requirements 
// var axios = require ("axios");



// var user =  process.argv;

// var movieName = "";

// for (var i = 2; i < user.length; i++) {
//     movieName += " " + user[i];
 
// }


// movieName = movieName.trim();
// console.log(movieName)

// var queryName = movieName.replace(/ /g,"+");

// var queryUrl = "http://www.omdbapi.com/?t=" + queryName + "&y=&plot=short&apikey=trilogy";

// console.log(queryUrl);

// axios
// .get(queryUrl)

// .then(

//     function(response){
// //    * Title of the movie.
//         console.log("Movie Title: " + response.data.Title);
// //    * Year the movie came out.
//         console.log("Year the movie came out: " +response.data.Year);
// //    * IMDB Rating of the movie.
//         console.log("IMDB Rating: " + response.data.imdbRating);
// //    * Rotten Tomatoes Rating of the movie.
//         console.log("Rotten Tomatoes Rating: " + response.data.Ratings[2].Value);
// //    * Country where the movie was produced.
//         console.log("The country the movie was produced in: " + response.data.Country);
// //    * Language of the movie.
//         console.log("Language of the movie: " +response.data.Language);
// //    * Plot of the movie.
//         console.log("Movie Plot: " + response.data.Plot);
// //    * Actors in the movie.
//         console.log("Actors/Actresses: " + response.data.Actors);
//     }
// )


// the BandsInTown api

var axios = require ("axios");
var moment = require ("moment");
moment().format();

var user =  process.argv;

var bandName = "";

for (var i = 2; i < user.length; i++) {
    bandName += " " + user[i];
 
}


bandName = bandName.trim();
console.log(bandName)

var querySwitch = bandName.replace(/ /g,"+");
var queryUrl = "https://rest.bandsintown.com/artists/" + querySwitch + "/events?app_id=codingbootcamp"



axios 
    .get(queryUrl)
    .then (function (bandResponse){
        
        // console.log(bandResponse.data[1]);
        var venueInfo = bandResponse.data[1];
        console.log("Name of the venue " + venueInfo.venue.name);
        console.log("Venue located at " + venueInfo.venue.city + "," + venueInfo.venue.region);
        console.log("Event date " + moment(venueInfo.datetime).format("MM/DD/YYYY"));

        
        
        




        // name of the venue
        // venue location 
        // date of the event (use moment to format this as "MM/DD/YYYY");
    })
