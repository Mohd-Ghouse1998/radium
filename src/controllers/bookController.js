const BookModel=require('../models/bookModel')
 const createBook= async function(req,res){
     var data=req.body
     let bookData=await BookModel.create(data)
     res.send({msg:bookData})
 }





 module.exports.createBook=createBook
