require("dotenv").config();
const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const viewRouter = require("./routes/viewRoutes");
const dataRouter = require("./routes/dataRoutes");
const authRouter = require("./routes/authRoutes");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

//Loads the handlebars module
const handlebars = require("express-handlebars");

//Starts server
app.listen(port, () => console.log(`App listening to port ${port}`));

// Sets our app to use the handlebars engine
app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
    defaultLayout: "index",
  })
);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// passport.js for auth

app.use(cookieParser());
app.use(
  session({
    secret: "derpy",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true
    },
  })
);

app.use(passport.initialize());
app.use(passport.session()); // Required for persistent login sessions (optional, but recommended)

// passport.use(
//   new LocalStrategy({
//       usernameField: "email",
//       passwordField: "password",
//     },
//     function (email, password, done) {
//       User.findOne({
//         email: email
//       }).then(function (user) {
//         if (!user || !user.authenticate(password)) {
//           return done(null, false, {
//             message: "Incorrect email or password."
//           });
//         }

//         done(null, user);
//       });
//     }
//   )
// );

app.use("/", viewRouter);
app.use("/song", dataRouter);
app.use("/signup", authRouter);