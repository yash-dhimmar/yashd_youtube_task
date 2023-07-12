//const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;
var ObjectId = mongoose.Types.ObjectId;

module.exports = (mongoose) => {
    const UserSchema = new Schema({
        channelName: {
            type: String,
            required: false,
            default: "",
        },
        email: {
            type: String,
            required: false,
            default: "",
        },
        mobile_number: {
            type: String,
            required: false,
            default: "",
        },

        photourl: {
            type:String,
            required: false,
            default:"",
           
        },
        role: {
            type: String, //1=user,2=admin,
            required: false,
            default: "user"
        },
        password: {
            type: String,
            required: false,        
            default:"",
        },
        auth_token: {
            type: String,
            required: false,
            default:"",
        },
        otp: {
            type: String,
            required: false,
            default: "",
        },
        status: {
            type: Boolean, // 0=inactive,1=active
            required: false,
            default: 1,
        },
       
    }, {
        timestamps: true
    });


    return  mongoose.model('User', UserSchema, 'users')
};






















// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// module.exports = (mongoose) => {
//     const UserSchema = new Schema({
//         firstname:{
//             type: String,
//             required: false,
//             default:""
//         },
//         lastname:{
//             type: String,
//             required: false,
//             default:""
//         },
//         email:{
//             type: String,
//             required:false, 
//             default:""
           
//         },
//         image:{
//             type: String,
//             required:false,
//             default:""
//         },
//         address:{
//             type:String,
//             required:false,
//             default:""
//         },
//         device_id:{
//             type:String,
//             required:false,
//             default:""
//         },
//         mobilenumber:{
//             type:String,
//             required:false,
//             default:""
//         },
//         auth_token:{
//             type:String,
//             required:false,
//             default:""
//         },
//         otp:{
//             type:Number,
//             required:false,
          
//         },
//         is_registered:{
//             type:Number,
//             required:false,
//             default:"0"
//         },
//        status:{
//             type: Number, // 0=inactive,1=active
//             required: false,
//             default:"1"
           
//         },
     
//     },{
//         timestamps: true
//     });
//     return mongoose.model('User',UserSchema,'users')
// };














// const crypto = require('crypto')
// const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// const uniqueValidator = require('mongoose-unique-validator')

// const Schema = mongoose.Schema

// const UserSchema = new Schema(
//   {
//     channelName: {
//       type: String,
//       required: [true, 'Please add a channel name'],
//       unique: true,
//       uniqueCaseInsensitive: true
//     },
//     email: {
//       type: String,
//       required: [true, 'Please add an email'],
//       unique: true,
//       uniqueCaseInsensitive: true,
//       match: [
//         /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//         'Please add a valid email'
//       ]
//     },
//     photoUrl: {
//       type: String,
//       default: 'no-photo.jpg'
//     },
//     role: {
//       type: String,
//       enum: ['user', 'admin'],
//       default: 'user'
//     },
//     password: {
//       type: String,
//       required: [true, 'Please add a password'],
//       minlength: [6, 'Must be six characters long'],
//       select: false
//     },
//     resetPasswordToken: String,
//     resetPasswordExpire: Date
//   },
//   { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
// )

// UserSchema.index({ channelName: 'text' })

// UserSchema.virtual('subscribers', {
//   ref: 'Subscription',
//   localField: '_id',
//   foreignField: 'channelId',
//   justOne: false,
//   count: true,
//   match: { userId: this._id }
// })
// UserSchema.virtual('videos', {
//   ref: 'Video',
//   localField: '_id',
//   foreignField: 'userId',
//   justOne: false,
//   count: true
// })

// UserSchema.plugin(uniqueValidator, { message: '{PATH} already exists.' })


// module.exports = mongoose.model('User', UserSchema);