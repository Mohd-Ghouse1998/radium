const mongoose=require('mongoose')

const bookSchema= new mongoose.Schema({


    bookName: {
        type: String,
        required: true
    },
    
    author: String,
    tags: [ String ], 
    year: {
         type:Number,
         default:2021
    },
   
    prices: {
        indianPrice: String,
        europeanPrice: String,
        
    },
    sales: {
        type: Number,
        default : 0
    },
    totalPages:Number,
    stockAvailable:{
        type:Boolean,
        default:false
    },
    completionDate: Date


}, {timestamps:true})




module.exports = mongoose.model( 'Newbook', bookSchema ) 



// Intro to Backend Engineering
// FunctionUp
// #Programming #backend #nodejs #bestBookEver #cool #lifeChanging