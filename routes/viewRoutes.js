require("dotenv").config();
const express = require("express");
const Router = express.Router();

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

module.exports = Router;