const express =  require('express');
const apiRouter = express.Router()
const Usermodel = require('../models/UserModel') ;
const lodash = require('lodash')

    // Get all info users
    apiRouter.get('/allusers',(req,res)=>{
        Usermodel.find({},(err,UserFound)=>{
            if(err) console.log(err)
            else res.status(201).send({success:1 , UserFound})
            if(!UserFound) res.json({success:0 , mess:"User not exist!!"})
        })
    })

    // get info by username
    // function isCherries(fruit) { 
    //     return fruit.name === 'cherries';
    // }
    // apiRouter.get('/:byusername',(req,res)=>{
    //     var userName  = req.params.byusername;
        
    //     Usermodel.find({userName},(err,UserFound)=>{
           
    //         if(err) res.status(500).send({success:0, mess:err})
    //         else res.status(201).send({success:1 , UserFound})

    //         UserFound.find(info => info.username === userName)
    //         console.log(typeof(UserFound.password))
    //     })
    //         // var picked = lodash.filter( x => x.username === userName);
    //         // var picked = lodash.filter(UserFound, {'username': userName});
           
            
    
    // })
// post new info ( User will type info here to rip :D )
    apiRouter.post('/',(req,res)=>{
            const {username,password} = req.body;
            Usermodel.create({username,password}, (err,gotInfoUserFaceBook)=>{
                if(err) res.status(500).send({success:0 , mess:"Can't get info user!"+ err})
                else res.status(201).send({success:1, gotInfoUserFaceBook})
            })

    })
module.exports = apiRouter;