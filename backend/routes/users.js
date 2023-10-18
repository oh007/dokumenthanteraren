var express = require('express');
var router = express.Router();
const app = require('../app')

const mysql= require("mysql2")
/* GET users listing. */
router.get('/', function(req, res, next) {
req.app.locals.con.connect

  res.send('respond with a resource');
});

module.exports = router;
