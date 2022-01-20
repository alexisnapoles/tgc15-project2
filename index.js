const express = require('express');
const cors = require('cors');
require('dotenv').config()
const hbs = require('hbs');
const wax = require('wax-on');
const axios = require('axios');
const MongoUtil = require('./MongoUtil.js');
const ObjectId = require('mongodb').ObjectId;
const async = require('hbs/lib/async');

/* SETUP EXPRESS */
const app = express();

// VIEW ENGINE
app.set('view engine', 'hbs');
const helpers = require('handlebars-helpers')({
    handlebars: hbs.handlebars
});
// STATIC FOLDER
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// SETUP WAX-ON
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

hbs.handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

/* ---------- START ASYNC FUNCTION ---------- */
async function main() {

    await MongoUtil.connect(process.env.MONGO_URI, 'books_library');

    /* ROUTES */

    /* ------ BOOKS COLLECTION ROUTES ------ */
    // GET_BOOKS 
    app.get('/books', async (req, res) => {
        let db = MongoUtil.getDB();
        let books_records = await db.collection('books').find().toArray();
        // res.send(books_records)
        res.render('results_books', {
            books_records
        });
    });

    app.get('/books/:booksid/edit', async (req, res) => {
        let db = MongoUtil.getDB();
        let books_records = await db.collection('books').findOne({
            '_id': ObjectId(req.params.booksid)
        });

        res.render('edit_books', {
            books_records
        });
    });

    // POST_BOOKS
    app.post('/books/add', async (req, res) => {
        // destructured format
        let { title, author, summary, genre, imgLink, year_published, publisher, ISBN_13, ratings } = req.body;
        // this is to present values in array when user
        // has checked one or multiple categorie(s)
        if (!Array.isArray(genre)) {
            genre = [genre];
        }

        db.collection('books').insertOne({
            title,
            author,
            summary,
            genre,
            imgLink,
            year_published,
            publisher,
            ISBN_13,
            ratings
        });
        res.send('yo! dude, some good books you added, aight!')
    });

    // POST
    // app.post('/', (req, res) => {``})

    // PUT
    // app.put('/', (req, res) => {``})

    // DELETE
    // app.delete('/', (req, res) => {``})

    // PATCH
    // app.patch('/', (req, res) => {``})
}
main();

/* SERVER */
app.listen(3000, () => {
    console.log("Server has taken the first step to perpetual victory!")
})
// process.env.PORT