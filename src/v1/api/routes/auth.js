const express = require('express');
const router = express.Router()
const Multer = require('multer')
const path = require('path')

const GlobalAuthClass = require('../../api/middleware/auth');
const AuthController = require('../controllers/AuthController');

//register api
router.post('/sign-up',AuthController.signup);
//login api
router.post('/login',AuthController.login)
//forgot-password api
router.post('/forgot-password',GlobalAuthClass.authenticate,AuthController.forgotPassword)

router.post('/reset-password',GlobalAuthClass.authenticate,AuthController.resetPassword)

module.exports = router;
