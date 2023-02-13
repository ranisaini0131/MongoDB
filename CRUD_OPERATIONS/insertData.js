const dbConnection = require("./config.js");

const inserData = async () => {
    const db = await dbConnection();
    const result = await db.insertMany([
        { name: "note 0", brand: "oppo", price: 1320, category: "mobile" },
        { name: "note 1", brand: "micromax", price: 3210, category: "mobile" },
        { name: "note 5", brand: "nokia", price: 3200, category: "mobile" }
    ]);

    if (result.acknowledged) {
        console.log("Data Inserted");
    }
}

inserData();