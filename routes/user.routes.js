const express = require('express');
const loginRouter = require('../controller/Login.control');
const signupRouter = require('../controller/Signup.control');

const  router = express.Router();

router.post('/signup', signupRouter);
router.post('/login', loginRouter);

module.exports = router;