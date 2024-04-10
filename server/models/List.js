const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ListSchema = new Schema({
  propertyName: {
    type: String,
    required: true
  },
  tags: [{
    type: String,
    required: true
  }],
  address: {
    type: String,
  },
  price: {
    type: String,
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  lenght: {
    type: Number,
    required: true
  },
  width: {
    type: Number,
    required: true
  },
  images: [{
    type: String,
    required: true
  }],
  propertyID: {
    type: String,
    required: true,
    unique: true
  },
  propertyType: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  features: [{
    type: String,
    required: true
  }],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const List = mongoose.model('List', ListSchema);
module.exports = List;