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
var user = sq.define('User', {
    email: {
type: sequelize.STRING
    },
    password: {
type: sequelize.STRING
    },
    name: {
type: sequelize.STRING
    }
})
//module.exports helps export data to ANOTHER FILE
var babyName = sq.define('babyName', {
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
//Need to sync table in order to create table
user.sync()
babyName.sync()
module.exports = {
    user: user,
    babyName: babyName
}