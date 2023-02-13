const express = require('express');
const dbConnection = require("./config.js");
const mongodb = require("mongodb");

const app = express();

app.use(express.json());//middleware for json data

app.get("/", async (req, res) => {
    let data = await dbConnection();
    let response = await data.find().toArray();
    res.send(response);
});

app.post("/", async (req, res) => {
    let data = await dbConnection();
    let response = await data.insertOne(req.body) 
    res.send(response); //sending data
})

app.put("/", async (req, res) => {
    let data = await dbConnection();
    let response = await data.updateOne(
        { name: "note 55 pro" },
        { $set: { price: 900 } });
    res.send({ result: "update" })
    console.log(response);
})

app.delete("/:id", async (req, res) => {
    console.log(req.params.id);
    let data = await dbConnection();
    let response = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    res.send(response);
})

app.listen(5000);