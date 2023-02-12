//=====================Read Data from Mongodb

const dbConnection=require("./config.js");


//=====================promise
dbConnection().then((response)=>{
   response.find({}).toArray().then((data)=>{
    console.log(data);
})
})

//=============async-await
const getData= async()=>{
    let response= await dbConnection();
    response= await response.find({}).toArray()//returns promise
    console.log(response);

}

getData();