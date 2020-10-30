const router  = require('express').Router();
const bcrypt  = require('bcryptjs');
const {User} =  require('../../db');
const {check,validationResult} =require('express-validator');
const moment = require('moment');
const jwt =require('jwt-simple');

//functions
router.get('/',async (req, res) =>{
    
    const user =await  User.findAll();
    res.json(user);
});



router.post('/',[
    check('username','elnombre es obligatorio').not().isEmpty(),
    check('password','la contrasena es obligatoria').not().isEmpty(),
    check('email','el email debe ser correcto').isEmail()
    
],async (req, res) =>{
    
    const{username,email,password} = req.body;

    const errors  = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({ errores: errors.array()});
    }
    req.body.password =  bcrypt.hashSync(req.body.password,10);
    
    
    
    const user = await User.create(req.body);

    res.json(user);


});



router.post('/login',async (req, res) => {
const user = await User.findOne({where : {email: req.body.email}});
if (user){
    const iguales = bcrypt.compareSync(req.body.password, user.password);
    if(iguales){
        res.json({sucess : createToken(user)});

    }else{
        res.json({error: 'Usuario o contrasena invalido' });

    }
}else{
    res.json({error: 'Usuario o contrasena invalido'});
}
});




const createToken = (user)=>{
    const payload = {
        usuarioId : user.id,
        createdAt : moment().unix(),
        expiredAt : moment().add(5,'minutes').unix()
        
    }

    return jwt.encode(payload,'frase secreta');
}

//exports 

module.exports = router;
