const router  = require('express').Router();
const bcrypt  = require('bcryptjs');
const {User} =  require('../../db');
const {check,validationResult} =require('express-validator');


//functions
router.post('/register',[
    check('username','elnombre es obligatorio').not().isEmpty(),
    check('password','la contrasena es obligatoria').not().isEmpty(),
    check('email','el email debe ser correcto').isEmail()
    
],async (req, res) =>{

    const errors  = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({ errores: errors.array()});
    }
    req.body.password =  bcrypt.hashSync(req.body.password,10);
    const user = await User.create(req.body);
    res.json(user);
});



//exports 

module.exports = router;