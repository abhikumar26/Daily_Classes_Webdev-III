const express = require("express");

const userRouter = express.Router();

userRouter.post("/register", async(req, res) => {
    // Logic for register
    const {email,password} = req.body;
    const oldUser = await userModel.find({email})
  res.send({ msg: "New user Created successfully" });
});


userRouter.post("/login", (req, res) => {
    // Logic for login
  res.send({ msg: "Login success" });
});

module.exports = {userRouter}