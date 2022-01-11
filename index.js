const express = require ('express');
const hbs = require('hbs');
const wax = require('wax-on');

/* SETUP EXPRESS */
const app = express();

// VIEW ENGINE
app.set('view engine', 'hbs');

// STATIC FOLDER
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));

// SETUP WAX-ON
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

hbs.handlebars.registerHelper('ifEquals', function(arg1, arg2, options){
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

/* ROUTES */
// GET
app.get('/', (req, res) => {
    
    res.render('index')
})

app.get('/suggestions', (req, res) => {
    res.render('suggestion_form')
})

app.get('/music', (req, res) => {
    let favorite = 'Coloratura';
    res.render('music', {
        'songs': ['My Universe', 'Coloratura', 'Viva la Vida'],
        'favoriteSong': favorite
    })
    // let title = req.params.title;
    // res.send("Title: " + title)
})

app.get('/books', (req, res) => {
    // res.send('Books Route!')
})

// POST
app.post('/suggestions', (req, res) => {
    console.log(req.body);
    // res.send('suggestion received')
    let { name, email, title, category } = req.body;
    res.render('display_suggestion', {
        name,
        email,
        title,
        category
    });
})

// PUT
// app.put('/', (req, res) => {``})

// DELETE
// app.delete('/', (req, res) => {``})

// PATCH
// app.patch('/', (req, res) => {``})

/* SERVER */
app.listen(3000, () => {
    console.log ("Server ready!")
})