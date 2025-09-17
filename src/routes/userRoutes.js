// ##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require('express');
const router = express.Router();

// ##############################################################
// CREATE ROUTER
// ##############################################################

const userController = require('../controllers/userController');

// ##############################################################
// DEFINE ROUTES
// ##############################################################
//task 1
// router.post('/', userController.createNewUser);

// //task 2
// router.get('/', userController.readAllUsers);


// //task 3
// router.put('/:userId', userController.updateUserById);

// ##############################################################
// EXPORT ROUTER
// ##############################################################

module.exports = router;