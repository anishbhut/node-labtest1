var express = require('express'),
app = express(),
bodyParser = require('body-parser');
port = process.env.PORT || 3000;

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'labtestcrud'
});
 
// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var routes = require('./app/routes/approutes'); //importing route
routes(app); 

app.get('*', function(req, res){
   //res.send('404 : Route Not Found', 404);
    res.send({ error:true, message: '404 : Route Not Found' });
  });
  

console.log('todo list RESTful API server started on: ' + port);