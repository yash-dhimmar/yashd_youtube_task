const AuthService = require('../../api/services/AuthService')
const ResponseHelper = require('../../api/resources/response')
const { User, RefreshToken } = require('../../../data/models/index')
const jwt = require('jsonwebtoken')
const Validator = require ('../middleware/validation')

class AuthController {
  async signup(req, res) {
    try {
      await Validator.signupValidation(req.body)
      let data = await AuthService.signup(req.body)
      return ResponseHelper.success(data, 'signup- successfully', res)
    } catch (error) {
      console.log("error===========>", error)
      return ResponseHelper.error(error, res)
    }
  }
  async login(req, res) {
    try {
      await Validator.loginValidation(req.body)
      let user = await AuthService.login(req.body)
      return ResponseHelper.success(user, 'login- successfully', res)
    } catch (error) {
      console.log("error===========>", error)
      return ResponseHelper.error(error, res)
    }
  }

  async forgotPassword(req, res) {
    try {
      let token = req.headers.authorization;
      let decodedData = jwt.verify(token, 'secretkey')
      let email = decodedData.user[0].email
      let data = await AuthService.forgotPassword(req.body, email)
      return ResponseHelper.success(data, 'password send to the mail - successfully', res)
    } catch (error) {
      console.log("error===========>", error)
      return ResponseHelper.error(error, res)
    }
  }

  async resetPassword(req, res) {
    try {
      await Validator.ResetPasswordValidation(req.body)
      let token = req.headers.authorization;
      let decodedData = jwt.verify(token, 'secretkey')
      let _id = decodedData.user[0]._id
      let data = await AuthService.resetPassword(req.body, _id)
      return ResponseHelper.success(data, 'password  reset successfully', res)
    } catch (error) {
      console.log("error===========>", error)
      return ResponseHelper.error(error, res)
    }
  }

  async refreshtoken(req, res) {
    try {
      await Validator.RefreshTokenValidation(req.body)
      let data = await AuthService.refreshtoken(req.body)
      return ResponseHelper.success(data, 'password  reset successfully', res)
    } catch (error) {
      console.log("error===========>", error)
      return ResponseHelper.error(error, res)
    }
  }
}
module.exports = new AuthController()