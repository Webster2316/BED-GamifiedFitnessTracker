// ##############################################################
// REQUIRE MODULES
// ##############################################################
const model = require("../models/gameModel.js");


    
// ##############################################################
// get all styles
// ##############################################################


module.exports.getAllStyles = (req, res, next) =>
    {
        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error readAllStyles:", error);
                res.status(500).json(error);
            } 
            else res.status(200).json(results);
        }
    
        model.selectAllStyles(callback);
    }



// ##############################################################
// createPlayerUserRel // create new player
// ##############################################################

    
module.exports.createNewPlayer = (req, res, next) => {
    if (!req.body.name || !req.body.age) {
        return res.status(400).send("Error: Missing required data");
    }

    const data = { 
        name: req.body.name,
        age: req.body.age,
    };

    model.insertSingle(data, (error, results, fields) => {
        if (error) {
            console.error("Error createNewPlayer:", error);
            return res.status(500).json({ message: "Internal server error" });
        } 

        // Store player_id in res.locals to pass to the next middleware
        res.locals.playerId = results.insertId;

        console.log("Created Player ID:", res.locals.playerId);

        next(); // Move to the next middleware (createPlayerUserRel)
    });
};


module.exports.createPlayerUserRel = (req, res) => {
    console.log("Params userId:", req.params.userId);
    console.log("Player ID from res.locals:", res.locals.playerId);

    if (!req.params.userId || !res.locals.playerId) {
        return res.status(400).send("Error: userId or playerId is undefined");
    }

    const data = {
        userId: req.params.userId,
        playerId: res.locals.playerId,
    };

    model.insertPlayerUserRel(data, (error, results, fields) => {
        if (error) {
            console.error("Error insertPlayerUserRel:", error);
            return res.status(500).json(error);
        } 

        res.status(201).json({
            message: `Player ${res.locals.playerId} created for user ${req.params.userId} successfully.`,
        });
    });
};


    
// ##############################################################
// get all players
// ##############################################################


module.exports.getAllPlayers = (req, res, next) =>
    {
        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error readAllplayers:", error);
                res.status(500).json(error);
            } 
            else res.status(200).json(results);
        }
    
        model.selectAll(callback);
    }

           
// ##############################################################
// update style for player
//  #############################################################

module.exports.addStyleToPlayer = (req, res, next) => {
    if (!req.body.fashionStyleId) {  // Expecting a fashionStyleId, not fashionStyle
        res.status(400).json({
            message: "Error: fashionStyleId is required"
        });
        return;
    }

    const data = {
        playerId: req.params.playerId,  // playerId from URL
        clothingId: req.body.fashionStyleId  // clothing_id from FashionStyle
    };

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error cannot add style:", error);
            res.status(500).json(error);
        } else {
            res.status(201).json({
                message: `Fashion style ${data.clothingId} added to player ${data.playerId}`
            });
        }
    };

    model.addStyleToPlayer(data, callback); // Call model function to insert into PlayerFashionStyle
};


// ##############################################################
//  delete player by user
//  #############################################################

    
module.exports.deletePlayerByUser = (req, res, next) => {
    const data = {
        user_id: req.params.user_Id,
        player_id: req.params.player_Id,
    }
    
    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error deletePlayerByUser:", error);
            res.status(500).json(error);
        } else {
            if(results.length == 0) 
                {
                    res.status(404).json({
                        message: "User or player does not exist"
                    });
                }
           else {
            res.status(204).send();
           } 
        };
      
    }
    model.updateByUser(data, callback);
};

