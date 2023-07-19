const validator = require('../../../modules/validators/api/index')
const CommonController = require('./CommonController')
const UserService = require('../services/UserService')
const ResponseHelper = require('../../api/resources/response');

class UserController {
  async create(req, res) {
    try {
      let token= req.headers.authorization;
      let decodedData = jwt.verify(token,'secretkey')
      let id = decodedData.user[0]._id
      let data = await UserService.create(req.body,id)
      return ResponseHelper.success(data, 'photourl created successfully', res)
    } catch (error) {
      console.log("error===========>", error)
      return ResponseHelper.error(error, res)
    }
  }
   
}
module.exports = new UserController();