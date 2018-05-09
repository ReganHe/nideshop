const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'shop',
  prefix: 'shop_',
  encoding: 'utf8mb4',
  host: '47.100.20.158',
  port: '3306',
  user: 'acct',
  password: '2wsxVFR$',
  dateStrings: true
};
