// src/config/database.js
require('dotenv').config(); // Use require para ser compatível com o CLI
const { Sequelize } = require('sequelize');

// Objeto de configuração que o CLI vai ler
const config = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'mysql'
  },
};

const sequelize = new Sequelize(config.development.url, {
  dialect: config.development.dialect
});

module.exports = {
  ...config,    
  sequelize       
};
