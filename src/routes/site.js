const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController.js');

router.get('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;