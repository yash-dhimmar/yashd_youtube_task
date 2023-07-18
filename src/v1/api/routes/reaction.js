const express = require('express');
const router = express.Router()
const Multer = require('multer')
const path = require('path')

const GlobalAuthClass = require('../middleware/auth');
const FeelingController = require('../controllers/ReactionController')

router.post('/create',GlobalAuthClass.authenticate,FeelingController.createReaction)
router.post('/get-feeling',GlobalAuthClass.authenticate,FeelingController.getReaction)

module.exports = router;
