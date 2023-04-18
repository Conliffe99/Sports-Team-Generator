const express = require('express');
const router = express.Router();
const Team = require('../models/team');

// SHOW - Show team info
router.get('/:id', async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    res.render('teams/show', { team });
  } catch (err) {
    console.log(err);
    res.send('Error retrieving team from database');
  }
});

module.exports = router;

