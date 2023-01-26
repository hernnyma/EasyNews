const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  header: String,
  articlelink: String,
  articleimg: String,
  notes: String,
  userId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Article', articleSchema);