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
    //var parsedData = JSON.parse(userData); //puts it into javascript object notation
    var isfound = false; //flag variable (once it finds something, you raise the flag to break the loop)
    for(var i = 0; i < userData.length; i++){

        console.log(userData[i].email);

        if(userData[i].email == emailUserEntered && userData[i].password == passwordUserEntered) {
            isfound = true;
            i = userData.length;
            res.render('loggedin', { email: emailUserEntered});
        }

    }

    if(isfound == false){
        res.redirect(req.get('referer')); //reload page
    }

    
});

module.exports = router;