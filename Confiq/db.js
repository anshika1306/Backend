const Sequelize = require('sequelize');

const db = new Sequelize('mysql://root:zEONqJcsCnJQqhTMLUOlxNSGcGrNkpoo@mysql.railway.internal:3306/railway', {
  dialect: 'mysql',
  logging: false,
});

module.exports = db;