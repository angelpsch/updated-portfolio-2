'use strict';
var express = require('express');
var router = express.Router();

var resume = require('./resume.js');
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Home' });
});

app.listen(3000); 

module.exports = router;
