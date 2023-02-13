const dbConnection = require("./config.js");

const deletData = async() => {
let data= await dbConnection();
let response = await data.deleteOne({name:"note 0"});
console.log(response);
if(response.acknowledged){
    console.log("Data Deleted");
}
}

deletData();