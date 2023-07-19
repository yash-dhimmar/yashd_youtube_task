const express = require('express');
const router = express.Router()
const GlobalAuthClass = require('../middleware/auth');
const userRoutes = require('../../api/routes/user');
const authRoutes = require('../../api/routes/auth')
const subscriptionRoutes = require('../routes/subscription')
const CategoryRoutes = require('../routes/Category')
const VideoRoutes = require('../routes/Video')
const FeelingRoutes = require('./reaction')
const Comment_ReplyRoutes = require('./comment_reply')
const HistoryRoutes = require('../routes/history')


router.use('/user', userRoutes);
router.use('/auth', authRoutes)
router.use('/subscription', subscriptionRoutes)
router.use('/category', CategoryRoutes)
router.use('/video', VideoRoutes)
router.use('/feeling', FeelingRoutes)
router.use('/comment_reply', Comment_ReplyRoutes)
router.use('/history',HistoryRoutes)
module.exports = router