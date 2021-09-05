const Project = require("./schema");

class ProjectModel {
  // R-0301
  setProject = (project) => {
    return new Promise(async (resolve, reject) => {
      try {
        const newProject = new Project(project);
        await newProject.save();
        resolve(newProject);
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
  
  getProjectsByStatusAndLimit = (status, limit) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Project.find({ status }).sort("-createdAt").populate("leader").populate("mates").limit(limit);
        resolve(result);
      } catch(err) {
        reject(err);
      }
    });
  }

  // R-0304
  getProjectByID = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Project.find({ _id }).sort("-createdAt").populate("leader").populate("mates");
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
        const result = await Project.updateOne(
          { id: project._id },
          { $set: project }
        );
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
        const result = await Project.updateOne(
          { _id },
          { $set: { status: 1 } }
        );
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
        const result = await Project.updateOne(
          { _id },
          { $set: { status: 2, terminatedAt: Date.now() } }
        );
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
