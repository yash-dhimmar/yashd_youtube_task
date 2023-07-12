const express = require('express');
const router = express.Router()
const GlobalAuthClass = require('../../../modules/middleware/auth');
const userRoutes = require('../../api/routes/user');
const authRoutes = require('../../api/routes/auth')
const subscriptionRoutes = require('../routes/subscription')

router.use('/user', userRoutes);
router.use('/auth',authRoutes)
router.use('/subscription',subscriptionRoutes)

module.exports = router