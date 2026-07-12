const Sequelize = require('sequelize');

const db = new Sequelize('zomato', 'root', 'Sketch#2468', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

 

module.exports = db;