
//const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;
let ObjectId = mongoose.Types.ObjectId;
const uniqueValidator = require('mongoose-unique-validator')

module.exports = (mongoose) => {
  const ReactionSchema = new Schema({
    type: {
      type: String,
      enum: ['like', 'dislike','blank'],
      required: [true, 'Type is required either like or dislike']
    },
    videoId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Video',
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },

  }, {
    timestamps: true
  });

  // FeelingSchema.plugin(uniqueValidator, { message: '{PATH} already exists.' })

  return mongoose.model('Reaction', ReactionSchema, 'reaction')
};






















