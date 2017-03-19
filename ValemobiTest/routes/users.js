var express = require('express');
var router = express.Router();

//register route
router.get('/register', function(req, res) {
    res.render('register');
});

//login route
router.get('/login', function(req, res) {
    res.render('login');
});

//logout route
router.get('/logout', function(req, res) {
    res.render('logout');
});

module.exports = router;