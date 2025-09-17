// ##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require('express');
const router = express.Router();

// ##############################################################
// CREATE ROUTER
// ##############################################################
const challengeController = require('../controllers/challengesController');

// ##############################################################
// DEFINE ROUTES
// ##############################################################
//task 4

router.post('/', challengeController.createNewChallenge);

//task 5

router.get('/', challengeController.getAllChallenges);

//task 6 
router.put('/:challenge_id', challengeController.updateChallengeById);

//task 7
router.delete('/:challenge_id', challengeController.deleteChallengeById);

//task 8
router.post('/:challenge_id', challengeController.createCompletionRecordById);

//task 9
router.get('/:challenge_id', challengeController.getChallengeById);


// ##############################################################
// EXPORT ROUTER
// ##############################################################

module.exports = router;