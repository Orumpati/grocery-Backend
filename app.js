const express = require('express');
require('dotenv').config();

const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParse  =require('cookie-parser')


const bodyparser = require('body-parser');

const registerdetails= require('./Routers/registerRoute.js')
const grocery = require('./Routers/groceryRoute.js')

const uri='mongodb+srv://Orumpati_1234:9705821087Sai@cluster0.uqgd1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.set("strictQuery", false);
 mongoose.connect(uri)
.then(response =>{
   console.log('mongodb is connected')

})
.catch(error=>{
   console.log(error)
   console.log("error db is not connected")
});
app.use(cors());
app.use(cookieParse())
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


app.use('/registerroute',registerdetails);
app.use('/grocery',grocery)


module.exports = app;