var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/login', function (req, res, next) {
    
});

router.get('/', function (req, res) {

});

router.get('/signup', function (req, res, next) {

});
// process the login form
router.post('/login', passport.authenticate('local-login', {
    
}));


// app.post('/signup', do all our passport stuff here);
router.post('/signup', passport.authenticate('local-signup', {
    
}));

router.get('/profile', isLoggedIn, function (req, res) {
    
});

// =====================================
// LOGOUT ==============================
// =====================================
router.get('/logout', function (req, res) {
    
});
// };

router.post('/login', passport.authenticate('local-login', {
    
}));

router.get('/contact', function (req, res) {
    
})


module.exports = router;