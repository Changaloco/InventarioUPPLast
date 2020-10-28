const router = require('express').Router();
const middleware = require('./middlewares');
const apiTestRouter = require('./api/tests');
const apiUserRoute = require('./api/users');


router.use('/tests',middleware.checkToken,apiTestRouter);
router.use('/users',apiUserRoute);



module.exports =router;