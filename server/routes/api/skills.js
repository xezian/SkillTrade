const router = require('express').Router();
const skillsController = require('../../controllers/skillsController');

// Matches with "/api/skills"
router
  .get('/', skillsController.findAll)
  .post('/', skillsController.create);

// Matches with "/api/skills/:id"
router
  .get('/:id', skillsController.findById)
  .put('/:id', skillsController.update)
  .delete('/:id', skillsController.remove);

module.exports = router;
