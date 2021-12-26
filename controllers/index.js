const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
const adminRoutes = require('./admin-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/admin', adminRoutes);

module.exports = router;