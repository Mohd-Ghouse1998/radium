const mongoose=require('mongoose')

const newAuthorSchema= new mongoose.Schema({


   
    author_id:{
        type:String,
        required:true,
        unique:true
    },

    authorName:{
        type:String,
        required:true
    },
    age:Number,
    address:String,


}, {timestamps:true})




module.exports = mongoose.model( 'NewAuthor', newAuthorSchema ) 