const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ImageSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  // path: [{
  //   type: String,
  //   required: true
  // }],
  // filename: {
  //   type: Number,
  //   required: true
  // },
  // mimetype: {
  //   type: Number,
  //   required: true
  // },
  // size: {
  //   type: Number,
  //   required: true
  // },
  createdAt: [{
    type: Date,
    required: true
  }],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Images = mongoose.model('Images', ImageSchema);
module.exports = Images;