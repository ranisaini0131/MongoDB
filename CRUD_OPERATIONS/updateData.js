const dbConnection = require("./config.js");

const updateData = async () => {
    let data = await dbConnection();
    let response = await data.updateOne(
        { name: 'note 5' }, { $set: { name: "note 5 pro" } }
    );
    if (response.acknowledged) {
        console.log("Data Updated");
    }

}

updateData();