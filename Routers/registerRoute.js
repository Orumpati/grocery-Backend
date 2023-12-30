

const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const bodyparser = require('body-parser')

const Register = require('../Models/registerModel')






router.post('/addsignupdetails', async (req, res, next) => {



    const signup = new Register({
        _id: new mongoose.Types.ObjectId(),
        mobile: req.body.mobile,
        Fullname: req.body.Fullname,
        Email: req.body.Email,
        city: req.body.city,
        About: req.body.About,
        gender: req.body.gender,
      
    
    });

    var mobile = req.body.mobile;
    var Email = req.body.Email;


    //first check if user is already existed 
    Register.findOne({ $or: [{ mobile: mobile }, { Email: Email }] }).select().exec().then(doc => {
        console.log(doc)

        if (!doc) { // If no user found, create a new user
            signup.save().then(async result => {
                res.status(200).json({
                  
                    status: "success",
                    Id: result._id,
                    Fullname: result.Fullname,
                    Email: result.Email,
                    mobile: result.mobile,
                    city: result.city,
                    About: result.About,
                    gender: result.gender,
                    country: result.country,
                    Address: result.Address,
                    state: result.state,
                 
                 
                });

          
            }).catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err,
                    status: "failed"
                });
            });
        } else {
            res.status(200).json({
                message: "User already exists",
                status: "failed"
            });
        }
    });
});



router.post('/getsignup', (req, res, next)=>{

       
    var mobileNo=req.body.mobile;
     console.log(mobileNo)

     Register.findOne({mobile:mobileNo}).select().exec().then( doc => {
   
     var user  = req.body.mobile;
     if(doc == null || doc == undefined || doc ==''){
       res.status(400).json({ 
           Authentication: 'User not exist',
           message:'failed'
       })
     }
   
     else if(user == doc.mobile){
console.log(user)
      
       res.status(200).json({Authentication: doc._id,
                              message: "Success",
                             userProfile:doc})
     }
     else
     { 
         res.status(400).json({ 
             Authentication: 'Failed to login ',
             message:'error'
                             });
 
     }
    }).catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
 
 
 });
 module.exports =router