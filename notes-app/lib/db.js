const { Pool } = require('pg')
// Pool is a set of connections that stay open and ready. Instead of creating a new connection every time, your app grabs one from the pool, uses it, puts it back. Faster, more efficient. 

const pool = new Pool({
    user: 'sunam',
    host: 'localhost',
    database: 'notesapp',
    password: '',
    port: 5432,
})
// creates the connection to the pool. 
// user is used because PostgreSQL is using the system user
// host is where database server is running. localhost
// database - which database to connect to. This is the notesapp database we created
// password - empty because local postgresql on mac doesn't require a password by default
// port - postgresql always runs on port 5432 by default, same way FastAPI ran on 8000

module.exports = pool
//exports the pool so other file can import it. 