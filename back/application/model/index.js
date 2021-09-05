// db connection configuration
// DB
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/teamate", {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", function () {
  console.log("MongoDB connection failed!");
});

db.once("open", function () {
  console.log("MongoDB connection success!");
});

module.exports = db;
