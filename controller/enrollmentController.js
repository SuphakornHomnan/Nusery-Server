const database = require('../database')

module.exports = {
    createEnroll(req, res) {
        console.log(req.body);
        const { name, age, id_card, house_number, moo, sub_district, district, province, telephone } = req.body
        database.query('INSERT INTO enrollment (name, age, id_card, house_number, moo, sub_district, district, province, telephone) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)'
            , [name, age, id_card, house_number, moo, sub_district, district, province, telephone], (err, results) => {
                if (err) {
                    throw err
                }
                res.status(201).json({ success: "true", message: "Success to create enrollment list" })
            })
    },
    uploadEnroll(req,res) {
        console.log(req.body);
        const { child_name, address_emergency, sign_date, uuid, name } = req.body
        database.query(`UPDATE enrollment SET child_name = '${child_name}', address_emergency = '${address_emergency}', sign_date = '${sign_date}', uuid = '${uuid}' WHERE name = '${name}'`, (err, results) => {
            if (err) {
                throw err
            }
            res.status(204).json({success: true, message: "Success to update data of enrollment"})
        })
    },
    uploadPhoto(req, res) {
        if (req.file) {
            const path = `/static/enrollment/${req.file.filename}`
            const custodianID = req.params.id
            database.query(`UPDATE enrollment SET sign = '${path}' WHERE uuid = '${custodianID}' `, (err, results) => {
                if (err) {
                    throw err
                }
                res.status(204).json({ success: true, message: "Success to enrollment form"})
            })
        } else {
            console.log('no check-in');
        }
    }
}