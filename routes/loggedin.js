var express = require('express');
const { Console } = require('console');
var router = express.Router();
var fs = require('fs');
var userData = require('../users.json');

/* GET users listing. */
router.post('/', function(req, res, next) {

    //let userData = fs.readFileSync('./users.json');
    //let siteUsers = JSON.parse(userData);

    var emailUserEntered = req.body.email; // email user entered
    var passwordUserEntered = req.body.password; //password user entered

    console.log(emailUserEntered);

    for(var i = 0; i < userData.length; i++){

        if(userData[i].email === emailUserEntered && userData[i].password == passwordUserEntered) {
            res.render('loggedin', { email: String(emailUserEntered)})
            break;
        }
        else{
            console.log("error");
            break;
        }

    }


    /*let userPassword = req.body.password;
    let userEmail = req.body.email;

    var result1 = userData.filter(x => x.password === userPassword);
    var result2 = userData.filter(x => x.email == userEmail);*/

    
});

module.exports = router;