const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noticeSchema = new Schema({
  // 0: 프로젝트 초대, 1: 수락
  category: Number,
  mate: { type: Schema.Types.ObjectId, ref: "Mate" },
  project: { type: Schema.Types.ObjectId, ref: "Project" },
  isRead: Boolean,
  receivedAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Notice", noticeSchema);
