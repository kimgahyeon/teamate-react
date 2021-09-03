// 모듈추가
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
// 하이퍼레저 모듈추가+연결속성파일로드
const { FileSystemWallet, Gateway } = require("fabric-network");
const fs = require("fs");
const path = require("path");
const ccpPath = path.resolve(__dirname, "..", "network", "connection.json");
const ccpJSON = fs.readFileSync(ccpPath, "utf8");
const ccp = JSON.parse(ccpJSON);
// 서버속성
const PORT = 8080;
const HOST = "0.0.0.0";
// app.use
app.use(express.static(path.join(__dirname, "views")));

// 라우팅
const userRouter = require("./routes/user");
const projectRouter = require("./routes/project");
app.use("/user", userRouter);
app.use("/project", projectRouter);

// 서버시작
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
