const Apply = require("./schema");

class ApplyModel {
  // R-0401
  setApply = (apply) => {
    return new Promise(async (resolve, reject) => {
      try {
        const newApply = new Apply(apply);
        await newApply.save();
        resolve(newApply);
      } catch (err) {
        reject(err);
      }
    });
  };

  // R-0402
  updateApply = (apply) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Apply.updateOne(
          { _id: apply._id },
          { $set: apply }
        );
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };

  // R-0403
  deleteApply = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Apply.deleteOne({ _id });
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };
}

module.exports = new ApplyModel();
