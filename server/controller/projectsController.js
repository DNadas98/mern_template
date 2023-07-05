const Project = require("../model/Project");
const { isValidObjectId } = require("mongoose");
const { logError } = require("../middleware/logger");

//GET /api/projects/
async function readAllProjects(req, res, next) {
  try {
    const projects = await Project.find().select("-__v").lean();
    if (projects?.length >= 1) {
      return res.status(200).json({ data: projects });
    }
    return res.status(404).json({ message: "No projects found" });
  } catch (err) {
    logError(err, req);
    return next(err);
  }
}

//GET /api/projects/:id
async function readProjectById(req, res, next) {
  try {
    const _id = decodeURI(req?.params?.id);
    if (!_id || !isValidObjectId(_id)) {
      return res.status(400).json({ message: "Invalid project ID" });
    }
    const project = await Project.findById(_id).select("-__v").lean();
    if (project) {
      return res.status(200).json({ data: project });
    }
    return res.status(404).json({ message: "Project not found" });
  } catch (err) {
    logError(err, req);
    return next(err);
  }
}

//POST /api/projects
async function createProject(req, res) {
  try {
    const { user, repo, files } = req.body;
    if (!user || !repo || !Array.isArray(files)) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const duplicate = await Project.findOne({ "user": user, "repo": repo });
    if (duplicate) {
      return res.status(409).json({
        message: `Repository ${repo} of user ${user} already exists as project`
      });
    }
    const result = await Project.create({ user, repo, files });
    if (!result) {
      throw new Error();
    }
    return res.status(200).json({ message: "Project created" });
  } catch (err) {
    logError(err, req);
    return res.status(400).json({ message: "Failed to create project" });
  }
}

//PATCH /api/projects/:id
async function updateProject(req, res) {
  try {
    const _id = decodeURI(req?.params?.id);
    const { user, repo } = req.body;
    if (!_id || !isValidObjectId(_id)) {
      return res.status(400).json({ message: "Invalid project ID" });
    }
    if (!user || !repo) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const duplicate = await Project.findOne({ "user": user, "repo": repo });
    if (duplicate && duplicate._id.toString() !== _id.toString()) {
      return res.status(409).json({
        message: `Repository ${repo} of user ${user} already exists as project`
      });
    }
    const result = await Project.findByIdAndUpdate(_id, { user, repo });
    if (!result) {
      throw new Error();
    }
    return res.status(200).json({ message: "Project updated" });
  } catch (err) {
    logError(err, req);
    return res.status(400).json({ message: "Failed to update project" });
  }
}

//DELETE /api/projects
async function deleteProject(req, res) {
  try {
    const _id = decodeURI(req?.params?.id);
    if (!_id || !isValidObjectId(_id)) {
      return res.status(400).json({ message: "Invalid project ID" });
    }
    const result = await Project.findByIdAndDelete(_id).lean();
    if (!result) {
      throw new Error();
    }
    return res.status(200).json({ message: "Project deleted" });
  } catch (err) {
    logError(err, req);
    return res.status(400).json({ message: "Failed to delete project" });
  }
}

//POST /api/projects/files
async function addFile(req, res) {
  try {
    const { projectId, path, language } = req.body;
    if (!projectId || !isValidObjectId(projectId)) {
      return res.status(400).json({ message: "Invalid request" });
    }
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    if (!path || !language) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (project?.files?.some((file) => file.path === path)) {
      return res.status(409).json({ message: "File already exists in this project" });
    }
    project.files.push({ "path": path, "language": language });
    await project.save();
    return res.status(200).json({ message: "File added" });
  } catch (err) {
    logError(err, req);
    return res.status(400).json({ message: "Failed to add file" });
  }
}

//PATCH /api/projects/files
async function updateFile(req, res) {
  try {
    const { projectId, fileId, path, language } = req.body;
    if (
      !projectId ||
      !isValidObjectId(projectId) ||
      !fileId ||
      !isValidObjectId(fileId)
    ) {
      return res.status(400).json({ message: "Invalid request" });
    }
    const project = await Project.findById(projectId);
    if (!project?.files?.find((file) => file._id.toString() === fileId)) {
      return res.status(404).json({ message: "Not Found" });
    }
    if (!path || !language) {
      return res.status(400).json({ message: "All fields are required" });
    }
    project.files = project.files.map((file) => {
      if (file._id.toString() === fileId) {
        return { _id: fileId, "path": path, "language": language };
      }
      return file;
    });
    await project.save();
    return res.status(200).json({ message: "File updated" });
  } catch (err) {
    logError(err, req);
    return res.status(400).json({ message: "Failed to update file" });
  }
}

//DELETE /api/projects/files
async function deleteFile(req, res) {
  try {
    const { projectId, fileId } = req.body;
    if (
      !projectId ||
      !isValidObjectId(projectId) ||
      !fileId ||
      !isValidObjectId(fileId)
    ) {
      return res.status(400).json({ message: "Invalid request" });
    }
    const project = await Project.findById(projectId);
    if (!project?.files?.find((file) => file._id.toString() === fileId)) {
      return res.status(404).json({ message: "Not Found" });
    }
    project.files = project.files.filter((file) => file._id.toString() !== fileId);
    await project.save();
    return res.status(200).json({ message: "File deleted" });
  } catch (err) {
    logError(err, req);
    return res.status(400).json({ message: "Failed to delete file" });
  }
}

module.exports = {
  readAllProjects,
  readProjectById,
  createProject,
  updateProject,
  deleteProject,
  addFile,
  updateFile,
  deleteFile
};
