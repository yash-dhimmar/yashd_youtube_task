const express = require('express');
const router = express.Router()
const Multer = require('multer')
const path = require('path')
const upload = require('../middleware/multer') 
const GlobalAuthClass = require('../../../modules/middleware/auth');
const UserController = require('../../api/controllers/UserController');


router.post('/create',GlobalAuthClass.authenticate,upload.single("image"),UserController.createUser)

// router.get('/verify-email/:id', UserController.verifyMail);

module.exports = router;
