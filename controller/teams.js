const express = require('express');
const router = express.Router();
const Team = require('../model/team');

// GET - Show landing page
router.get('/', async (req, res) => {
  try {
    const teams = await Team.find();
    res.render('landing', { teams });
  } catch (err) {
    console.log(err);
    res.send('Error retrieving teams from database');
  }
});

// GET - Show form to create or edit team
router.get('/:id/edit', async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    res.render('teams/edit', { team });
  } catch (err) {
    console.log(err);
    res.send('Error retrieving team from database');
  }
});

// POST - Create new team
router.post('/:id', async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    team.name = req.body.name;
    await team.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.send('Error saving team to database');
  }
});

// PUT - Update team
router.put('/:id', async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    team.name = req.body.name;
    await team.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.send('Error updating team in database');
  }
});

// DELETE - Delete team
router.delete('/:id', async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.send('Error deleting team from database');
  }
});

module.exports = router;










// // CREATE - Add new team
// router.post('/', async (req, res) => {
//   const team = new Team(req.body.team);
//   try {
//     await team.save();
//     res.redirect('/teams');
//   } catch (err) {
//     console.log(err);
//     res.send('Error saving team to database');
//   }
// });

// // NEW - Show form to create new team
// router.get('/new', (req, res) => {
//   res.render('teams/new');
// });

// // EDIT - Show form to edit team
// router.get('/:id/edit', async (req, res) => {
//   try {
//     const team = await Team.findById(req.params.id);
//     res.render('teams/edit', { team });
//   } catch (err) {
//     console.log(err);
//     res.send('Error retrieving team from database');
//   }
// });

// // UPDATE - Update team
// router.put('/:id', async (req, res) => {
//   try {
//     await Team.findByIdAndUpdate(req.params.id, req.body.team);
//     res.redirect('/teams');
//   } catch (err) {
//     console.log(err);
//     res.send('Error updating team in database');
//   }
// });

// // DELETE - Delete team
// router.delete('/:id', async (req, res) => {
//   try {
//     await Team.findByIdAndDelete(req.params.id);
//     res.redirect('/teams');
//   } catch (err) {
//     console.log(err);
//     res.send('Error deleting team from database');
//   }
// });

// module.exports = router;
