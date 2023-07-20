//const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;
let ObjectId = mongoose.Types.ObjectId;

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
        refresh_token: {
            type: String,
            required: false,
            default: "",
        },
        status: {
            type: Boolean, // 0=inactive,1=active
            required: false,
            default: 1,
        },
       
    }, 
        { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
    );
   // UserSchema.index({ channelName:'text' })
    UserSchema.virtual('subscription', {
        ref: 'Subscription',
        localField: '_id',
        foreignField: 'channelId',
        justOne: false,
        count: true,
        match: { userId: this._id }
      })
      UserSchema.virtual('Video', {
        ref: 'Video',
        localField: '_id',
        foreignField: 'userId',
        justOne: false,
        count: true
      })
      

    return  mongoose.model('User', UserSchema, 'users')
};
