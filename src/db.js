const Sequelize = require('sequelize');
const TestModel = require('./models/tests');

const sequelize = new Sequelize('brwgehunx80yggpclhz1','ubs2s7bwmryxlebw','aQ4iLFG7FfwzgCoqk2ME',{
    host : 'brwgehunx80yggpclhz1-mysql.services.clever-cloud.com',
    dialect : 'mysql'
}
);

const Test = TestModel(sequelize,Sequelize);


sequelize.sync({force: false})
        .then(() => {
            console.log( 'tablas sincronizadas')
        })


module.exports = {
    Test
}