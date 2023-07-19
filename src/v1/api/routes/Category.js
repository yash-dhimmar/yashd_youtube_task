const express = require('express');
const router = express.Router()
const Multer = require('multer')
const path = require('path')

const GlobalAuthClass = require('../../api/middleware/auth');
const CategoryController = require('../controllers/CategoryController')

//user create category api for video
router.post('/create', GlobalAuthClass.authenticate, CategoryController.create)
//user all category display 
router.get('/findAll', CategoryController.findAll)
//user update category api for video
router.post('/update', GlobalAuthClass.authenticate, CategoryController.update)
//user category deleted api
router.post('/deleteData', GlobalAuthClass.authenticate, CategoryController.deleteData)

module.exports = router;
