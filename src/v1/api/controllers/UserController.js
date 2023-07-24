const validator = require('../../../modules/validators/api/index')
const CommonController = require('./CommonController')
const UserService = require('../services/UserService')
const ResponseHelper = require('../../api/resources/response');
const jwt = require ('jsonwebtoken')

class UserController {
  async createUser(req, res) {
    try {
      let token= req.headers.authorization;
      let decodedData = jwt.verify(token,'secretkey')
      let id = decodedData._id
      let data = await UserService.create(req.body,id)
      return ResponseHelper.success(data, 'photourl created successfully', res)
    } catch (error) {
      console.log("error===========>", error)
      return ResponseHelper.error(error, res)
    }
  }  
}
module.exports = new UserController();