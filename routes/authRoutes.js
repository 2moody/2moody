const express = require('express');
const Router = express.Router();
const passport = require('passport');

Router.post("/", (req, res, next) => {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return res.status(400).json({
        errors: err
      });
    }
    if (!user) {
      return res.status(400).json({
        errors: "No user found"
      });
    }
    req.logIn(user, function (err) {
      if (err) {
        return res.status(400).json({
          errors: err
        });
      }
      return res.status(200).json({
        success: `logged in ${user.id}`
      });
    });
  })(req, res, next);
});

module.exports = Router;