const express = require('express');
const db = require('../db');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/register', async(req , res)=>{
    const {username , password , email} = req.body;
    
    const hashedpass = await bcrypt.hash(password,10);
    
    const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?,?,?)';

    db.query(insertQuery,[username , email , hashedpass] , (err,insertRes)=>{
        if(err){
            console.log("ERROR: ",err)
        }
        console.log("INSERTED")
    } )

})

router.post('/login', async(req , res)=>{
    const {username , password , email} = req.body;
    console.log(username);
})
module.exports = router