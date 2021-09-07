const express = require("express");
const router = express.Router();
const Project = require("../model/project");

router.get("/", async (req, res) => {});

router.get("/status/:status", async (req, res) => {
  try {
    const result = await Project.getProjectsByStatus(req.params.status);
    res.status(200).send({ ok: true, projects: result });
  } catch (err) {
    console.log(err);
    res.status(200).send({ ok: false, msg: "프로젝트를 찾을 수 없습니다." });
  }
});

router.get("/status/:status/offset/:offset/limit/:limit", async (req, res) => {
  const { status, offset, limit } = req.params;
  try {
    const result = await Project.getProjectsByStatusAndRange(status, Number(offset), Number(limit));
    res.status(200).send({ ok: true, projects: result });
  } catch (err) {
    console.log(err);
    res.status(200).send({ ok: false, msg: "프로젝트를 찾을 수 없습니다." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const project = await Project.getProjectByID(req.params.id);
    res.status(200).send({ ok: true, project });
  } catch (err) {
    console.log(err);
    res.status(200).send({ ok: true, msg: "프로젝트를 찾을 수 없습니다." });
  }
});

module.exports = router;
