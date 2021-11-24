const express = require('express');
const router = express.Router();

// const authorController= require("../controllers/authorController")
// const BookController= require("../controllers/bookController")
// const publisherController=require('../controllers/publisherController')

//const middleware=require('../middleWare/middleWare')

// const productController=require('../controllers/productController')
// const middleWare1=require('../middleWare/middleWare1')
const userController=require('../controllers/userController')
//const orderController=require('../controllers/orderController')

const loginController=require('../controllers/loginController')

const tokenMiddle=require('../middleWare/middleWare2')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


//user Api
router.post('/createUser',userController.createUser)


// login Api
router.post('/login' , loginController.login)

//getuser Api
router.get('/users/:userId', tokenMiddle.tokenMiddle   ,loginController.getDetails)

//putUser Api
router.put('/users/:userId', tokenMiddle.tokenMiddle ,loginController.update)


module.exports = router;