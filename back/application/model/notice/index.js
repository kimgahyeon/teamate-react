const Notice = require("./schema");

class NoticeModel {
  // R-0501, R-0502
  setNotice = (notice) => {
    return new Promise(async (resolve, reject) => {
      try {
        const newNotice = new Notice(notice);
        const result = await newNotice.save();
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };

  getNoticesByMateID = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Notice.find({ mate: _id });
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };

  // R-0503
  deleteNotice = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Notice.deleteOne({ _id });
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };
}

module.exports = new NoticeModel();
