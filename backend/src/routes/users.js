const {Router} = require('express');
const router = Router();
const{createUser,getUser,loginUser} = require('../controllers/users.controller');


router.route('/login:id')
    .post(loginUser);


router.route('/')
    .get(getUser)
    .post(createUser);


module.exports = router;