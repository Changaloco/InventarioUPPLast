const {Router} = require('express');
const router = Router();
const{createUser,getUser,loginUser,updateUser,deleteUser} = require('../controllers/users.controller');


router.route('/login:id')
    .post(loginUser)
    


router.route('/')
    .get(getUser)
    .post(createUser);

router.route('/:id')
    .put(updateUser)
    .delete(deleteUser);


module.exports = router;
