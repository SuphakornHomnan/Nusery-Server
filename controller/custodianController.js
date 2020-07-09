const database = require('../database')

module.exports = {
    createCustodian(req, res) { 
        const { name, occupation, relationship, id_card, email, telephone, child_name } = req.body

        if (name == '' || occupation == '' || relationship =='' || id_card == '' || email == '' || telephone == '' || child_name == '') {
            res.json({ success: false, message: 'emty' })
        } else {
            database.query('INSERT INTO custodians (name, occupation, relationship, id_card, email, telephone, child_name) VALUES($1,$2,$3,$4,$5,$6,$7)'
                , [name, occupation, relationship, id_card, email, telephone, child_name], (err, results) => {
                    if (err) {
                        throw err;
                    }
                    res.status(201).json({ success: true, message: 'Success to add custodain' })
                })
        }
    }
}