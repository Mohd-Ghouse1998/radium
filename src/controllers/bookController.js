const BookModel= require("../models/bookModel.js")
const mongoose= require("mongoose")

const createBook = async function (req, res) {
    const book= req.body
    let savedBook= await BookModel.create(book)
    res.send({msg: savedBook})
}


const bookList=async function(req,res){
    //const book=req.body
    let savedBook=await BookModel.find().select({bookName:1,author:1 ,_id:0})
    res.send({msg:savedBook})
}

const getBooksInYear=async function(req,res){
  
    let savedBook=await BookModel.find({ year: req.body.year })
    res.send({msg:savedBook})
}

const particularBooks = async function (req, res) {
    let specificBooks = await BookModel.find(req.body)
    res.send(specificBooks)
}


const getXINRBooks=async function(req,res){
    let savedData=await BookModel.find({'prices.indianPrice':{$in:["100INR","200INR","500INR"]}})
    res.send({msg:savedData})
}

const getRandomBooks=async function(req,res){
    let savedData=await BookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send({msg:savedData})
}


module.exports.createBook= createBook
module.exports.bookList=bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks
module.exports.particularBooks=particularBooks
//module.exports.getBooksData= getBooksData