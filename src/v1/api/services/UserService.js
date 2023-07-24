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
        // let {photourl}=req.body
        let data = await User.find({_id:_id})
        if(data){
            let insert = await User.create({image:req.file.filename})
            console.log("insert===========>",insert)
            resolve(insert)
        }
        }catch(error){
            return reject (error)
        }
    })
   }
}
module.exports = new UserService()