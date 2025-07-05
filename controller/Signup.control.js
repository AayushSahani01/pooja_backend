const express = require("express");
const router = express.Router();
const User = require("../models/User.model.js");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
 
    const { firstName, lastName, emailId, password } = req.body;

    if (!firstName || !emailId || !password) {
      return res.status(400).json({ message: "Please enter require fields" });
    }
    const user = await User.findOne({ emailId: emailId });

    if (user) throw new Error("User already exist", Error);

    const hashPassword = await bcrypt.hash("Anshu$123", 10);

    const freshUser = new User({
      firstName,
      lastName,
      emailId,
      password: hashPassword,
      role: "user",
    });
    const savedUser = await freshUser.save();
    console.log(savedUser);
    res.status(200).json({ message: "Signup Successfull", savedUser });
   
});

module.exports = router;
