
// ##############################################################
// DEFINE INSERT OPERATION FOR USER // task 1
// ##############################################################

// module.exports.insertSingle = (data, callback) =>
//     {
//         const SQLSTATMENT = `
//         INSERT INTO User (username, skillpoints)
//         VALUES (?, 0);
//         `;
//     const VALUES = [data.username, data.skillpoints];
    
//     pool.query(SQLSTATMENT, VALUES, callback);
//     }


    
// ##############################################################
// DEFINE SELECT ALL OPERATIONS FOR USERS //task 2
// ##############################################################
// module.exports.selectAll = (callback) =>
//     {
//         const SQLSTATMENT = `
//         SELECT * FROM User; 
//        `;
    
//     pool.query(SQLSTATMENT, callback);
//     }


 
// ##############################################################
// DEFINE UPDATE OPERATIONS FOR USER //task 3
// ##############################################################
// module.exports.updateById = (data, callback) =>
//     {
//         const SQLSTATMENT = `
//         UPDATE User
//         SET skillpoints = ?,username = ?
//         WHERE user_id = ?;
//         `;
//     const VALUES = [data.skillpoints, data.username, data.user_id];
    
//     pool.query(SQLSTATMENT, VALUES, callback);
//     }


    /////////////////////////// model for login and register

 //////////////////////////////////////////////////////
// REQUIRE MODULES
//////////////////////////////////////////////////////
const pool = require('../services/db');

//////////////////////////////////////////////////////
// SELECT ALL PLAYERS BY USER
//////////////////////////////////////////////////////
module.exports.selectAll = (callback) =>
    {
        const SQLSTATMENT = `
        SELECT * FROM User;
        `;
    
    pool.query(SQLSTATMENT, callback);
    }    

//////////////////////////////////////////////////////
// SELECT USER BY USERNAME
//////////////////////////////////////////////////////
module.exports.selectUserByUsername = (data, callback) =>
    {
        const SQLSTATMENT = `
        SELECT * FROM User
        WHERE username = ?;
        `;
    const VALUES = [data.username];
    
    pool.query(SQLSTATMENT, VALUES, callback);
    }
    

//////////////////////////////////////////////////////
// SELECT USER BY USERNAME OR EMAIL
//////////////////////////////////////////////////////

module.exports.selectUserByUsernameOrEmail = (data, callback) =>
    {
        const SQLSTATMENT = `
        SELECT * FROM User
        WHERE username = ? OR email = ?;
        `;
    const VALUES = [data.username, data.email];
    
    pool.query(SQLSTATMENT, VALUES, callback);
    }

    module.exports.insertUser = (data, callback) =>
        {
            const SQLSTATMENT = `
            INSERT INTO User (username, email, password) 
            VALUES (?, ?, ?)
            `;
        const VALUES = [data.username, data.email, data.password];
        
        pool.query(SQLSTATMENT, VALUES, callback);
        }