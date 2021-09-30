const express = require("express");
const router = express.Router();

const Mate = require("../model/mate");

const { FileSystemWallet, Gateway } = require("fabric-network");
const fs = require("fs");
const path = require("path");

const ccpPath = path.resolve(__dirname, "..", "..", "network", "connection.json");
const ccpJSON = fs.readFileSync(ccpPath, "utf8");
const ccp = JSON.parse(ccpJSON);

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
    const result = await Mate.getAllMates();
    res.status(200).send({ ok: true, mates: result });
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
    res.status(200).send({ ok: true, mates });
  } catch (err) {
    res.status(500).send();
  }
});

router.get("/offset/:offset/limit/:limit", async (req, res) => {
  const { offset, limit } = req.params;
  try {
    const result = await Mate.getMatesByRange(Number(offset), Number(limit));
    res.status(200).send({ ok: true, mates: result });
  } catch (err) {
    console.log(err);
    res.status(200).send({ ok: false, msg: "Mate를 찾을 수 없습니다." });
  }
});

router.get("/role/:role/offset/:offset/limit/:limit", async (req, res) => {
  const { role, offset, limit } = req.params;
  try {
    const result = await Mate.getMatesByRoleAndRange(role, Number(offset), Number(limit));
    res.status(200).send({ ok: true, mates: result });
  } catch (err) {
    console.log(err);
    res.status(200).send({ ok: false, msg: "Mate를 찾을 수 없습니다." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const mate = await Mate.getMateByID(req.params.id);
    delete mate.password;
    console.log(mate);
    res.status(200).send({ ok: true, mate });
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
