const orderModel = require('../models/orderModel')
const userModel = require('../models/userModel')
const productModel = require('../models/productModel')

const createOrder = async function (req, res) {
    
    let userId = req.body.userId
    let productId = req.body.productId
    let appTypeFree=req.isFreeAppUser
    let orderAmount
    let orderDate=Date()

    let user=await userModel.findById(userId)
    if(!user){
        return res.send({message:"user doesn't exit"})
    }
    
    let product =await productModel.findById(productId)

    if(!product){
        return res.send({message:"product doesn't exist"})
    }

   //user balance validation

   if(appTypeFree){
       orderAmount=0
   }else{
       orderAmount=product.price
   }
 

   let orderDetails={
       userId: userId,
       productId:productId,
       amount: orderAmount,
       isFreeAppUser:appTypeFree ,
       date:orderDate
   }

  let orderCreated=await orderModel.create(orderDetails)

    if(!appTypeFree){
        await userModel.findByIdAndUpdate({_id: userId}, {balance:user.balance-product.price})
    }
    res.send({data: orderCreated})
}

module.exports.createOrder = createOrder