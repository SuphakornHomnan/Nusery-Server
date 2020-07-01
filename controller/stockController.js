const database = require('../database')

module.exports = {
    createList(req, res) {
        const { name, amount } = req.body
        database.query('INSERT INTO stock (name, amount) VALUES ($1, $2)',[name,amount], (err, results) => {
            if (err) {
                throw err
            }
            res.status(201).send(`Stock added new`)
        })
    },
    getList(req, res) {
        database.query('SELECT * FROM stock', (err, results) => {
            if (err) {
                throw err
            }
            res.json(results.rows)
        })
    }
}