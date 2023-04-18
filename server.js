const express = require('express');
const morgan = require('morgan'); 
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const teamsController = require('./controllers/teams');

require('dotenv').config();

// Connect to database
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  console.log('Connected to database');
}).catch((err) => {
  console.log(`Error connecting to database: ${err.message}`);
});

// Initialize the express app
const app = express();

// Middleware
app.use(morgan("tiny")); // Logging
app.use(methodOverride("_method")); // Override for put and delete requests from forms
app.use(express.urlencoded({extended: true})); // Parse urlencoded request bodies
app.use(express.static(__dirname + '/public'));
app.use(express.json());

// Routes
app.use('/teams', teamsController);

// Index route
app.get('/', (req, res) => {
  res.render('index');
});

// Listener
app.listen(process.env.PORT, () => {
  console.log(`Express is listening for requests from the browser on port: ${process.env.PORT}`);
});


// his code sets up a simple Express app with two routes. The first route is a GET request to the /sportsBracket URL, which renders the index.ejs view file. The second route is a POST request to the same URL, which retrieves the value of the submitted word field, stores it in a variable, and then renders the index.ejs view file with the word variable passed in as a parameter.The index.ejs file can contain a form that allows users to enter a word and submit it to the server. When the form is submitted, the server retrieves the submitted word, stores it in a variable, and then re-renders the index.ejs file with the word displayed in the box.