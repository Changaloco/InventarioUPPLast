const {Router} = require('express');
const router = Router();
const {getTest,createTest,updateTest,deleteTest} = require('../controllers/tests.controller');


router.route('/')
    .get(getTest)
    .post(createTest);


router.route('/:id')
    .delete(updateTest)
    .put(deleteTest);


module.exports = router;

