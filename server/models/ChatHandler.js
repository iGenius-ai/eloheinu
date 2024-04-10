const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ChatSchema = new Schema({
  handlerName: {
    type: String
  },
  botIdentifier: {
    type: Schema.Types.ObjectId, 
    ref: 'Bot'
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  timestamps: {
    type: Date
  }
});

const ChatHandler = mongoose.model('ChatHandler', ChatSchema);
module.exports = ChatHandler;