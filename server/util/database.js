const Sequelize = require('sequelize');
const sequelize = new Sequelize('J19OFfvxXD', 'J19OFfvxXD', 'FmV0vm1N7A', {
  host: 'remotemysql.com',
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