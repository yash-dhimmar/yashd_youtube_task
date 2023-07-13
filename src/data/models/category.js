
//const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator')

var ObjectId = mongoose.Types.ObjectId;

module.exports = (mongoose) => {
  const CategorySchema = new Schema({
    title: {
      type: String,
      minlength: [3, 'Title must be three characters long'],
      trim: true,
      unique: true,
      uniqueCaseInsensitive: true,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
      minlength: [3, 'Description must be three characters long'],
      required: [true, 'Description is required'],
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },

  }, {
    timestamps: true
  });

  CategorySchema.plugin(uniqueValidator, { message: '{PATH} already exists.' })
  return mongoose.model('Category',CategorySchema, 'category')
};
