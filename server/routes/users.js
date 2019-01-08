var express = require('express');
var router = express.Router();
const UserController = require('../controller/UsersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',UserController.login );
router.post('/signup', UserController.signup);
router.post('/user-info', UserController.userInfo);

module.exports = router;
