const database = require('../database')

module.exports = {
    getChild(req, res){
        database.query('SELECT * FROM child', (err, results) => {
            if (err) {
                throw err
            }
            res.status(200).json(results.rows)
        })
    },
    getUserById(req, res){
        const id = parseInt(req.params.id)

        database.query('SELECT * FROM child WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results.rows)
        })
    },
    createUser(req, res){
        const { name, code, date, weight, height } = req.body

        database.query('INSERT INTO child (name, code, date, weight, height) VALUES ($1, $2, $3, $4, $5)', [name, code, date, weight, height], (error, results) => {
            if (error) {
                throw error
            }
            
            
            res.status(201).send(`User added new`)
        })
    },
    updateUser(req, res){
        const id = parseInt(req.params.id)
        const { date, weight, height } = req.body

        database.query(
            'UPDATE child SET  date = $1, height = $2, weight = $3 WHERE id = ' + id,
            [date, height, weight],
            (error, results) => {
                if (error) {
                    throw error
                }
                res.status(200).send(`User modified with ID: ${id}`)
            }
        )
    },
    deleteUser(req, res){
        const id = parseInt(req.params.id)

        database.query('DELETE FROM child WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`User deleted with ID: ${id}`)
        })
    }

}