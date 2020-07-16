const database = require('../database')

module.exports = {
    addAttendanceList(req, res) {
        console.log(req.body);
        res.end()
        // const { name, date, attend} = req.body
        // database.query('INSERT INTO attendance ( name,date,attend) VALUES ($1,$2,$3)', [name, date, attend], (err, results) => {
        //     if (err) {
        //         throw err
        //     }
        //     var answer = results.rows.attend
        //     res.status(201).json(answer)
        // })
        // const arr = [
        //     { name: 'sth', attendance: true, date: "cuuentdate" },
            
        // ]
        // arr.forEach(each => {
        //     database.query(`insert into attendance(attend) values('${each.d}')`)
        // })

        // for (let i = 0; i < arr.length; i++) {
        //   arr[i];
            
        // }
    }
}