const database = require('../database')

module.exports = {
    createDocument(req, res) {
        console.log(req.body);
        
        const { name, birth_certificate, id_card_father, house_record, id_card_mother, life_lnsurance_card, health_examination, baby_photo } = req.body
        database.query('INSERT INTO document ( name, birth_certificate, id_card_father, house_record, id_card_mother, life_lnsurance_card, health_examination, baby_photo ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)', [name, birth_certificate, id_card_father, house_record, id_card_mother, life_lnsurance_card, health_examination, baby_photo], (err, results) => {
            if (err) {
                throw err
            }
            res.status(201).json({ success: true, message: "Success to create document list" })
        })
    }
}