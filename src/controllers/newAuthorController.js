const mongoose= require("mongoose")

const newAuthorModel=require("../models/newAuthorModel")


const createNewAuthor = async function (req, res) {
    const author= req.body
    let savedAuthor= await newAuthorModel.create(author)
    res.send({msg: savedAuthor})
}


const findAuthorUpP=async function(req,res){
    let savedAuthor=await newAuthorModel.findOneAndUpdate({})
}


module.exports.createNewAuthor=createNewAuthor
