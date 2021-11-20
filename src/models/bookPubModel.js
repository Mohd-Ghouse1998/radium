const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema= new mongoose.Schema({


    bookName: {
        type: String,
        required: true
    },
    
    author: {
        type: ObjectId,
        ref: 'myAuthor'
    },
    publisher:{
        type: ObjectId,
        ref:'mypublisher'
    },

    
    
    prices: String,
    rating:Number
    
    

}, {timestamps: true} )

module.exports = mongoose.model( 'bookPub', bookSchema ) 