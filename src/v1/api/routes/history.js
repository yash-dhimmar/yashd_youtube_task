const express = require('express');
const router = express.Router()
const Multer = require('multer')
const path = require('path')
const upload = require('../middleware/multer')
const GlobalAuthClass = require('../middleware/auth');
const HistoryController = require('../../api/controllers/HistoryController');

// user craete history api
router.post('/create-history', GlobalAuthClass.authenticate, HistoryController.createHistory)

module.exports = router;
