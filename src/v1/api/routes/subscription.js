const express = require('express');
const router = express.Router()
const Multer = require('multer')
const path = require('path')

const GlobalAuthClass = require('../../api/middleware/auth');
const AuthController = require('../controllers/AuthController');
const SubscriptionController = require('../controllers/SubscriptionController')

//user subscribe to channel api
router.post('/crete-subscriber',GlobalAuthClass.authenticate,SubscriptionController.createSubscriber)

module.exports = router;
