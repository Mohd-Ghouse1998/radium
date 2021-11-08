function trimStr(name){
   
    //const s="    Mohd Ghouse   "
    console.log("     Mohd Ghouse    ".trim())
    
}

function changeToLower(){
    const l=" MohD GhOuSe"
    console.log(l.toLowerCase())
}
function changeToUpper(){
    const u=" Mohd ghouse"
    console.log(u.toUpperCase())
}

module.exports.trimStr=trimStr
module.exports.changeToLower=changeToLower
module.exports.changeToUpper=changeToUpper




