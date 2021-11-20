const publisherModel=require('../models/publisherModel')
const bookPubModel=require('../models/bookPubModel')
const authorModel=require('../models/authorModel')


const createPublisher=async function(req,res){
    let data=req.body
    let saveddata=await publisherModel.create(data)
    res.send({data:saveddata})
}



const createBookPub = async function (req, res) {
    let data = req.body;
    let authorId=req.body.author
    let publisherId=req.body.publisher
   
    let authorFromRequest=await authorModel.findById(authorId)
    let publisherFromRequest=await publisherModel.findById(publisherId)
    
    if(authorFromRequest){
      if(publisherFromRequest) {
        let savedBook = await bookPubModel.create(data);
        res.send({data: savedBook})
      }
     
    else {
        res.send({ msg: " publisher id is not valid" });
    }
  }
  else {
      res.send({msg:"author id is not valid"})
    }
  
    
  };


  const getBooksPub = async function (req, res) {
    let allBooks = await bookPubModel.find().populate('author').populate('publisher')
    res.send({ msg: allBooks });
  };
  module.exports.getBooksPub=getBooksPub

module.exports.createPublisher=createPublisher

module.exports.createBookPub=createBookPub



