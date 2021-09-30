// 모듈추가
const express = require("express");
const app = express();
const path = require("path");

// 서버속성
const PORT = 4000;
const HOST = "0.0.0.0";

const cors = require("cors");
const corsOption = {
  origin: ["http://dmc.ajou.ac.kr:3500", "http://localhost:3500"],
  credentials: true,
};

app.use(express.json());

// cors
app.use(cors(corsOption));

// app.use
app.use(express.static(path.join(__dirname, "views")));

// passport
const passport = require("passport");
const passportConfig = require("./modules/passport");
const session = require("express-session");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// DB Connection
require("./model");

passportConfig();

// 라우팅
const router = require("./routes");
app.use(router);

// 서버시작
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
