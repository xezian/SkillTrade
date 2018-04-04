const router = require('express').Router();
const needsController = require('../../controllers/needsController');

// Matches with "/api/needs"
router.route('/needs/')
  .get(needsController.findAll)
  .post(needsController.create);

// Matches with "/api/needs/:id"
router
  .route('/needs/:id')
  .get(needsController.findById)
  .put(needsController.update)
  .delete(needsController.remove);

module.exports = router;
