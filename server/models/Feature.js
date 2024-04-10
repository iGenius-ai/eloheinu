const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const featureSchema = new Schema({
  name: {
    type: String,
  },
  sender: {
    type: String,
  },
  subject: {
    type: String,
  },
  content: {
    type: String,
  },
  type: {
    type: String,
    enum: ['alphanumeric', 'numeric', 'alphabets'],
  },
  numOfChars: {
    type: Number,
    min: 1,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Feature = mongoose.model('Feature', featureSchema);

module.exports = Feature;