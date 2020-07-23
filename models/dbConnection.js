const mongoose = require("mongoose");

// https://dev.to/tttaaannnggg/some-mongodb--mongoose--nodejs-basics-508a
// Our goal is to create a database, write to it, and read from it, all from our server. Here's a quick roadmap of how we'll do it:

// import mongoose
// connect to our database
// create a schema object using mongoose.Schema() constructor and an object that defines the criteria (keys, datatype, etc) for our data
// create a model by using mongoose.connect(), with the name of our collection, and the schema object we just created
// use the model as a constructor function to generate a mongoDB document object
// the mongoDB document object that we have returned will have a method called save(), which will allow us to save it to the database.
// If we want to find our data afterwards, our model (not the document), has a method called 'find()'. Note that our database methods are asynchronous.
// replace the uri string with your connection string
// *** NEED TO HIDE URI IN .ENV FILE (dont forget) ***
const uri = process.env.MONGO_CONNECTION_URI;

// connects our app to uri above ^, which is our cloud-based mongo DB (atlas)
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB Connected…") // should see this log if successful
  })
  .catch(err => console.log(err))

// we need .connection to apply methods
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;