// ##############################################################
// REQUIRE MODULES
// ##############################################################
const model = require("../models/userModel.js");


// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR CREATE USER// Task 1
// ##############################################################
module.exports.createNewUser = (req, res, next) => {
    if(req.body.username == undefined)
        {
            res.status(400).send("Error: Missing required data");
            return;
        }
    
        const data = { 
        username: req.body.username,
        skillpoints:res.locals.skillpoints
        }
    
        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error createNewUser:", error);
                res.status(500).json({
                    message: "internal server error",
                });
            } else  {
                if(results.length == 0) 
                {
                    res.status(409).json({
                        message: "User already exists"
                    });
                }
                else {
                res.status(201).json({
                     user_id: results.insertId,
                     username: res.locals.username,
                     skillpoints:res.locals.skillpoints

                });
            }
        }}
    
        model.insertSingle(data, callback);
}



// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR READ ALL USER// Task 2
// ##############################################################

module.exports.readAllUsers = (req, res, next) =>
    {
        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error readAlluser:", error);
                res.status(500).json(error);
            } 
            else res.status(200).json(results);
        }
    
        model.selectAll(callback);
    }


 
// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR UPDATE USER BY ID //task 3
// ##############################################################

module.exports.updateUserById = (req, res, next) =>
    {
        if(req.body.skillpoints == undefined || req.body.username == undefined)
        {
            res.status(400).json({
                message: "Error: skillpoints and username is undefined"
            });
            return;
        }
    
        const data = {
            skillpoints: req.body.skillpoints,
            username: req.body.username,
            user_id: req.params.user_id
        
        }
    
        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error updateUserById:", error);
                res.status(500).json(error);
            } else {
                if(results.affectedRows == 0) 
                {
                    res.status(404).json({
                        message: "User not found"
                    });  
                }
                else res.status(201).json(results);
            }
        }
    
        model.updateById(data, callback);
    }


//###########################################################################################


//////////////////////////////////////////////////////
// CONTROLLER FOR LOGIN
//////////////////////////////////////////////////////

module.exports.login = (req, res, next) => {
    if(req.body.username == undefined|| req.body.password == undefined) {
        res.status(404).send("Error: Usernameor password is undefined");
        return;
    }

    const data = {
        username: req.body.username,
       
    }

    const callback = (error, results, field) => {
        if(error) {
            console.error("Error register", error);
            res.status(500).json(error);
        } else {
            if(results.length == 0) {
                res.status(404).json({
                    message: "User not found"
                });
            } else {
            res.locals.userId = results[0].id;
            res.locals.username = results[0].username;
            res.locals.hash = results[0].password;
            res.locals.message = "User " + req.body.username + " logged in successfully";
         next();
        }}
    }
    model.selectUserByUsername(data, callback);
}

//////////////////////////////////////////////////////
// CONTROLLER FOR REGISTER
//////////////////////////////////////////////////////


module.exports.register = (req, res, next) => {
    if(req.body.username == undefined || req.body.email == undefined || req.body.password == undefined) {
        res.status(404).send("Error: Username, password or email is undefined");
        return;
    }

    const data = {
        username: req.body.username,
        email: req.body.email,
        password: res.locals.hash
    }

    const callback = (error, results, field) => {
        if(error) {
            console.error("Error register", error);
            res.status(500).json(error);
        } else {
            res.locals.userId == results.insertId,
            res.locals.message = "User " + req.body.username + " created successfully";
         next();
        }
    }
    model.insertUser(data, callback);
}
//////////////////////////////////////////////////////
// MIDDLEWARE FOR CHECK IF USERNAME OR EMAIL EXISTS
//////////////////////////////////////////////////////
module.exports.checkUsernameOrEmailExist = (req, res, next) => {
    if(req.body.username == undefined || req.body.email == undefined) {
        res.status(404).send("Error: Username or email is undefined");
        return;
    }

    const data = {
        username: req.body.username,
        email: req.body.email
    }

    const callback = (error, results, field) => {
        if(error) {
            console.error("Error checkUsernameOrEmail", error);
            res.status(500).json(error);
        } else {
            if(results.length > 0) {
                res.status(409).json({
                    message: "Username or email already exists"
                });
            } else next();
        }
    };
    model.selectUserByUsernameOrEmail(data, callback);
}

//////////////////////////////////////////////////////
// MIDDLWARE FOR CHECK IF PLAYER BELONGS TO USER
//////////////////////////////////////////////////////


