const router = require('express').Router();
const needsController = require('../../controllers/needsController');

// Matches with "/api/needs"
router
  .get('/', needsController.findAll)
  .post('/', needsController.create);

// Matches with "/api/needs/:id"
router
  .get('/:id', needsController.findById)
  .put('/:id', needsController.update)
  .delete('/:id', needsController.remove);

module.exports = router;
