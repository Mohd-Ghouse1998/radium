
const moment=require('moment')
const midGlobal=function (req,res , next){
    const today=new Date()
    const date= today.getFullYear()+ "-" +(today.getMonth()+1)+ "-"+today.getDate()
    const time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()
    const ip=req.ip
    const url=req.originalUrl
    console.log(date + " "+time + " , "+ip+" , "+url )

    next()
}



module.exports.midGlobal=midGlobal