const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const api = require('./routes')
const port = 4000
const cors = require('cors')

//middleware
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use(cors({
    origin: true,
    credentials: true
}))

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postres API'})
})

app.use('/api',api)

app.listen(port, () => {
    console.log(`App running on port ${port}`);
    
})