const MongoClient = require('mongodb').MongoClient;

let _db;

async function connect(uri, dbname){
    let client = await MongoClient.connect(uri, {
        useUnifiedTopology: true
    })
    _db = client.db(dbname);
    console.log('Hoorah! You made the database work! Good job you! Go go!');
}

function getDB() {
    return _db;
}

module.exports = {
    connect, 
    getDB
}