const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController.js');

// newsController.index
router.get('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;