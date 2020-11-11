module.exports = (sequelize, type)=>{
    return sequelize.define('user',{
        id : {
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        UsuarioNombre: type.STRING,
        UsuarioApellidoP: typeSTRING,
        UsuarioApellidoM: typeSTRING,
        NombreUsuario: typeSTRING,
        UsuarioCorreo: typeSTRING,
        UsuarioContraseña: typeSTRING,
        TipoUsuario: typeSTRING,
        AreaUsuario: typeSTRING

        /*matricula: type.STRING,
        username: type.STRING,
        email: type.STRING,
        password: type.STRING(150)*/
    })   
}