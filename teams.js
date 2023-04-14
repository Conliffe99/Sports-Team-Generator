const express = require('express');
const router = express.Router();
const Team = require('../models/team');

// Show the "New Team" form
router.get('/new', (req, res) => {
  const slot = req.query.slot;
  res.render('teams/new', { slot });
});

// Create a new team
router.post('/', async (req, res) => {
  const team = new Team({
    name: req.body.name
  });
  await team.save();
  res.redirect('/teams');
});

module.exports = router;