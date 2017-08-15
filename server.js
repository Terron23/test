const express = require('express');
const app = express();
//Jwt use for Encryption
const jwt = require('express-jwt');
const jwtToken = require('jsonwebtoken')
//body parser parses info into the body of a webpage
//It is a middleware
const bodyParser = require('body-parser')
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
const schema = require('./schema');
//Whenever you want use middleware utilize the app.use function
//Whenever you use middleware utilize a callback function
//Whenever you use a middlewar function utilize a callback function
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.get('/', function(req, res) {
    
        res.write('Hello')
        res.end()
        
}) 
//Middleware
app.use(function(req,res, next) {
    console.log(req.headers)
    next()
})

app.post('/login', function(req, res) {
    schema.User.findAll({
        where: {
           email:  req.body.email
        }
    })
.then(function(data) {
    const user = data[0].dataValues
    if(user.password === request.body.password) {
        response.send("its the same")
    }
    const token = jwt.sign( {
        name: user.name,
        admin: user.admin,
    }, 'ilovelucy', {
        expiresIn: 60
    
    })
    console.log(token)
    responseHeader('Authorization', token.toString())
    console.log(data)
    res.send("hey")
})
})

//Use app.post to grab information
// app.get grabs information
// Updates information

app.post('/users', function(request, response) {
    console.log(req.method)
    console.log(req.headers)
    console.log(req.body)
    //Creates new User
    schema.User.create({
        username: req.body.userame,
        password: request.body.password,
        admin: false
    }).then(function(){
        response.status(201)
    })
    
})

//used to create secret: jwt({secret: "Cooling"})

app.get('/babyNames', function(req, res) {
schema.babyName.findAll().then(function(data) {
res.json(data);
})
})

app.listen(3000, function() {
    console.log("Hello World")
})