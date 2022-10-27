const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;

app.use(cors())

const courses = require('./data/courses.json');
const tutorial = require('./data/tutorial.json');

app.get('/', (req, res) => {
    res.send('api running')
})

app.get('/game-courses', (req, res) => {
    res.send(courses)
});

// app.get('/category/:id', (req, res) => {
//     const id = req.params.id
//     const category = tutorial.filter(t => t.category === id)
//     res.send(category)
// })

app.get('/game/:id', (req, res) => {
    const id = req.params.id
    const selectedTutorial = tutorial.find(t => t.id === id)
    res.send(selectedTutorial)

})

app.listen(port, () => {
    console.log('server running on port');
})