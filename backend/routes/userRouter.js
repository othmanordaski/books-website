const express = require('express');
const router = express.Router();

const {login,registerUser} = require('../Controllers/userController');


router.route('/login').post(login)

router.route('/register').post(registerUser)

module.exports = router;