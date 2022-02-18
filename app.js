const express = require('express');
const app = express();
const config = require("./config").config;

if (process.env.NODE_ENV == 'production') {
   console.log("Production Mode");
} else if (process.env.NODE_ENV == 'development') {
   console.log("Development Mode");
}

const mysql = require('mysql');
const connection = mysql.createConnection({
   host: config.db.host,
   user: config.db.user,
   password: config.db.password,
   database: config.db.database
})

connection.connect();

connection.query('SELECT 1 + 1 AS solution', 
function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
connection.end();


app.get('/', (req, res, next) => {
   console.log(`Caliing '/'...`);
   res.status(200).send('Hello World, 2022 🐯🐯🐯!')
})

app.listen(config.port, ()=>{
   console.log(`Server is on port no.${config.port}...👂`);
}).on('error', (err)=>{
   console.log(`Server listening error...${err}`)
})