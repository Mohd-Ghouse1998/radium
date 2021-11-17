const mongoose= require("mongoose")
const newAuthorModel = require("../models/newAuthorModel")
const newBookModel=require("../models/newBookModel")


//1. Write down the schemas for book and authors (keeping the data given below in mind). Also create the documents (corresponding to the data given below) in your database.

//2. CRUD operations. Write API's to do the following:

//Write create APIs for both books and authors ---> If author_id is not available then do not accept the entry(in neither the aurthor collection onr the books collection)

const createNewBook = async function (req, res) {
    const book= req.body
    let savedBook= await newBookModel.create(book)
    res.send({msg: savedBook})
}


//List out the books written by Chetan Bhagat

 const getBookByAuthor=async function(req,res){
   
     let author=await newAuthorModel.findOne({authorName:req.body.authorName}).select({author_id:1,_id:0})
 
     let books=await newBookModel.find(author).select({bookName:1})
    res.send({msg:books})
}

//find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response

const changePrice = async function(req,res){
    const allbook =await newBookModel.findOne({bookName: "Two states"}).select({author_id:1,_id:0});
    let author = await newAuthorModel.findOne(allbook).select({authorName:1,_id:0});
    let updatedprice = await newBookModel.findOneAndUpdate({bookName: "Two states"},{prices:100},{new:true}).select({prices:1,_id:0});
    res.send({msg:author,updatedprice})

}

//Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books

const books =async function(req,res)

     {

         let idd=await newBookModel.find({price:{$gte:50}&&{$lte:100}}).select({author_id:1,_id:0})

         let author=await newAuthorModel.find(idd.author_id).select({authorName:1,_id:0})

         res.send({msg:author})

     }

     module.exports.books =books




module.exports.createNewBook=createNewBook
module.exports.getBookByAuthor=getBookByAuthor
module.exports.changePrice=changePrice