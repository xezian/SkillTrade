const router = require("express").Router();
const skillsRoutes = require("./skills");

// Skills routes
router.use("/skills", skillsRoutes);

module.exports = router;
