const Pool = require('pg').Pool


module.exports = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'nusery',
    password: '12345',
    port: 5432,
})