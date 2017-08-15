var fs = require('fs');
const sequelize = require('sequelize');
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
const sql = require('mssql');

sq.authenticate()
    .then(function() {
        console.log("Successfully Connected");
    })
    .catch(function (err) {
        console.log("Unable to connect to db", err);
    });

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

fs.readFile('babyNames.csv', function(err, data){
    if(err){
       console.log(err)
       throw err 
    } 

    var parsedData = data.toString('utf-8')
    var result = parsedData.split('\n').slice(1).map(function(intel){
        var pieceOfData = intel.split(',');
        return {
            birthYear: parseInt(pieceOfData[0]) || 0,
            gender: pieceOfData[1] || '',
            ethnicity: pieceOfData[2] || '',
            name: pieceOfData[3] || '',
            count: parseInt(pieceOfData[4]) || 0,
            rank: parseInt(pieceOfData[5]) || 0
        }
    }) 
    babyName.sync({force: true}).then(() => {
       babyName.bulkCreate(result)    
    })      
})