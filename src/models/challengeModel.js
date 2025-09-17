// ##############################################################
// REQUIRE MODULES
// ##############################################################
const pool = require('../services/db');


// ##############################################################
// DEFINE INSERT OPERATION FOR CHALLENGE // task 4
// ##############################################################

module.exports.insertSingle = (data, callback) => {
    const SQLSTATEMENT = `
      INSERT INTO FitnessChallenge (creator_id, challenge, skillpoints) 
      VALUES (?, ?, ?)
    `;
    const VALUES = [data.creator_id, data.challenge, data.skillpoints]; // Correct order
  
    pool.query(SQLSTATEMENT, VALUES, callback);
  };
  


       
// ##############################################################
// DEFINE SELECT ALL OPERATIONS FOR CHALLENGES //task 5
// ##############################################################
module.exports.selectAll = (callback) =>
    {
        const SQLSTATMENT = `
        SELECT * FROM FitnessChallenge; 
       `;
    
    pool.query(SQLSTATMENT, callback);
    }

          
// ##############################################################
// DEFINE UPDATE OPERATIONS FOR CHALLENGES //task 6
//  #############################################################

module.exports.updateById = (data, callback) =>
    {
        const SQLSTATMENT = `
       UPDATE FitnessChallenge 
      SET challenge = ?, skillpoints = ? 
      WHERE challenge_id = ?
        `;
    const VALUES = [data.skillpoints, data.username, data.user_id];
    
    pool.query(SQLSTATMENT, VALUES, callback);
    }

    
// ##############################################################
// DEFINE DELETE OPERATIONS FOR CHALLENGE // task 7
// ##############################################################

module.exports.deleteById = (data, callback) =>
    {
        const SQLSTATMENT = `
        DELETE FROM FitnessChallenge 
       WHERE challenge_id = ?
        `;
    const VALUES = [data.challenge_id];
    
    pool.query(SQLSTATMENT, VALUES, callback);
    }

    
// ##############################################################
// DEFINE INSERT OPERATION FOR CHALLENGE // task 8
// ##############################################################

module.exports.insert = (data, callback) =>
    {
        const SQLSTATMENT = `
        INSERT INTO UserCompletion (challenge_id, user_id, completed, creation_date, notes)
    VALUES (?, ?, ?, ?,?)
        `;
    const VALUES = [data.challenge_id, data.user_id, data.completed, data.creation_date, data.notes];
    
    pool.query(SQLSTATMENT, VALUES, callback);
    }
   

    
// ##############################################################
// DEFINE SELECT BY ID OPERATIONS FOR CHALLENGE
// ##############################################################

module.exports.selectById = (data, callback) =>
    {
        const SQLSTATMENT = `
         SELECT user_id, completed, creation_date, notes FROM UserCompletion 
    WHERE challenge_id = ?
        `;
    const VALUES = [data.user_id, data.completed, data.creation_date, data.notes, data.challenge_id];
    
    pool.query(SQLSTATMENT, VALUES, callback);
    }
