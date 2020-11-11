module.exports = (sequelize, type)=>{
    return sequelize.define('CUsuario',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Version: type.STRING,
        AccountExpired: type.STRING,
        AccountLocked: type.STRING,
        Enable: type.STRING,
        Password: type.STRING,
        PasswordExpired: type.STRING,
        Username: type.STRING
    });
}