const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  allergens: {
    type: [{ type: String }],
    required: true
  }
});

module.exports = mongoose.model('food', FoodSchema);
