const router = require('express').Router();
const needRoutes = require('./needs');
const skillRoutes = require('./skills');
const userRoutes = require('./users');

// api routes (matches with /api/..)
router.use('/needs', needRoutes);
router.use('/skills', skillRoutes);
router.use('/users', userRoutes);

module.exports = router;
