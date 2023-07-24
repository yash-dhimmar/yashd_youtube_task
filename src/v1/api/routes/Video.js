const express = require('express');
const router = express.Router()
const Multer = require('multer')
const path = require('path')

const GlobalAuthClass = require('../../api/middleware/auth');
const VideoController = require('../controllers/VideoController')
const upload  = require('../middleware/multer')

// upload video api
router.post('/upload_video',GlobalAuthClass.authenticate,upload.single('video'),VideoController.uploadVideo)
//user get video api
router.get('/user-get-video',GlobalAuthClass.authenticate,VideoController.getVideo)
//user video delete api
router.delete('/video_delete',GlobalAuthClass.authenticate,VideoController.videoDelete)
//video update view api
router.put('/update_view',GlobalAuthClass.authenticate,VideoController.updateView)

//search api
router.post('/search',GlobalAuthClass.authenticate,VideoController.search)

module.exports = router;
