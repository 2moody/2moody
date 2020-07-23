const express = require('express');
const Router = express.Router();
const Spotify = require("node-spotify-api");
const db = require('../models/dbConnection');

//Data routes
//q: keyword type: playlist
Router.get("/:mood", function (req, res) {
  //Declare variables for sensitive data
  const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
  const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

  let spotify = new Spotify({
    id: SPOTIFY_CLIENT_ID,
    secret: SPOTIFY_CLIENT_SECRET,
  });

  let moodKeyword = req.params.mood
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