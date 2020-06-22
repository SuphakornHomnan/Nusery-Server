const Pool = require('pg').Pool

const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'nusery',
    password: '12345',
    port:5432,
})



//Get all users
const getChild = (req, res) => {
    pool.query('SELECT * FROM child', (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}


const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM child WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


const createUser = (request, response) => {
    const { name, code, date, weight, height } = request.body

    pool.query('INSERT INTO child (name, code, date, weight, height) VALUES ($1, $2, $3, $4, $5)', [name, code, date, weight, height], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${result.insertId}`)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { date, weight, height } = request.body

    pool.query(
        'UPDATE child SET  date = $1, height = $2, weight = $3 WHERE id = ' + id,
        [date, height, weight],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM child WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getChild,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}
