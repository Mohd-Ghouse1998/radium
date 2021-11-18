const bookModel = require("../models/bookModel.js");
const authorModel=require('../models/authorModel')
const mongoose = require("mongoose");

const createBook = async function (req, res) {
  let data = req.body;
  let authorId=req.body.author
  let authorFromRequest=await authorModel.findById(authorId)
  if(authorFromRequest){
    let savedBook = await bookModel.create(data);
    res.send({data: savedBook})
  }else{
    res.send('the author id provided is not valid')
  }
  
  
};

const getBooks = async function (req, res) {
  let allBooks = await bookModel.find().populate('author');
  res.send({ msg: allBooks });
};




module.exports.createBook = createBook;
module.exports.getBooks = getBooks;


