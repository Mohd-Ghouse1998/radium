const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

 router.get('/movies', function(req, res){
     let movies=['DDLJ','Shersha','Baaghi','Hum Aapke Hai kon']
     res.send(movies)
 })

router.get('/movies/:index', function(req,res){
    let value=req.params.index
    //console.log(value)
    let arr=['DDLJ','Shersha','Baaghi','Hum Aapke Hai kon']
    if(value<arr.length){
        res.send(arr[value])
    }else{
        res.send('Enter valid index number')
    }
    
})

router.get('/films', function(req , res){

       let film=[{
           "id":1,
           "name": "DDLJ"
       },{
           "id":2,
           "name": "Shersha"
       },{
           "id":3,
           "name" : "Hum Aapke Hai Kon"
       } ]

       res.send(film)
 } )

 router.get('/films/:filmid', function(req,res){
    let film=[{
        "id":1,
        "name": "DDLJ"
    },{
        "id":2,
        "name": "Shersha"
    },{
        "id":3,
        "name" : "Hum Aapke Hai Kon"
    } ]

    let value= +req.params.filmid
   let a=0
        for(let i=0;i<film.length;i++){
            if(film[i].id===value){
                res.send(film[i])
                a=1
                break;
            }
           
        }
     if(a===0)  {
         res.send("movie not found")
     } 
        
    

 })
    
       

module.exports = router;