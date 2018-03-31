const router = require("express").Router();
const skillsController = require("../../controllers/skillsController");

// Matches with "/api/skills"
router.route("/")
  .get(skillsController.findAll)
  .post(skillsController.create);

// Matches with "/api/skills/:id"
router
  .route("/:id")
  .get(skillsController.findById)
  .put(skillsController.update)
  .delete(skillsController.remove);

module.exports = router;
