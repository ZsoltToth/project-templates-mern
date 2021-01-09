const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  }
});

IssueSchema.pre('findOneAndUpdate', next => {
  console.log('pre update hook');
  next();
});

module.exports = mongoose.model('issue', IssueSchema);
