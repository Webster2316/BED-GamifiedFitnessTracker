// ##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require('express');
const router = express.Router();

// ##############################################################
// CREATE ROUTER
// ##############################################################
const userRoutes = require('./userRoutes');
const challengeRoutes = require('./challengeRoutes');
const gameRoutes = require('./gameRoutes');
const reviewRoutes = require('./reviewRoutes');


const userController = require('../controllers/userController');
// const exampleController = require('../controllers/exampleController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');
const bcryptMiddleware = require('../middlewares/bcryptMiddleware');



// ##############################################################
// DEFINE ROUTES
// ##############################################################
router.use("/user", userRoutes);
router.use("/challenges", challengeRoutes);
router.use("/game", gameRoutes);
router.use("/review", reviewRoutes);

router.post("/login", userController.login, bcryptMiddleware.comparePassword, jwtMiddleware.generateToken, jwtMiddleware.sendToken);
router.post("/register", userController.checkUsernameOrEmailExist, bcryptMiddleware.hashPassword, userController.register, jwtMiddleware.generateToken, jwtMiddleware.sendToken);
// ##############################################################
// EXPORT ROUTER
// ##############################################################

module.exports = router;