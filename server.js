const { MongoClient } = require('mongodb');
const express = require ("express");
const { response } = require('express');
const app = express();

const PORT = 9000;

const banners = 
[
  {
      "path": "../img/kerala.jpg",

  },{
      "path": "../img/flight.jpeg",

  },
  {
    "path": "../img/nature.jpeg",

},
{
  "path": "../img/dam.jpg",

},
{
      "path": "../img/boathouse.jpg",

  }
];

// const MONGO_URL = "mongodb://localhost";

// async function createConnection(){
//   const client = new MongoClient(MONGO_URL);
//   await client.connect();
//   console.log("Mongodb Connected");
// }

// createConnection();

app.get("/", (request, response) => {
  response.send("Hello man");
});

// app.get("/banners", (request, response) => {
//   response.send(banners);
// });




app.get("/", (request, response) => {
  response.send("Hello, man");
});

app.get("/banners", async(request, response) => {
  const MONGO_URL = "mongodb://localhost";

  const client = new MongoClient(MONGO_URL);
  await client.connect();

  const banner = await client
  .db("location")
  .collection("banners")
  .find({}).toArray()


  
  console.log(banner);
  banner
  ? response.send(banner)
  : response.status(404)
}); 

app.listen(PORT, () => console.log("App is started in", PORT))

















/* console.log("test");
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose")
const app = express();



/* mongoose.connect(
"mongodb://localhost:27017/location")
mongoose.connection.on('connected', () => {
  console.log("Database is connected");
}) 
 */




/* mongoose.connection.on('error', () => {
  console.log('error occured');
})

 */














/* 


app.use(cors({
  origin: '*'
}));

const PORT = 9000;


app.get("/api/banner", (request, response) => {
  const banners = 
[
  {
      "path": "../img/kerala.jpg",

  },{
      "path": "../img/flight.jpeg",

  },
  {
    "path": "../img/nature.jpeg",

},
{
  "path": "../img/dam.jpg",

},
{
      "path": "../img/boathouse.jpg",

  }
];



  response.json( banners );
});



app.listen(PORT, () => console.log("App is started in", PORT)); */ 
