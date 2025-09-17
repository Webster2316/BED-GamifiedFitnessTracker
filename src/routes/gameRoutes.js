//##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require('express');
const router = express.Router();

// ##############################################################
// CREATE ROUTER
// ##############################################################
const gameController = require('../controllers/gameController');

// ##############################################################
// DEFINE ROUTES
// ##############################################################

router.get('/styles', gameController.getAllStyles);
router.post("/player/:userId", gameController.createNewPlayer, gameController.createPlayerUserRel);
router.post('/:playerId/style', gameController.addStyleToPlayer);

////not used///
router.get('/', gameController.getAllPlayers);
router.delete('/:userId/player/:playerId', gameController.deletePlayerByUser);


// ##############################################################
// EXPORT ROUTER
// ##############################################################

module.exports = router;