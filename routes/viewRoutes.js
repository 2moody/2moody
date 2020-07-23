require("dotenv").config();
const express = require("express");
const Router = express.Router();
const Spotify = require("node-spotify-api");
// const app = express(); *** got stomped by ROUTER WHY?

//Declare variables for sensitive data
SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

// what is difference between
// const app = express()
// vs
// const Router = express.Router

//View routes
Router.get("/", (req, res) => {
  res.redirect("/login");
});

Router.get("/login", (req, res) => {
  res.render("login", {
    layout: "index",
  });
});

Router.get("/register", (req, res) => {
  res.render("register", {
    layout: "index",
  });
});

Router.get("/app", (req, res) => {
  res.render("app", {
    layout: "index",
  });
});

let spotify = new Spotify({
  id: SPOTIFY_CLIENT_ID,
  secret: SPOTIFY_CLIENT_SECRET,
});

//Data routes
//q: keyword type: playlist
Router.get("/song/:mood", function (req, res) {
  let moodKeyword = req.params.mood;
  console.log("derp" + moodKeyword);
  spotify
    .request(`https://api.spotify.com/v1/search?q=${moodKeyword}&type=playlist`)
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      console.error("Error occurred: " + err);
    });
});

module.exports = Router;
