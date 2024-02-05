const express = require('express')
const mongoose= require ('mongoose')
const router = express.Router();
const groceryitem = require('../Models/groceryitem');

router.post('/additem', (req, res, next) => {
    const quote = new groceryitem({
        _id: new mongoose.Types.ObjectId,
        productsizes:req.body.productsizes,
        productname:req.body.productname,
        producttype:req.body.producttype,
        price:req.body.price,
        description:req.body.description,
        productimage:req.body.productimage
    })
    console.log(quote)
    quote.save().then(result => {
       
        console.log(result);
        res.status(200).json(  
            {
           data:result,
            message: " menu added ",
            status: "success",
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err,
            status: "failed to add menu",
            message: "failed to add"
        });
    })
                     })

                     router.get('/getitems', async (req,res) =>{ 
                        try{   
                            
                            const grocery = await groceryitem.find()  // async makes a function return a Promise
                                                                     //await makes a function wait for a Promise
                            res.status(200).json({
                                grocery
                            })
                        }catch (error) {
                            res.status(400).send(error)
                        } 
                        })
                     
module.exports=router