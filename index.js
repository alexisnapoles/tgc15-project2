const express = require ('express');
const app = express();

// ROUTES
/* GET */
app.get('/', (req, res) => {
    res.send('Base Route!')
})

app.get('/movies', (req, res) => {
    res.send('Movies Route!')
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