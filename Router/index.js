const express = require('express');
const userRouter = require('./userRouter');

const router = express.Router();
router.use('/user', userRouter); //http://localhost:3003/user/signUp


module.exports = router;