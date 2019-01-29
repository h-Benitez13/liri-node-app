LIRI- *Language* Interpretation and Recognition Interface 
=================
LIRI is a command line driven solely by ```node.js``` that takes in parameters and gives you back data.

## Motivation![alt text](https://user-images.githubusercontent.com/43594007/51882401-c3255080-234c-11e9-86b6-8927a4b3cfe8.png)
This project was to strengthen my basic knowledge of `node.js`
1. Being able to manipulate data using node
2. Understand the effectiveness of `node.js` in comparison to `AJAX ` calls
3. Become comfortable with executing data on the server side


### Requirements
LIRI retrieves/manipulates data from a few `npm` packages
1. **Node-Spotify-API**
2. **Axios**

	grabbing *(movie data)* **OMDB API**
	grabbing #(band concert data)* **Bands In Town API**  
3. **Moment** -*change date format to MM/DD/YYYY*
4. **DotEnv**  
  Zero-dependency module that load environemtn variables from a .env file into  process.env  
  A simple way to allow you to create secret keys that your applicaiton needs to function and
	keep them from going public
	
	
LIRI in Action ![alt text](https://user-images.githubusercontent.com/43594007/51882593-6fffcd80-234d-11e9-988e-5c4b16e6789e.png)
================

1. ### node liri.js spotify-this-song
----------------
  Default command/input is 
	```
					node liri.js
				```  				
If a user is unsure of what commands to run, the initial command with read and display
a message indicating the possible commands to enter 
*ex: "possible commands : this-is-an-example-command"*
	

*initial command* *spotify-this-song*

  If the user enters ```node liri.js spotify-this-song``` the data will read the default search for **"The Sign" by Ace of Base**

  If the user desires to search a random song, the output will display
	
	-Artist(s)
	-The Song's Name
	-A preview link of the song from Spotify
	-The album that the song is from

				
![Demo](https://user-images.githubusercontent.com/43594007/51878271-12638500-233d-11e9-960a-7a05089bb957.gif)


2. ### node liri.js concert-this
-----------------

If the user returns to the default command; they will stumble upon ```concert-this```
	
When the user inputs this command, the output will display the default search for **Chainsmokers** upcoming
concert
	
If the user desires to search a random artist to go see live, the output will display 

	-Name of the venue
	-Venue location
	-Date of the Event
	--> Moment.js is used here to format the date of even as* MM/DD/YYYY
	
![Demo](https://user-images.githubusercontent.com/43594007/51878446-ac2b3200-233d-11e9-86bd-2abae8c5339a.gif)



3. ### node liri.js movie-this 
----------------
If the user returns to the default command; they will follow next with ```movie-this```

When the user inputs this command, the output will display the default serach for **Mr.Nobody** information

If the user desires to search a random movie for details on cast/crew, production, etc., the output will display

	Title of the movie
	Year of the movie came out
	IMDB Rating of the movie
	Rotten Tomatoes Rating of the movie
	Country where the movie was produced
	Language of the movie
	Plot of the movie
	Actors in the movie
	
![Demo](https://user-images.githubusercontent.com/43594007/51878573-23f95c80-233e-11e9-92f5-7f58f9b684aa.gif)



4. ### node liri.js do-what-it-says / the-roof-the-roof
----------------------------------
If the user returns to the default command; the final commands are ```do-what-it-says``` & ```the-roof-the-roof``

When the user inputs the first command: ```do-what-it-says```, the output will display a succesful retrieval of data
and then read from a local text file with contents of a ```spotify-this-song``` search

When the user inputs the second command: ```the-roof-the-roof```, the output will display

	-the finishing lyrics to a classic hip-hop song
	-thank the user for using LIRI
	-send them on their way with a peaceful BYE BYE
	
![Demo](https://user-images.githubusercontent.com/43594007/51878656-66bb3480-233e-11e9-9cd4-51dbc42bd2c5.gif)

The bugs and improvements
=======================

| Spotify        | Bands In Town           | Do-what-it-says  |
| ------------- |:-------------:| -----:|
| song matches are exact     | touring schedule| one command: spotify-this-song | 


- The spotify api outputs multiple possible answers for one user search
as of now, I hard coded so it would only print one option
- Bands in Town api requires the artist to have a touring schedule
for future improvements, I would hard code if the err message populates to alert the user 
the artist is not touring at the moment
- do-what-it-says command only reads the spotify api,
I was not able to adjust to the other possible commands but will put to do so in the future

![alt text](https://user-images.githubusercontent.com/43594007/51882662-b1907880-234d-11e9-8afd-497f4be42602.png) 
