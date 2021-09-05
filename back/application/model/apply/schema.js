const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const applySchema = new Schema({
  project: { type: Schema.Types.ObjectId, ref: "Project" },
  mate: { type: Schema.Types.ObjectId, ref: "Mate" },
  context: String,
});

module.exports = mongoose.model("Apply", applySchema);
