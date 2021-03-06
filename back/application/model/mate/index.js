const project = require("../project");
const Mate = require("./schema");

class MateModel {
  // R-0201
  setMate = (mate) => {
    return new Promise(async (resolve, reject) => {
      try {
        const m = await Mate.findOne({ email: mate.email });
        if (m) reject(`${mate.email}은 이미 등록된 이메일입니다.`);
        const newMate = new Mate(mate);
        newMate.password = newMate.generateHash(mate.password);

        const result = await newMate.save();
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };

  // R-0202
  addRateOfMate = (_id, rate) => {
    return new Promise(async (resolve, reject) => {
      try {
        const mate = await Mate.findOne({ _id });
        const rates = mate.rates.push(rate);
        const result = await Mate.updateOne({ _id }, { $set: { rate: rates } });
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };

  // R-0203
  getAllMates = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Mate.find();
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };

  getMatesByRange = (offset, limit) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Mate.find().sort("_id").skip(offset).limit(limit);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };

  getMatesByRoleAndRange = (role, offset, limit) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Mate.find({ role }).sort("_id").skip(offset).limit(limit);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };

  // R-0204
  getMateByID = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Mate.findById(_id).populate("projects");
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };

  // R-0205
  updateMate = (mate) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Mate.updateOne({ _id: mate._id }, { $set: mate });
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };

  // R-0206
  deleteMate = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Mate.deleteOne({ _id });
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };
}

module.exports = new MateModel();
