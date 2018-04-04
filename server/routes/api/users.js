const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// Matches with "/api/users"
router.route('/')
  .get('/', usersController.findAll)
  .post('/', usersController.create);

// Matches with "/api/users/:id"
router
  .get('/:id', usersController.findById)
  .put('/:id', usersController.update)
  .delete('/:id', usersController.remove);

module.exports = router;
