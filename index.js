require("dotenv").config();
const axios = require("axios");
const express = require("express");
const Spotify = require("node-spotify-api");
const app = express();

const port = process.env.PORT || 3000;

//Loads the handlebars module
const handlebars = require("express-handlebars");

//Declare variables for sensitive data
SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

//Start server
app.listen(port, () => console.log(`App listening to port ${port}`));

//Sets our app to use the handlebars engine
// app.set('view engine', 'handlebars');
//instead of app.set('view engine', 'handlebars');
app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
    defaultLayout: "index",
    //new configuration parameter
    // partialsDir: __dirname + '/views/partials/'
  })
);

// 2moody/public
// 2moody/public/imgs/filename
app.use(express.static(__dirname + "/public"));

app.get("/login", (req, res) => {
  res.render("login", {
    layout: "index",
  });
});

app.get("/register", (req, res) => {
  res.render("register", {
    layout: "index",
  });
});

app.get("/app", (req, res) => {
  res.render("app", {
    layout: "index",
  });
});

let spotify = new Spotify({
  id: SPOTIFY_CLIENT_ID,
  secret: SPOTIFY_CLIENT_SECRET,
});
// don't hard code this in final project
let artistId = "6FBDaR13swtiWwGhX1WQsP";

//Data routes - return data
//q: keyword type: playlist
app.get("/song/:mood", function (req, res) {
  spotify
    .request(`https://api.spotify.com/v1/artists/${artistId}/albums`)
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      console.error("Error occurred: " + err);
    });
});
