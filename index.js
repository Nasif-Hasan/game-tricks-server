const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;

app.use(cors())

const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('api running')
})

app.get('/game-courses', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log('server running on port');
})