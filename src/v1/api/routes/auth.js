const express = require('express');
const router = express.Router()
const Multer = require('multer')
const path = require('path')

const GlobalAuthClass = require('../../api/middleware/auth');
const AuthController = require('../controllers/AuthController');

//register api
router.post('/sign-up',AuthController.signup);
//user login api
router.post('/login',AuthController.login)
//user forgot-password api
router.post('/forgot-password',GlobalAuthClass.authenticate,AuthController.forgotPassword)
//user reset password api
router.post('/reset-password',GlobalAuthClass.authenticate,AuthController.resetPassword)

router.post('/refresh-token',AuthController.refreshtoken)


module.exports = router;
