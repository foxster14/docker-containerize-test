const { Console } = require('console');
var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  ////res.send('respond with a resource');

  let boxerData = fs.readFileSync('./boxers.json');
  var siteBoxers = JSON.parse(boxerData);

  //Assigning the parsed array of objects read-in from boxers.json to a variable called createdBoxers
  var createdBoxers = siteBoxers; //why?
  
  //Misc Testing Stuff//
  /*console.log(typeof(createdBoxers)+ " \ncreated boxers");
  console.log(typeof(siteBoxers)+ " \nsiteBoxer parsed JSON");
  console.log(typeof(boxerData)+ " \nboxer data straight from JSON file");
  */


  res.render('boxer', {createdBoxers});

});

module.exports = router;
