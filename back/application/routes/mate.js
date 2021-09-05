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

router.get("/", async (req, res) => {
  try {
    const result = await Mate.getAllMates()
    res.status(200).send({ ok: true, mates: result })
  } catch (err) {
    res.status(500).send();
  }
});

router.get("/limit/:limit", async (req, res) => {
  try {
    const result = await Mate.getAllMates();
    let mates = [];
    while (mates.length < Number(req.params.limit)) {
      mates.push(result[Math.floor(Math.random() * result.length)]);
    }
    res.status(200).send({ ok: true, mates })
  } catch (err) {
    res.status(500).send();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const mate = await Mate.getMateByID(id);
    delete mate.password;
    res.status(200).send({ ok: true, mate })
  } catch (err) {
    res.status(500).send();
  }
})

module.exports = router;
