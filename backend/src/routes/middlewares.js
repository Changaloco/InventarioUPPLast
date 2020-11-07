const jwt = require('jwt-simple');
const moment = require('moment');
//functions
const checkToken = (req, res, next)=>{
if(!req.headers['user-token']){
    return res.json({error: 'Token no incluido'});
}

const userToken =req.headers['user-token'];
let payload ={};
 try {
    payload = jwt.decode(userToken,'frase secreta');
}catch(err){
    return res.json({error: 'token incorrecto'});

}
if(payload.expiredAt < moment().unix() ){
return res.json({error:'el token ha expirado'});
}

req.usuarioId = payload.usuarioId;

next();
}



//exports 
module.exports ={
    checkToken: checkToken
}