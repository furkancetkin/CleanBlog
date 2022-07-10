const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const PostSchema = new Schema({
  title: String,
  description: String,
  author: {
    type: String,
    default: 'Furkan Cetkin'
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;