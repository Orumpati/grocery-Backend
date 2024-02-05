const mongoose = require('mongoose')

 const groceryscheema = new mongoose.Schema({

  categoryname:{type:String},
  image:{type:String},
 
    



 })
     const grocery = mongoose.model('grocerycategories', groceryscheema)
  
 module.exports = grocery