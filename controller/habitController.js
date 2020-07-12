const database = require('../database')

module.exports = {
    createHabitList(req, res) {
        const { name, pillow_aficionada, doll_aficionado, fabric_aficionado, pacifier_aficionado, breast_feeding_aficionado, crib_aficionado, food_allergy, food_allergy_detail, milk_intolerance, milk_intolerance_detail, no_yogurt_allergy, no_yogurt_allergy_detail, no_allergy_to_medicine, no_allergy_to_medicine_detail, milk_powder_in_bottle, uht_milk_box_in_bottle, uht_milk_box, always_use_diaper, not_use_diaper, diaper_only_sleeping, other_information, first_day_of_school } = req.body
        database.query('INSERT INTO habit ( name, pillow_aficionada, doll_aficionado, fabric_aficionado, pacifier_aficionado, breast_feeding_aficionado, crib_aficionado, food_allergy, food_allergy_detail, milk_intolerance, milk_intolerance_detail, no_yogurt_allergy, no_yogurt_allergy_detail, no_allergy_to_medicine, no_allergy_to_medicine_detail, milk_powder_in_bottle, uht_milk_box_in_bottle, uht_milk_box, always_use_diaper, not_use_diaper, diaper_only_sleeping, other_information, first_day_of_school) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23)', [name, pillow_aficionada, doll_aficionado, fabric_aficionado, pacifier_aficionado, breast_feeding_aficionado, crib_aficionado, food_allergy, food_allergy_detail, milk_intolerance, milk_intolerance_detail, no_yogurt_allergy, no_yogurt_allergy_detail, no_allergy_to_medicine, no_allergy_to_medicine_detail, milk_powder_in_bottle, uht_milk_box_in_bottle, uht_milk_box, always_use_diaper, not_use_diaper, diaper_only_sleeping, other_information, first_day_of_school], (err, results) => {
            if (err) {
                throw err
            }
            res.status(201).json({ success: true, message: "Success to add habitHistory"})
        })
    }
}