const { Console } = require('console');
var express = require('express');
var router = express.Router();
var fs = require('fs');
const { type } = require('os');
var user = require('../model/userstructure.js');

/* Create Boxer */
router.post('/', function(req, res, next) {

    let userPassword = req.body.password;
    var passwordLength = userPassword.length;

    if (passwordLength >= 8){

        user.email = req.body.email; 
        user.password = req.body.password;

        //outputting boxer to console to verify that boxer was created
        console.log(user);
  
        //reading boxers from boxers.json file and assigning user to boxerData variable
        let userData = fs.readFileSync('./users.json');

        console.log("userData variable\n",userData);
    
        //The JSON.parse() is converting the string to JS objects
        let siteUsers = JSON.parse(userData);

        console.log("siteUsers variable\n",siteUsers);
    
        siteUsers.push(user);
    
        /**Now that the boxer has been added to the array, the JSON.stringify() method converts the JS array
        * into a string so that we can override the boxers.json file and write the updated array of objects to boxers.json file
        **/ 
        const usersString = JSON.stringify(siteUsers)
        fs.writeFile('./users.json', usersString, err => {
            //error handling if, issue arises with file, else output to successfully wrote file
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    
        //Render the new boxer object to display view
        res.render('displayusers', user);

    }

    else {
        res.redirect(req.get('referer'));
        console.log("error with password length" + type(userPassword))
    }
  
    
  });

module.exports = router;