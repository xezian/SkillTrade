const router = require('express').Router();
const needsController = require('../../controllers/needsController');

// Matches with "/api/needs"
router
  .get('/', needsController.findAll)
  .post('/', needsController.create)
  .get('/:category', needsController.findByCategory)
  .put('/:id', needsController.update)
  .delete('/:id', needsController.remove);

module.exports = router;
