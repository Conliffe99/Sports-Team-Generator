const express = require('express');
const router = express.Router();
const Team = require('../model/team');

// Index route
router.get('/', async (req, res) => {
  const teams = await Team.find({})
  console.log(teams)
  res.render('index', {teams});
});

//create new team
router.get('/new', async (req, res)=>{
  res.render('new.ejs')
})

// GET - Show landing page
router.get('/:id', async (req, res, next) => {
  try {
    const team = await Team.findById(req.params.id);
    res.render('show', { team });
  } catch (err) {
    console.log(err);
    res.send('Error retrieving teams from database');
    next()
  }
});


// GET - Show form to create or edit team
router.get('/:id/edit', async (req, res, next) => {
  try {
        const team = await Team.findById(req.params.id);
        res.render('edit', {team});
  }
  catch (err) {
    console.log (err);
    next()
    }
  });

// PUT - Update team
router.put('/:id', async (req, res) => {
    const team = await Team.findByIdAndUpdate(req.params.id,req.body);
    res.redirect('/teams');
  });

// POST - Create new team
router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const team = await Team.create(req.body);
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.send('Error saving team to database');
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

//delete
router.delete('/:id', async (req, res) => {
  const team = await Team.findByIdAndDelete(req.params.id)
  res.redirect('/Team')
})


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
