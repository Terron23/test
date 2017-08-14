const sql = require('mssql');
var http = require('http');


const pool = new sql.ConnectionPool({
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

pool.connect().then(() => {
  //simple query
  pool.request().query('select * from babythings', (err, result) => {
        console.log(result)
    })
})





