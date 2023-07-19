
const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator')

let ObjectId = mongoose.Types.ObjectId;

module.exports = (mongoose) => {
  const HistorySchema = new Schema({
    searchText: {
      type: String
    },
    type: {
      type: String,
      enum: ['watch', 'search'],
      required: [true, 'Type is required']
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'User id is required']
    },
    videoId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Video'
    }
  }, {
    timestamps: true
  });

  return mongoose.model('History', HistorySchema, 'history')
};
