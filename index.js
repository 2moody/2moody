const express = require('express');
const app = express();
const port = 3000;

//Loads the handlebars module
const handlebars = require('express-handlebars');

//Sets our app to use the handlebars engine
// app.set('view engine', 'handlebars');
//instead of app.set('view engine', 'handlebars'); 
app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs',
  defaultLayout: 'index',
  //new configuration parameter
  // partialsDir: __dirname + '/views/partials/'
}));

//
app.use(express.static(__dirname + '/public'))

app.get('/home', (req, res) => {
  res.render('login', {
    layout: 'index',
  });
});

app.get('/register', (req, res) => {
  res.render('register', {
    layout: 'index',
  });
});

app.get('/app', (req, res) => {
  res.render('app', {
    layout: 'index',
  })
})

app.listen(port, () => console.log(`App listening to port ${port}`));