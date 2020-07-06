'use strict';
var express = require('express');
var router = express.Router();


// Get contact page
router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact Me' });
});

module.exports = router; 