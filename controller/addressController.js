const database = require('../database')

module.exports = {
    createAddress(req, res) {
        const { name, name_village, house_number, moo, sub_district, district, province, telephone, child_id } = req.body
        if (name_village === '' || house_number === '' || moo === '' || sub_district === '' || district === '' || province === '', telephone === '') {
            res.json({ success: false, message: 'Please complete your address!' })
        } else {
            database.query('INSERT INTO address ( name, name_village, house_number, moo, sub_district, district, province, telephone, child_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)', [name, name_village, house_number, moo, sub_district, district, province, telephone, child_id], (err, results) => {
                if (err) {
                    throw err
                }
                res.status(201).json({ success: true, message: 'Success to add address'})
            })
        }
    },
    uploadMapPhoto(req, res) {
        console.log(req.file);
        if (req.file) {
            const path = `/static/houseMap/${req.file.filename}`
            const childID = req.params.id
            database.query(`UPDATE address SET house_map = '${path}' WHERE child_id = '${childID}'`, (err, results) => {
                if (err) {
                    throw err
                }
                res.status(204).json({ success: true, message: "Complete to fill infomation"})
            })
        } else {
            console.log('failed to upload photo');
        }
    }
}