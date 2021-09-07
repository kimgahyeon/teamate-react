const Project = require("./schema");

class ProjectModel {
  // R-0301
  setProject = (project) => {
    return new Promise(async (resolve, reject) => {
      try {
        const newProject = new Project(project);
        const result = await newProject.save();
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };

  // R-0302
  getAllProjects = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Project.find().sort("-createdAt").populate("leader").populate("mates");
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };

  // R-0303
  getProjectsByStatus = (status) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Project.find({ status }).sort("-createdAt").populate("leader").populate("mates");
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };

  getProjectsByStatusAndRange = (status, offset, limit) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Project.find({ status })
          .sort("_id")
          .sort("-createdAt")
          .populate("leader")
          .populate("mates")
          .skip(offset)
          .limit(limit);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };

  // R-0304
  getProjectByID = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Project.findOne({ _id }).sort("-createdAt").populate("leader").populate("mates");
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };

  // R-0305
  updateProject = (project) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Project.updateOne({ _id: project._id }, { $set: project });
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };

  // R-0306
  launchProject = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Project.updateOne({ _id }, { $set: { status: 1 } });
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };

  // R-0307
  terminateProject = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Project.updateOne({ _id }, { $set: { status: 2, terminatedAt: Date.now() } });
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };

  // R-0308
  deleteProject = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Project.deleteOne({ _id });
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };
}

module.exports = new ProjectModel();
