module.exports = (sequelize, type)=>{
    return sequelize.define('user',{
        id : {
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        UsuarioNombre: type.STRING,
        UsuarioApellidoP: type.STRING,
        UsuarioApellidoM: type.STRING,
        NombreUsuario: type.STRING,
        UsuarioCorreo: type.STRING,
        UsuarioContraseña: type.STRING,
        TipoUsuario: type.STRING,
        AreaUsuario: type.STRING

        /*matricula: type.STRING,
        username: type.STRING,
        email: type.STRING,
        password: type.STRING(150)*/
    })   
}
