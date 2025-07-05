const express = require("express");
const router = express.Router();
const  User  = require("../models/User.model.js");

router.post("/login", async (req, res) => {
  try {
  const { emailId, password } = req.body;
  
    if (!emailId || !password) {
      return res.status(400).json({ message: "Please enter require fields" });
    }
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    // const validPassword = await bcrypt.compare(password, user.password);
    // if (!validPassword) {
    //   return res.status(400).json({ message: "Invalid Password" });
    // }
    res.status(200).json({ message: "Login Successfull" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
