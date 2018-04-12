const router = require('express').Router();
const usersController = require('../../controllers/usersController');
const loginController = require('../../controllers/loginController');

// Matches with "/api/users"
router
  .get('/', usersController.checkUsername)
  .put('/', usersController.create)
  .post('/:username', loginController.login);

module.exports = router;
