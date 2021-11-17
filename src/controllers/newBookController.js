const mongoose= require("mongoose")
const newAuthorModel = require("../models/newAuthorModel")
const newBookModel=require("../models/newBookModel")

const createNewBook = async function (req, res) {
    const book= req.body
    let savedBook= await newBookModel.create(book)
    res.send({msg: savedBook})
}


const getBookByAuthor=async function(req,res){
   
    let author=await newAuthorModel.find({authorName:req.body.authorName})
    let authorId=req.author
    console.log(authorId)
    let books=await newBookModel.find({authorId}).select({bookName:1})
    res.send({msg:books})
}



module.exports.createNewBook=createNewBook
module.exports.getBookByAuthor=getBookByAuthor