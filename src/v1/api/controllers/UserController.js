const validator = require('../../../modules/validators/api/index')
const CommonController = require('./CommonController')
const UserService = require('../services/UserService')
const ResponseHelper = require('../../api/resources/response');

class UserController {
  async create(req, res) {
    try {
      var token= req.headers.authorization;
      var decodedData = jwt.verify(token,'secretkey')
      var id = decodedData.user[0]._id
      var data = await UserService.create(req.body,id)
      return ResponseHelper.success(data, 'photourl created successfully', res)
    } catch (error) {
      console.log("error===========>", error)
      return ResponseHelper.error(error, res)
    }
  }
   
}
module.exports = new UserController();