const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    
    author: String,
    tags: [ String ], 
    year: Number,
   
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


module.exports=mongoose.model('Book1', bookSchema)