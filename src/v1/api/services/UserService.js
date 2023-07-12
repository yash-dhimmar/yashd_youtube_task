const {User,conn,UserDeviceToken} = require('../../../data/models/index')
const promise = require('bluebird')
const ejs = require('ejs')
const path = require('path')
const helper = require('../../../utills/helper')
// const BaseService = require('./BaseService');
const {
    resolve
} = require('path')

class UserService {
   async create(req,_id){
    return new Promise(async(resolve,reject)=>{
        try{
        let {photourl}=req.body
        var data = await User.find({_id:_id})
        if(data){
            var insert = await User.create({photourl:req.file.filename})
            resolve(insert)
        }
        }catch(error){
            return reject (error)
        }
    })
   }
}
module.exports = new UserService()