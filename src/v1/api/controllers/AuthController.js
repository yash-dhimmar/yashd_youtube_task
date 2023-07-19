const AuthService = require('../../api/services/AuthService')
const ResponseHelper = require('../../api/resources/response')
const { User } = require('../../../data/models/index')
const jwt = require('jsonwebtoken')

class AuthController {
  async signup(req, res) {
    try {
      let data = await AuthService.signup(req.body)
      return ResponseHelper.success(data, 'signup- successfully', res)
    } catch (error) {
      console.log("error===========>", error)
      return ResponseHelper.error(error, res)
    }
  }
  async login(req, res) {
    try {
      let user = await AuthService.login(req.body)
      if (user) {
        let token = await jwt.sign({ user }, 'secretkey', { expiresIn: '20d' })
      }
      console.log("token=====>", token)
      console.log("req.body=====>",user[0].email)
      await User.updateOne({ email: user[0].email }, { $set: { auth_token: token } })
      user[0].auth_token = token
      return ResponseHelper.success(user, 'login- successfully', res)
    } catch (error) {
      console.log("error===========>", error)
      return ResponseHelper.error(error, res)
    }
  }

  async forgotPassword(req, res) {
    try {
      let token= req.headers.authorization;
      let decodedData = jwt.verify(token,'secretkey')
      let email = decodedData.user[0].email
      let data = await AuthService.forgotPassword(req.body,email)
      return ResponseHelper.success(data, 'password send to the mail - successfully', res)
    } catch (error) {
      console.log("error===========>", error)
      return ResponseHelper.error(error, res)
    }
  }

  async resetPassword(req, res) {
    try {
      let token= req.headers.authorization;
      let decodedData = jwt.verify(token,'secretkey')
      let _id = decodedData.user[0]._id
      let data = await AuthService.resetPassword(req.body,_id)
      return ResponseHelper.success(data, 'password  reset successfully', res)
    } catch (error) {
      console.log("error===========>", error)
      return ResponseHelper.error(error, res)
    }
  }


}
module.exports = new AuthController()