const database = require('../database')

module.exports = {
    createAddress(req, res) {
        const { name, name_village, house_number, moo, sub_district, district, province, telephone } = req.body
        if (name_village === '' || house_number === '' || moo === '' || sub_district === '' || district === '' || province === '', telephone === '') {
            res.json({ success: false, message: 'Please complete your address!' })
        } else {
            database.query('INSERT INTO address ( name, name_village, house_number, moo, sub_district, district, province, telephone) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)', [name, name_village, house_number, moo, sub_district, district, province, telephone], (err, results) => {
                if (err) {
                    throw err
                }
                res.status(201).json({ success: true, message: 'Success to add address'})
            })
        }
    }
}