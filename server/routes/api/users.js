const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// Matches with "/api/users"
router
  .put('/', usersController.create)
  .post('/:username', usersController.login);

module.exports = router;
