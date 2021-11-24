
const userModel=require('../models/userModel')

const middle=function (req,res,next){

let name=req.body.name
let password=req.body.password

let userName=await userModel.findById(_id.name)
let userPassword=await userModel.findById(_id.password)
if(data==='true'){
    next()
}else{
    res.send({msg:"request is missing a mandatory header"})
}

}

module.exports.middle=middle