require("dotenv").config();
const express = require("express");
const app = express();
const Router = require("./routes/viewRoutes");
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
app.use("/", Router);