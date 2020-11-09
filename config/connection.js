const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'myPass12312020', //put your mysql db password here
  database: 'burgers_db',
});

// Make connection to db
connection.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log(`Database connected as id ${connection.threadId}`);
});

// Export connection
module.exports = connection;
