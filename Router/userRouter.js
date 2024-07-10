const express = require('express');
const userController = require('../Controller/UserController');
const {body} = require("express-validator");

const router = express.Router();

router.post('/signUp',
    body('email').isEmail(),
    body('password').isLength({min: 5, max: 32}),
    body('name').isLength({min: 1, max: 20}),
    body('surname').isLength({min: 1, max: 20}),
    userController.signUp);


module.exports = router;