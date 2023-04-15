const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// Initialize the app
const app = express();

// Connect to the database
mongoose.connect('mongodb://localhost:27017/sports-bracket', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log('Connected to the database!');
}).catch((err) => {
  console.error(err);
});

// Set up middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Set up routes
const teamRoutes = require('./routes/teams');
app.use('/teams', teamRoutes);

// Start the server
app.listen(4000, () => {
  console.log('Server started on port 4000 🎧');
});