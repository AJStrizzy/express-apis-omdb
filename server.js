require('dotenv').config();
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const movieRouter = require('./controller/movieController')
const axios = require('axios');
const db = require('./models');
const fave = require('./models/fave')

// Sets EJS as the view engine
app.set('view engine', 'ejs');
// Specifies the location of the static assets folder
app.use(express.static('static'));
// Sets up body-parser for parsing form data
app.use(express.urlencoded({ extended: false }));
// Enables EJS Layouts middleware
app.use(ejsLayouts);

// Adds some logging to each request
app.use(require('morgan')('dev'));


app.use('/movies', movieRouter)


// Routes
app.get('/', function(req, res) {
  res.send('Hello, backend!');
});


// The app.listen function returns a server handle
var server = app.listen(process.env.PORT || 3000 );

// We can export this server to other servers like this
module.exports = server;
