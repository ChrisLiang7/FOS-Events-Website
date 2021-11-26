const mongoose = require('mongoose');
const { init } = require('../app');


const actSchema = new mongoose.Schema({
    id: Number,
    name: String,
    location: String,
    descriptions: String,
    picture: String
    
  }, { timestamps: true });

  const Activity = mongoose.model('Activity', actSchema);
  module.exports = Activity;