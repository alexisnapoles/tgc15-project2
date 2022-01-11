const express = require ('express');
const hbs = require('hbs')
const app = express();

app.set('view engine', 'hbs');

// ROUTES
/* GET */
app.get('/', (req, res) => {
    let luckyNumber = Math.floor(Math.random()*100 + 1);

    res.render('index', {
        "number": luckyNumber
    })
    // res.send('Base Route!')
})

app.get('/movies/:title', (req, res) => {
    let title = req.params.title;
    res.send("Title: " + title)
})

app.get('/books', (req, res) => {
    res.send('Books Route!')
})

/* POST */
// app.post('/', (req, res) => {``})

/* PUT */
// app.put('/', (req, res) => {``})

/* DELETE */
// app.delete('/', (req, res) => {``})

/* PATCH */
// app.patch('/', (req, res) => {``})

/* SERVER */
app.listen(3000, () => {
    console.log ("Server ready!")
})