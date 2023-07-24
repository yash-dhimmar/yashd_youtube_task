const express = require('express');
const router = express.Router()
const Multer = require('multer')
const path = require('path')

const GlobalAuthClass = require('../middleware/auth');
const FeelingController = require('../controllers/ReactionController')

//user create reaction api for video
router.post('/create', GlobalAuthClass.authenticate, FeelingController.createReaction)
//user get reaction for video
router.get('/get-feeling', GlobalAuthClass.authenticate, FeelingController.getReaction)

module.exports = router;
