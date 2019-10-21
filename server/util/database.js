// const mysql = require('mysql');

// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'mentorship_forum',
//     password: ''
// });



// module.exports = conn;
const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('mentorship_forum', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging:false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;