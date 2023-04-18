const express = require('express');
const app = express();

// define a route to display the bracket
app.get('/bracket', (req, res) => {
  // render the bracket view with no team names
  res.render('bracket', { team1: '', team2: '', team3: '', team4: '', team5: '', team6: '', team7: '', team8: '', team9: '', team10: '', team11: '', team12: '', team13: '', team14: '', team15: '', team16: '' });
});

// define a route to handle form submissions
app.post('/submit', (req, res) => {
  // get the team names from the form data
  const team1 = req.body.team1;
  const team2 = req.body.team2;
  const team3 = req.body.team3;
  const team4 = req.body.team4;
  const team5 = req.body.team5;
  const team6 = req.body.team6;
  const team7 = req.body.team7;
  const team8 = req.body.team8;
  const team9 = req.body.team9;
  const team10 = req.body.team10;
  const team11 = req.body.team11;
  const team12 = req.body.team12;
  const team13 = req.body.team13;
  const team14 = req.body.team14;
  const team15 = req.body.team15;
  const team16 = req.body.team16;
  
  // render the bracket view with the team names
  res.render('bracket', { team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12, team13, team14, team15, team16 });
});

// define a route to handle updates to the bracket
app.put('/update', (req, res) => {
  // update the team names in the database
  // ...
  // send a response indicating success or failure
  res.send('Success!');
});

// define a route to handle deletions from the bracket
app.delete('/delete', (req, res) => {
  // delete the team names from the database
  // ...
  // send a response indicating success or failure
  res.send('Success!');
});
