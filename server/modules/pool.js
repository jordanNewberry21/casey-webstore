const pg = require('pg');
const url = require('url');

let config = {};

// the first if statement sets up the pool in the event
// a database_url is given when deployed to heroku
if (process.env.DATABASE_URL) {
    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');

    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: { rejectUnauthorized: false },
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    };
} else {
    config = {
        host: 'localhost', // server hosting the postgres database
        port: 5432,
        database: 'casey_store', // name of the local database to connect to
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000, // idle timer
    };
}

// create the pool that will be shared by the other modules
const pool = new pg.Pool(config);

// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err) => {
    console.log('Unexpected error on idle client', err);
    process.exit(-1);
});
  
module.exports = pool;