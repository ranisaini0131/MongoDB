    const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

const dbName = 'e-comm';

async function dbConnection() {

    let result = await client.connect();
    let db = result.db(dbName);
    return db.collection('products');
}
module.exports = dbConnection;