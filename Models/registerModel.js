const mongoose = require('mongoose')

const registerScheema = new mongoose.Schema({
    
    Fullname: {
        type: String 
    },
    profileImage: {
        default:"https://cdn3.iconfinder.com/data/icons/login-5/512/LOGIN_6-1024.png",
        type: String 
    },
 
    Email: {
        type: String  
    },
    mobile: {
        type: String       
    },
    city:{
        type:String
    },
    country:{
        type:String
    },
    Address:{
        type:String
    },
    state:{
        type:String
    },
    About:{
        type:String
    },
    gender:{
        type:String
    },
    Role:{
        type:String
    },
  
    uniqueid:{
        type:String
    },
    images:{
        type:String
    },
 


})

module.exports = mongoose.model('groceryRegisters' , registerScheema)