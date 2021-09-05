const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  requirement: [
    {
      role: String,
      content: String,
    },
  ],
  leader: { type: Schema.Types.ObjectId, ref: "Mate" },
  mates: [{ type: Schema.Types.ObjectId, ref: "Mate" }],
  // 0: 모집 중, 1: 진행 중, 2: 완료
  status: Number,
  createdAt: { type: Date, default: Date.now() },
  terminatedAt: { type: Date },
});

module.exports = mongoose.model("Project", projectSchema);
