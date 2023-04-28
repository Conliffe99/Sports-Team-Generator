const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sport: {
    type: String
  },
  city: {
    type: String
  }
});

module.exports = mongoose.model('brackets', teamSchema);

