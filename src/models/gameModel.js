// ##############################################################
// REQUIRE MODULES
// ##############################################################
const pool = require('../services/db');

   
// ##############################################################
// get all styles
// ##############################################################


module.exports.selectAllStyles = (callback) =>
    {
        const SQLSTATMENT = `
        SELECT * FROM FashionStyle
        `;
    
    pool.query(SQLSTATMENT, callback);
    }
    
// ##############################################################
// createPlayerUserRel // create new player
// ##############################################################
module.exports.insertPlayerUserRel = (data, callback) => {
    const SQLSTATEMENT = `
        INSERT INTO PlayerUserRel (user_id, player_id) 
        VALUES (?, ?)
    `;

    const VALUES = [data.userId, data.playerId];

    pool.query(SQLSTATEMENT, VALUES, callback);
};


module.exports.insertSingle = (data, callback) =>
    {
        const SQLSTATMENT = `
        INSERT INTO Player (name, age) 
        VALUES (?, ?)
        `;
    const VALUES = [data.name, data.age];
    
    pool.query(SQLSTATMENT, VALUES, callback);
    }

// ##############################################################
// get all players
// ##############################################################
module.exports.selectAll = (callback) =>
    {
        const SQLSTATMENT = `
        SELECT * FROM Player; 
       `;
    
    pool.query(SQLSTATMENT, callback);
    }

             
// ##############################################################
// add outfit
//  #############################################################

module.exports.addStyleToPlayer = (data, callback) => {
    const SQLSTATEMENT = `
        INSERT INTO PlayerFashionStyle (player_id, clothing_id) 
        VALUES (?, ?)
    `;
    
    const VALUES = [data.playerId, data.clothingId];

    pool.query(SQLSTATEMENT, VALUES, callback);
};

                 
// ##############################################################
//  delete player by user
//  #############################################################

module.exports.deleteByUser = (data, callback) => {
    const SQLSTATEMENT = `
 DELETE FROM PLAYER
 WHERE user_id = ?  AND player_id = ?
    `
    const VALUES = [data.user_id, data.player_id];

    pool.query(SQLSTATEMENT, VALUES, callback);
}