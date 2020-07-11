const database = require('../database')

module.exports = {
    createMedicalList(req, res) {
        const { name, vaccination_against_chickenpox, ever_vaccinated, history_disease_one, disease_one, history_disease_two, disease_two, congenital_heart_disease, diabetes, epilepsy_febrileseizure, emergency_case, detail_emergency_case } = req.body
        database.query('INSERT INTO medical ( name, vaccination_against_chickenpox, ever_vaccinated, history_disease_one, disease_one, history_disease_two, disease_two, congenital_heart_disease, diabetes, epilepsy_febrileseizure, emergency_case, detail_emergency_case) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)', [name, vaccination_against_chickenpox, ever_vaccinated, history_disease_one, disease_one, history_disease_two, disease_two, congenital_heart_disease, diabetes, epilepsy_febrileseizure, emergency_case, detail_emergency_case], (err, results) => {
            if (err) {
                throw err
            }
            res.status(201).json({ success: true, message: "Success to add medicalList"})
        })
    }
}