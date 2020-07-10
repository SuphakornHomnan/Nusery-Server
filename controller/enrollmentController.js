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
    }
}