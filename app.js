const express = require('express')
const moongose = require('mongoose')
require('dotenv/config')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

// Importing Routes
const resumesRoute = require('./routes/resumes')

// Routes
app.use('/resumes', resumesRoute)

app.get('/', (req, res) => {
    res.send('<h1>Home</h1>') 
})

// Connect to Database
moongose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => { console.log('Connected to Database!') }
 )

app.listen(3000)