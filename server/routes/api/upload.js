const router = require('express').Router();
const uploadController = require('../../controllers/uploadController');

// Matches with "/api/upload"
router
  .post('/', uploadController.upload);

module.exports = router;