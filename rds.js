var mysql = require('mysql');


var rdsUrl = 'vya-aurora-database-instance-1.czbwpwm83uag.us-east-1.rds.amazonaws.com';
var password =  'passworD&7';
var user = 'admin';

// mysql connection pool
var rdsPool = mysql.createPool({
    connectionLimit : 12,
    host: rdsUrl,
    password: password,
    user: user
});

module.exports.pool = rdsPool;
module.exports.url = rdsUrl;
