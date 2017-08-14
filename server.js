const express = require('express');
const app = express();
const sequelize = require('sequelize');
const sql = require('mssql');
const sq = new sequelize('SSIS', 'terron23', 'kobesmalls23', {
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
const babyName = require('./schema');
var pool = new sql.ConnectionPool({
   user:'terron23',
   password: 'kobesmalls23',
  database: 'SSIS',
  server: 'localhost\\TMJSQLEXPRESS', //'LAPTOP-5QCDNMK9\
  port: '1433',
  driver: 'msql',
  options: {
    trustedConnection: true
  }
})
var t = pool.connect().then(() => {
  //simple query
  pool.request().query('select * from babythings', (err, result) => {
        console.dir(result)
    })
})


app.get('/babyNames', function(req, res) {
    
        res.render(t)
        
        //console.dir(result)

    
    //res.send('Wht i do')
}) 
//Middleware
app.use(function(req,res, next) {
    console.log(req.headers)
    next()
})

app.get('/babyNames', function(req, res) {
babyName.findAll().then(function(data) {

})
})

app.listen(3000, function() {
    console.log("Hello World")
})