const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cytranslator'
})


//For Heroku Server


// const connection = mysql.createConnection({
//   host: 'us-cdbr-east-03.cleardb.com',
//   user: 'b83390b77425af',
//   password: 'abaca946',
//   database: 'heroku_52228eb2a81f0d2'
// })



// Connect to MySQL
connection.connect()

module.exports = connection;