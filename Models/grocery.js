const mongoose = require('mongoose')

 const groceryitemsscheema = new mongoose.Schema({
  productname:{type:String},
  productimage:{type:String},
  producttype:{type:String},
  price:{type:String},
  description:{type:String},
  productsizes:[{
    Size:{type:String},
    Quantity:{type:String}
  }]
 })
     const groceryitems = mongoose.model('groceryitems', groceryitemsscheema)
  
 module.exports = groceryitems