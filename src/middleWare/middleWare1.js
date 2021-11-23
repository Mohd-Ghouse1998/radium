const middle=function (req,res,next){

let appHeader=req.headers['isfreeapp']
let isAppFree
if(!appHeader){
    res.send({message:"'manadatory header is missing"})
}else{
    if(appHeader==='false'){
        isAppFree=false
    } else {
        isAppFree=true
    }
    req.isFreeAppUser=isAppFree
    next()
}

}

module.exports.middle=middle