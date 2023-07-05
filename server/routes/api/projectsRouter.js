const express = require("express");
const {
  readAllProjects,
  readProjectById,
  createProject,
  updateProject,
  deleteProject,
  addFile,
  updateFile,
  deleteFile
} = require("../../controller/projectsController");

const router = express.Router();

router.route("/").get(readAllProjects).post(createProject);

router.route("/files").post(addFile).patch(updateFile).delete(deleteFile);

router.route("/:id").get(readProjectById).patch(updateProject).delete(deleteProject);

module.exports = router;
