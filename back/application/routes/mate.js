const express = require("express");
const router = express.Router();

const Mate = require("../model/mate");

// R-0201: setMate
router.post("/", async (req, res) => {
  try {
    const result = await Mate.setMate(req.body);
    res.status(200).send({ ok: true, msg: result });
  } catch (err) {
    res.status(200).send({ ok: false, msg: err });
  }
});

router.get("/", (req, res) => {
  console.log(req.session);
  res.json(req.session);
});

module.exports = router;
