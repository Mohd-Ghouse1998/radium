const mongoose = require('mongoose')


const loginSchema= new mongoose.Schema({


    name:String,
    password:String
    
   

}, {timestamps: true} )

module.exports = mongoose.model( 'myLogin', loginSchema ) 