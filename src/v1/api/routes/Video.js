const express = require('express');
const router = express.Router()
const Multer = require('multer')
const path = require('path')

const GlobalAuthClass = require('../../api/middleware/auth');
const VideoController = require('../controllers/VideoController')
const upload  = require('../middleware/multer')

router.post('/upload_video',GlobalAuthClass.authenticate,upload.single('video'),VideoController.uploadVideo)
router.get('/user-get-video',GlobalAuthClass.authenticate,VideoController.getVideo)
router.post('/video_delete',GlobalAuthClass.authenticate,VideoController.videoDelete)
router.post('/update_view',GlobalAuthClass.authenticate,VideoController.updateView)


module.exports = router;
