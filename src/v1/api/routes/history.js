const express = require('express');
const router = express.Router()
const Multer = require('multer')
const path = require('path')
const upload = require('../middleware/multer')
const GlobalAuthClass = require('../middleware/auth');
const HistoryController = require('../../api/controllers/HistoryController');

// user craete history api
router.post('/create-history', GlobalAuthClass.authenticate, HistoryController.createHistory)
// user one video delete history api
router.delete('/delete-history',GlobalAuthClass.authenticate,HistoryController.deleteHistory)
// user deleted all history video history api
router.delete('/all-history-delete',GlobalAuthClass.authenticate,HistoryController.userAllHistoryDelete)
// user findall video history api
router.get('/user-get-history',GlobalAuthClass.authenticate,HistoryController.getHistory)

module.exports = router;
