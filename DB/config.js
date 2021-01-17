const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cytranslator'
})

// Connect to MySQL
connection.connect()

module.exports = connection;