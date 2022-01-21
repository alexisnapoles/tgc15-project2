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
    app.get('/', async (req, res) => {
        res.render('index')
    });
    // GET_BOOKS 
    app.get('/books', async (req, res) => {
        let db = MongoUtil.getDB();
        let books_records = await db.collection('books').find().toArray();
        // res.send(books_records)
        res.render('results_books', {
            books_records
        });
    });

    app.get('/books/add', async (req, res) => {
        res.render('add_books')
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
        console.log(req.body) 
        // to extract values to input in db; this syntax is called object destructuring 
        // and example of undestructured objects are as follows:
        // let title = req.body.title;
        // let author = req.body.author; ..... and the code goes on.
        let { title, author, summary, genre, coverImage, yearPublished, publisher, isbn13, ratings } = req.body;
        // this is to present values in array when user
        // has checked one or multiple genres
        genre = genre || []
        if (!Array.isArray(genre)) {
            genre = [genre];
        }
        // creating the document {'key': value }
        let documentInsert =  {
            'title': title,
            'author': author,
            'summary': summary,
            'genre': genre,
            'coverImage': coverImage,
            'yearPublished': yearPublished,
            'publisher': publisher,
            'isbn13': isbn13,
            'ratings': ratings
        }
        // this line of code will allow inputs to be brought to the database
        const db = MongoUtil.getDB();
        await db.collection('books').insertOne(documentInsert);
         
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

/* 
IMPORTANT NOTES:
1. 
2. whenever user submit form, each form field w name will becom key inside req.body(which is an object) 
3. to inform express that form will be used this line of code: app.use(express.urlencoded({ extended: false }));
4. every code in mongo also is used in express there's just minor difference in the syntax, while mongo goes db.<collection_name>.insertOne, express code is db.collection('').insertOne; as observed that the differences btw syntaxt is the part where collection name is identified.


*/