const router = require('express').Router();

const apiTestRouter = require('./api/tests');
const apiUserRoute = require('./api/users');


router.use('/tests',apiTestRouter);
router.use('/users',apiUserRoute);



module.exports =router;