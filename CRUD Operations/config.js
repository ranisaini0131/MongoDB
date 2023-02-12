const { MongoClient } = require('mongodb');
//connecting local mongodb to node.js

const url = "mongodb://127.0.0.1:27017";//local servr path

//node.js is our client who brings data from mongodb(local server in this case) to us
//this url is the address of data
const client = new MongoClient(url);

const dbName = 'e-comm';

async function dbConnection() {

    let result = await client.connect();//client.connect():- this returns a promise to handle it use await
    let db = result.db(dbName);
    return db.collection('products');
}
//this will return a promise <pending>
// console.log(dbConnection());
// to handle this promise there are two possible ways:- 1. promise and 2. async await

module.exports=dbConnection;