
const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator')

let ObjectId = mongoose.Types.ObjectId;
function video(video) {
  return 'http://localhost:4000/uploads/' + video
}

module.exports = (mongoose) => {
  const VideoSchema = new Schema({
    title: {
      type: String,
      minlength: [3, 'Title must be three characters long'],
    },
    description: {
      type: String,
      minlength: [3, 'Description must be three characters long'],
      required: [true, 'Description is required'],
    },
    thumbnailUrl: {
      type: String,
      default: 'no-photo.jpg'
    },
    views: {
      type: Number,
      default: 0
    },
    video: {
      type: String,
      get: video
    },
    status: {
      type: String,
      enum: ['draft', 'private', 'public'],
      default: 'draft'
    },
    categoryId: {   
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },

  }, {
    timestamps: true
  });
  VideoSchema.set('toObject', { getters: true })
  VideoSchema.set('toJSON', { getters: true })

  VideoSchema.virtual('dislikes', {
    ref: 'Reaction',
    localField: '_id',
    foreignField: 'videoId',
    justOne: false,
    count: true,
    match: { type: 'dislike' }
  })
  
  VideoSchema.virtual('likes', {
    ref: 'Reaction',
    localField: '_id',
    foreignField: 'videoId',
    justOne: false,
    count: true,
    match: { type: 'like' }
  })
  
  VideoSchema.virtual('comment', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'videoId',
    justOne: false,
    count: true
  })

  return mongoose.model('Video', VideoSchema, 'Video')
};
