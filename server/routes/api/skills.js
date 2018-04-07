const router = require('express').Router();
const skillsController = require('../../controllers/skillsController');

// Matches with "/api/skills"
router
  .get('/', skillsController.findAll)
  .post('/', skillsController.create)
  .get('/:category', skillsController.findByCategory)
  .put('/:id', skillsController.update)
  .delete('/:id', skillsController.remove);

module.exports = router;
