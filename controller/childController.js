const database = require('../database')

module.exports = {
    getDataForProfile(req, res) {
        database.query(`SELECT id,name,gender,weight,height, date FROM child`, (err, results) => {
            if (err) {
                console.log(err);
            }
            console.log(results.rows);
            res.json(results.rows)
        })
    },

    deleteChild(req, res) {
        const id = parseInt(req.params.id)

        database.query('DELETE FROM child WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`User deleted with ID: ${id}`)
        })
    },
    createChild(req, res) {
        console.log(req.body);
        const { applicationdate, name, nickname, race, nationality, religion, date, weight, height, number_of_siblings, child_number, child_id, history_accident_illness, immunization_record, gender } = req.body
        if (applicationdate === '' || name === '' || nickname === '' || race === '' || nationality === '' || religion === '' || date === '' || number_of_siblings === '' || child_number === '' || weight === '' || height === '' || child_id === '' || history_accident_illness === '' || immunization_record === '' || gender === '') {
            res.json({ success: false, message: 'Please complete your information!!' })
        } else {
            database.query('INSERT INTO child ( applicationdate, name, nickname, race, nationality, religion, date, weight, height, number_of_siblings, child_number, child_id,history_accident_illness, immunization_record, gender) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)', [applicationdate, name, nickname, race, nationality, religion, date, weight, height, number_of_siblings, child_number, child_id, history_accident_illness, immunization_record, gender], (err, results) => {
                if (err) {
                    throw err
                }
                res.status(201).json({ success: true, message: 'Success to add child' })
            })
        }
    },
    uploadPhoto(req, res) {
        if (req.file) {
            const path = `/static/${req.file.filename}`
            const childID = req.params.id
            database.query(`UPDATE child SET child_photo = '${path}' WHERE child_id = '${childID}'`, (err, results) => {
                if (err) {
                    throw err
                }
                res.status(204).json({ success: true, message: 'Complete to create data' })
            })
        } else {
            console.log('failed to upload photo');
        }
    }
} 