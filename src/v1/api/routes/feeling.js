const express = require('express');
const router = express.Router()
const Multer = require('multer')
const path = require('path')

const GlobalAuthClass = require('../../api/middleware/auth');
const FeelingController = require('../controllers/FeelingController')

router.post('/create',GlobalAuthClass.authenticate,FeelingController.create)

// router.get('/findAll',CategoryController.findAll)

// router.post('/update',GlobalAuthClass.authenticate,CategoryController.update)

// router.post('/deleteData',GlobalAuthClass.authenticate,CategoryController.deleteData)

module.exports = router;
