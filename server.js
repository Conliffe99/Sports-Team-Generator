// Require our dependencies
const express = require('express');
const morgan = require('morgan'); 
const methodOverride = require('method-override');
const app = express();
require('dotenv').config();


// Middleware
app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({extended: true})); // parse urlencoded request bodies
app.use(express.static(__dirname + '/public'));
app.use(express.json());
const searchResultState = {};

// Routes
app.get('/sportsBracket', (req, res) => {
  res.render('sportsBracket/index.ejs');
});

app.post('/sportsBracket', (req, res) => {
  const word = req.body.word;
  res.render('sportsBracket/index.ejs', {word});
});

// Listener
app.listen(process.env.PORT, () => {
  console.log(`Express is listening for requests from the browser on port: ${process.env.PORT}`);
});

// his code sets up a simple Express app with two routes. The first route is a GET request to the /sportsBracket URL, which renders the index.ejs view file. The second route is a POST request to the same URL, which retrieves the value of the submitted word field, stores it in a variable, and then renders the index.ejs view file with the word variable passed in as a parameter.The index.ejs file can contain a form that allows users to enter a word and submit it to the server. When the form is submitted, the server retrieves the submitted word, stores it in a variable, and then re-renders the index.ejs file with the word displayed in the box.