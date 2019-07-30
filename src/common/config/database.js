const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'shop',
  prefix: 'shop_',
  encoding: 'utf8mb4',
  host: 'sh-cdb-iszun2gy.sql.tencentcdb.com',
  port: '63046',
  user: 'root',
  password: '1qazQWER@',
  dateStrings: true
};
