const express = require("express");
const fs = require("fs");

const StudentRouter = express.Router();
StudentRouter.get = JSON.parse(fs.readFileSync("./1.json","utf8"))
