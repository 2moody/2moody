require("dotenv").config();
const axios = require("axios");
const express = require("express");
const server = express();

OMDB_APIKEY = process.env.OMDB_APIKEY;

server.listen(process.env.PORT || 3000, () =>
  console.log("Server is running...")
);

server.get("/movies/:searchQuery", function (req, res) {
  let queryParam = req.params.searchQuery;
  const url = `http://omdbapi.com/?apikey=${OMDB_APIKEY}&s=${queryParam}`;
  axios.get(url).then(function (response) {
    res.json(response.data);
  });
});
