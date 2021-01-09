const { body } = require('express-validator');

module.exports = [
  body('title', 'Title does not exist').exists(),
  body('description').exists()
];
