const CUsuarioCtrl = {};
const {CUsuario} = require ('../database');

CUsuarioCtrl.getCUsuario = async (req,res)=>{
    const CUsuarios = await CUsuario.findAll();
    res.json(CUsuarios);
};

CUsuarioCtrl.createCUsuario = async (req,res) =>{
    const{Version,AccountExpired,AccountLocked,Enable,Password,PasswordExpired,Username} = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({ errores: errors.array()});
    }
    req.body.Password =  bcrypt.hashSync(req.body.Password,10);
    const cusuario = await CUsuario.create(req.body);
    res.json(cusuario);
};

CUsuarioCtrl.updateCUsuario = async (req,res)=>{
    await CUsuario.update(req.body,{
        where: {id: req.params.CUsuarioId}
    });
    res.json({success: 'Actualizado con éxito.'});
}

CUsuarioCtrl.deleteCUsuario = async (req,res) =>{
    await CUsuario.destroy({
        where: {id: req.params.CUsuarioId}
    });
    res.json({success: 'Eliminado con éxito.'});
}