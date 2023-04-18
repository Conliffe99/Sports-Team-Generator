const express = require('express');
const router = express.Router();

// Importing our model(s) goes here if needed

// Importing middleware(s) goes here if needed

router.get('/', (req, res) => {
  res.render('sportsBracket/index.ejs');
});

router.post('/', (req, res) => {
  const word = req.body.word;
  res.render('sportsBracket/index.ejs', {word});
});

module.exports = router;
