
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
 pool.connect().then(() => {
  //simple query
  pool.request().query('select top (1) from babythings', (err, result) => {
        console.dir(result)
    })
 })