const express = require('express')
const mongoose= require ('mongoose')
const router = express.Router();
const imagedata = require('../Models/grocerycategory');



router.post('/addcategory', (req, res, next) => {

    const quote = new imagedata({
        _id: new mongoose.Types.ObjectId,
    
        categoryname:req.body.categoryname,
     image:req.body.image
      


    
    });

 
    quote.save().then(result => {
        console.log(result);
   
        
        res.status(200).json(
            {
            
            message: "  added",
            status: "success",
        
        });
    
      
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err,
            status: "failed",
            message: "failed to add"
        });
    })
})
router.get('/getcategory', async (req,res) =>{ 
    try{   
        
        const grocery = await imagedata.find()  // async makes a function return a Promise
                                                 //await makes a function wait for a Promise
        res.status(200).json({
            grocery
        })
    }catch (error) {
        res.status(400).send(error)
    } 
    })


    router.delete('/deletecategory/:id', (req, res) => {


   
        imagedata.findByIdAndDelete(req.params.id)  //params means parameter value
            .then(() => {
             
                 
                  res.json('category deleted')
                
               
            })
            .catch(err => res.status(400).json(err));
        })


        router.put('/editcategory/:id',async (req, res) =>{
            const updates = Object.keys(req.body)   // keys will be stored in updates => req body field names.
            const allowedUpdates = ['image', 'categoryname']  // updates that are allowed
            const isValidOperation = updates.every((update) => allowedUpdates.includes(update)) // validating the written key in req.body with the allowedUpdates
            if (!isValidOperation) {
                return res.status(400).json({ error: 'invalid updates' })
            }
            try {  // try  catch error is to catch the errors in process
                const reg = await imagedata.findOne({ _id: req.params.id }) // finding the product to be updated
                if (!reg) { //if user is empty it will  throw error as response
                    return res.status(404).json({ message: 'Invalid user' })
                   
                }
                updates.forEach((update) => reg[update] = req.body[update]) //updating the value
        
                await reg.save()
                res.send(reg)
            } catch (error) {
                res.status(400).send(error)
            }
        });
    
module.exports=router