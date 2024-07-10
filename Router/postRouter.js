const express = require('express');
const userController = require('../Controller/UserController');

const router = express.Router();

router.post('/signUp', userController.signUp);