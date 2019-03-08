// app.js

var express = require('express');
var bodyParser = require('body-parser');

// initialize our express app
const product = require('./routes/product.route'); // Imports routes for the products
var app = express();



// console.log('hi')

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://akarsh:akarsh@123@cluster0-bro9t.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("productstutorial").collection("products");
//   // perform actions on the collection object
//   client.close();
// });
// console.log('hi1')
// console.log(client)
// const mongoose = require('mongoose');
// let dev_db_url = 'mongodb+srv://akarsh:akarsh@123@cluster0-bro9t.mongodb.net/test?retryWrites=true/productstutorial/products';
// // let dev_db_url = 'mongodb://akarsh:abcd1234@ds123619.mlab.com:23619/productstutorial';
// const mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// console.log('hi13')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
var port = 1235;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});