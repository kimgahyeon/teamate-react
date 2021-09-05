const express = require("express");
const router = express.Router();
const passport = require("passport");

const mateRouter = require("./mate");
const projectRouter = require("./project");

router.use("/mate", mateRouter);
router.use("/project", projectRouter);

router.post("/login", passport.authenticate("local-login"), (req, res) => {
  res.json({ status: true });
});

module.exports = router;
