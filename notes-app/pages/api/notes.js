const pool = require('../../lib/db')
// importing the pool from lib (older node.js way of importing)
//.. means "go up" 2 times means to go up 2 times 


export default async function handler(req, res) {
    // export is exporting it to other files
    // async because database queries take time,
    // req and res for incoming request and outgoing response
    if (req.method === 'GET') {
        //req.method -> when frontent makes a fetch call, the HTTP request includes a method - GET, POST, PUT, or DELETE.
        // Next.js receives that request and puts everything about it inside the req object. 
        // So, req.method is just reading the value. 
        // If the frontent called fetch('/api/notes',{ method: 'POST'}), then req.method equals the string 'POST'.

        try { //anytime you talk to a database, an external API, or read a file - anything outside your own program - you wrap it in try/catch. its a standard practice.
            const result = await pool.query('SELECT * FROM notes ORDER BY created_at DESC')
            res.status(200).json(result.rows)
            //results gives a lot of information while actual data lives only on resut.row, so to get only the result we do result.rows
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch notes'})
        }
    } else if (req.method === 'POST') {
        try{
            const {title, content } = req.body
            // frontend gives the values of title and content in the form of request where the body is those. so the body is again given into constants. 
            const result = await pool.query(
                'INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *',
                [title, content]
                // $1, $2 is used as the placeholder on what to search and it is given after the SQL as [title, content]
                // Using $1, $2, placeholder tells PostgreSQL to treat those values as pure data, never as SQL code. This is non-negotiable in real applications to prevent SQL injection attack
                // RETURNING * - returns the data back with the id and its other values
            )
            res.status(201).json(result.rows[0])
            // results.rows[0] is used to unwrap it from array. the results.rows is given as [{}], we use rows[0] to get only the {}
        } catch (error) {
            res.status(500).json({ error: 'Failed to create note' })
        }

    } else if (req.method === 'PUT') {
        try{
            const { id, title, content } = req.body
            const result = await pool.query(
                'UPDATE notes SET title = $1, content = $2 WHERE id =$3 RETURNING *',
                [title, content, id]
            )
            res.status(200).json(result.rows[0])
        } catch (error) {
            res.status(500).json({ error: 'Failed to create note'})
        }
        

    } else if (req.method === 'DELETE') {
        try{
            const { id } = req.body
            await pool.query(
                'DELETE FROM notes WHERE id=$1', 
                [id]
            ) 
            res.status(200).json({ message: 'Note deleted'})
        } catch(error) {
            res.status(500).json({ error: 'Failed to create note'})
        }
    }
}