var fs = require('fs');
var Sequelize = require('sequelize')
var sq = new Sequelize('mssql://tmj72@localhost:5432/SSIS');

sq.authenticate()
.then(function() {
    console.log("Successfully established connection");
})
.catch(function(err) {
console.log('unable to connect to database', err);
})