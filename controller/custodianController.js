const database = require('../database')

module.exports = {
    createCustodian(req, res) { 
        console.log(req.body);
        const { name, occupation, relationship, id_card, email, telephone, child_name, sign_date, uuid} = req.body

        if (name === '' || occupation === '' || relationship === '' || id_card === '' || email === '' || telephone === '' || child_name === '' || sign_date === '') {
            res.json({ success: false, message: 'emty' })
        } else {
            database.query('INSERT INTO custodians (name, occupation, relationship, id_card, email, telephone, child_name, sign_date, uuid) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)'
                , [name, occupation, relationship, id_card, email, telephone, child_name, sign_date, uuid], (err, results) => {
                    if (err) {
                        throw err;
                    }
                    res.status(201).json({ success: true })
                })
        }
    },
    uploadPhoto(req, res) {
        if (req.file) {
            const path = `/static/signCustodian/${req.file.filename}`
            const custodianID = req.params.id
            database.query(`UPDATE custodians SET sign = '${path}' WHERE uuid = '${custodianID}' `, (err, results) => {
                if (err) {
                    throw err
                }
                res.status(204).json({ success: true, message: "Success to add custodain" })
            })
        } else {
            console.log('no check-in');
        }
    }
}