const mongoose=require('mongoose')

const newBookSchema= new mongoose.Schema({


    bookName: {
        type: String,
        required: true
    },
    
    author_id:{
        type:String ,
        required:true,
        
    },
   rating:Number,
    year: {
         type:Number,
         default:2021
    },
   
    prices: {
        type:Number,
        default:0
        
    },
    
    
    stockAvailable:{
        type:Boolean,
        default:false
    },
   


}, {timestamps:true})

module.exports = mongoose.model( 'NewBook1', newBookSchema ) 
