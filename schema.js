var sequelize = require('sequelize');
var sq = new sequelize('SSIS', 'terron23', 'kobesmalls23', {
    dialect: 'mssql',
  server: 'localhost\\TMJSQLEXPRESS', //'LAPTOP-5QCDNMK9\
  port: '1433',
  driver: 'msql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});
//module.exports helps export data to ANOTHER FILE
module.exports = sq.define('babyName', {
    birthYear: {
        type: sequelize.INTEGER
    },
    gender: {
       type: sequelize.STRING 
    },
    ethnicity: {
        type: sequelize.STRING
    },
    name: {
        type: sequelize.STRING
    },
    count: {
        type: sequelize.INTEGER
    },
    rank: {
        type: sequelize.INTEGER
    }
});