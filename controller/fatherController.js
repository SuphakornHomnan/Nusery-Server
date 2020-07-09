const database = require('../database')

module.exports = {
    createFather(req, res) {
        const { name, occupation, id_card, email, telephone, child_name } = req.body
     
        
        if (name == '' || occupation == '' || id_card == '' || email == '' || telephone == '' || child_name == '') {
            res.json({ success: false, message: 'emty' })
        } else {
            database.query('INSERT INTO father (name, occupation, id_card, email, telephone, child_name) VALUES($1,$2,$3,$4,$5,$6)'
                , [name, occupation, id_card, email, telephone, child_name], (err, results) => {
                    if (err) {
                        throw err;
                    }
                    res.status(201).json({ success: true, message: 'Success to add father' })
                })
        }
    }
}