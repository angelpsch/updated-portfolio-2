'use strict';
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Angel S.' });
});


// Get resume page
router.get('/resume', function (req, res) {
    res.render('resume', { title: 'My Resume' });
});

// Get portfolio page
router.get('/portfolio', function (req, res) {
    res.render('portfolio', { title: 'My Portfolio' });
});

// Get contact page
router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact Me' });
});


module.exports = router;
