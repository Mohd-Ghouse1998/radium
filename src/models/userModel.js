const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({

    name: {
        type: String
        
    },
    
    balance:{
        type:Number,
        default:100
    },
    address:String,
        
    age:Number,
    gender:{
        type:String,
        enum:['male','female']
    },
    freeAppUser:{
        type:Boolean ,
        default:false
    } 

}, {timestamps: true} )

module.exports = mongoose.model( 'user', userSchema ) 