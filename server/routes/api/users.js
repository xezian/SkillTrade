const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// Matches with "/api/users"
router
  .put('/', usersController.create);

// Matches with "/api/users/:id"
router
  .post('/:id', usersController.login);

module.exports = router;
