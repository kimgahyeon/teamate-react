const express = require("express");
const router = express.Router();
const passport = require("passport");
const Mate = require("../model/mate");

const mateRouter = require("./mate");
const projectRouter = require("./project");

router.use("/mate", mateRouter);
router.use("/project", projectRouter);
router.post("/login", passport.authenticate("local-login"), async (req, res) => {
  try {
    const mate = await Mate.getMateByID(req.user);
    res.json({ status: true, mate: {
      name: mate.name,
      // image: mate.image
    } });
  } catch(err) {
    
  }
  
});

module.exports = router;
