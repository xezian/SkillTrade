const router = require('express').Router();
const usersController = require('../../controllers/usersController');

function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    // if user is looged in, req.isAuthenticated() will return true
    next();
  } else {
    res.json(req.user);
  }
}
// Matches with "/api/users"
router
  .get('/:username', checkAuthentication, usersController.findByUsername)
  .post('/', usersController.create)
  .post('/login', usersController.login);

module.exports = router;
