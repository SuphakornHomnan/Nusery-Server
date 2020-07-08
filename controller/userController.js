const database = require('../database')
const bcrypt = require('bcryptjs');
const saltRounds = 10;

module.exports = {
    getChild(req, res) {
        database.query('SELECT * FROM child', (err, results) => {
            if (err) {
                throw err
            }
            res.status(200).json(results.rows)
        })
    },
    login(req, res) {
        const { username, password } = req.body
        database.query(`SELECT password FROM users WHERE username = '${username}'`, (err, results) => {
            if (err) {
                throw err
            }
            console.log(results.rows);
            
            if (results.rows.length > 0) {
                const hash = results.rows[0].password
                bcrypt.compare(password, hash, (err, results) => {
                    if (results) {
                        res.json({ success: true, username: username, message: 'login success' })
                    } else {
                        res.json({ success: false, username: null, message: 'login failed' })
                    }
                })
            } else {
                res.json({ success: false, username: null, message: 'user not found' })
            }

        })
    },
    createUser(req, res) {
        console.log(req.body);
        const { username, password } = req.body

        //encrypt password
        bcrypt.hash(password, saltRounds, function (err, hash) {
            console.log(hash);
            database.query('INSERT INTO users (username,password) VALUES ($1, $2)', [username, hash], (error, results) => {
                if (error) {
                    throw error
                }
                res.status(201).json({ success: true, message: 'Create new user' })
            })
        });




    },
    updateUser(req, res) {
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
    deleteUser(req, res) {
        const id = parseInt(req.params.id)

        database.query('DELETE FROM child WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`User deleted with ID: ${id}`)
        })
    }

}