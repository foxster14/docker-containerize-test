var express = require('express');
const { Console } = require('console');
var router = express.Router();
var fs = require('fs');
var userData = require('../users.json');

/* GET users listing. */
router.post('/', function(req, res, next) {

    var emailUserEntered = req.body.email; // email user entered
    var passwordUserEntered = req.body.password; //password user entered

    console.log(emailUserEntered);
    console.log(passwordUserEntered);

    /*if (userData.filter(x => x.email === emailUserEntered && x.password == passwordUserEntered)){
        res.render('loggedin', { email: String(emailUserEntered)})
        console.log("success");
    }*/

    for(var i = 0; i < userData.length; i++){

        if(userData[i].email === emailUserEntered && userData[i].password == passwordUserEntered) {
            res.render('loggedin', { email: String(emailUserEntered)})
            //break;
        }
        else{
            console.log("error");
            res.redirect(req.get('referer'));
            //break;
        }

    }


    
});

module.exports = router;