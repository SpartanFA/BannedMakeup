const express = require("express")
const app = express()
const port = 4000
const cors = require("cors")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

var mysql = require('mysql');
var connection  = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'Spartan2#',
    database: 'sakila'
});

connection.connect();

connection.query('Select * From Actor', function(error, results, fields){
    if(error) throw error;
    console.log('the solution is: ', fields);
});

app.get("/", cors(), async(req, res) =>{

    res.send("This is working")
    console.log("RECEIVERING")
})

app.listen(8080, () =>{
    console.log('Listening at port 8080')
})

connection.end();
module.exports = app;