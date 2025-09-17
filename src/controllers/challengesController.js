// ##############################################################
// REQUIRE MODULES
// ##############################################################
const model = require("../models/challengeModel.js");


// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR CREATE CHALLENGE //task 4
// ##############################################################


module.exports.createNewChallenge = (req, res, next) => {
    const { challenge, user_id, skillpoints } = req.body;
  
    // Ensure all required data is present
    if (challenge === undefined || user_id === undefined || skillpoints === undefined) {
      res.status(400).send("Error: Missing required data");
      return;
    }
  
    const data = { 
      challenge: challenge, // Challenge text
      creator_id: user_id,  // User who created it
      skillpoints: skillpoints  // Points for the challenge
    };
  
    const callback = (error, results) => {
      if (error) {
        console.error("Error creating new challenge:", error);
        res.status(500).json({ message: "Internal server error" });
      } else {
        res.status(201).json({
          challenge_id: results.insertId,
          challenge: data.challenge,
          creator_id: data.creator_id,
          skillpoints: data.skillpoints
        });
      }
    };
  
    model.insertSingle(data, callback);
  };
  
    
// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR READ ALL CHALLENGES //task 5
// ##############################################################


module.exports.getAllChallenges = (req, res, next) =>
    {
        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error readAllChallenges:", error);
                res.status(500).json(error);
            } 
            else res.status(200).json(results);
        }
    
        model.selectAll(callback);
    }


    
// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR UPDATE CHALLENGE BY ID //task 6
// ##############################################################

module.exports.updateChallengeById = (req, res, next) =>
    {
        if(req.body.skillpoints == undefined || req.body.challenge == undefined || req.body.user_id == undefined)
        {
            res.status(400).json({
                message: "Error: skillpoints is undefined"
            });
            return;
        }

        if (challengeData.creator_id !== user_id) {
            return res.status(403).json({ error: 'Forbidden: Only the creator can update the challenge' });
          }
    
        const data = {
            skillpoints: req.body.skillpoints,
            challenge: req.body.challenge,
            user_id: req.body.user_id,
            challenge_id: req.params.challenge_id
        
        }
        const response = {
            challenge_id: parseInt(challenge_id, 10),
            challenge,
            creator_id: user_id,
            skillpoints,
          };
    
        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error updateChallengeById:", error);
                res.status(500).json(error);
            } else {
                if(results.affectedRows == 0) 
                {
                    res.status(404).json({
                        message: "Challenge not found"
                    });  
                }
                else res.status(200).json(response);
            }
        }
    
        model.updateById(data, callback);
    }


    
// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR DELETE CHALLENGE BY ID //task 7
// ##############################################################
    

module.exports.deleteChallengeById = (req, res, next) =>
    {
        const data = {
            challenge_id: req.params.challenge_id
        }
    
        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error deleteChallengeById:", error);
                res.status(500).json(error);
            } else {
                if(results.affectedRows == 0) 
                { 
                    if(req.params.id) {
                        res.status(404).json({
                            message: "Challenge not found"
                        });         
                    }

                }
                else res.status(204).send();           
            }
        }
    
        model.deleteById(data, callback);
    }
   
// #######################################################################################
// DEFINE CONTROLLER FUNCTION FOR CREATE COMPLETION RECORD BY ID //task 8
// #######################################################################################
    


    module.exports.createCompletionRecordById  = (req, res, next) =>
        {
            if(req.body.completed == undefined || req.body.creation_date == undefined || req.body.user_id == undefined  || req.body.notes == undefined)
                {
                    res.status(400).send("Error: Missing required data");
                    return;
                }
            
    
            const data = { 
                user_id: req.body.user_id, 
                completed: req.body.completed, 
                creation_date: req.body.creation_date, 
                notes: req.body.notes,
                challenge_id: req.params.challenge_id
        
            }
        
            const callback = (error, results, fields) => {
                if (error) {
                    console.error("Error createNewChallenge:", error);
                    res.status(500).json({
                        message: "internal server error",
                    });
                } else {
                    res.status(201).json({
                        complete_id: results.insertId,
                          challenge_id: res.locals.challenge_id,
                           user_id: res.locals.user_id,
                           completed: res.locals.completed,
                           creation_date: res.locals.creation_date,
                           notes: res.locals.notes
                    });
                }
            }
        
            model.insert(data, callback);
        }


           
// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR READ ALL CHALLENGE BY ID //task 9
// ##############################################################


module.exports.getChallengeById = (req, res, next) =>
    {
        const data = {
            challenge_id: req.params.challenge_id
        }
    
        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error readChallengeById:", error);
                res.status(500).json(error);
            } else {
                if(results.length == 0) 
                {
                    res.status(404).json({
                        message: "No participants found for this challenge"
                    });
                }
                else res.status(200).json(results);
            }
        }
    
        model.selectById(data, callback);
    }
    