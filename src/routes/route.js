const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")
const publisherController=require('../controllers/publisherController')

//const middleware=require('../middleWare/middleWare')

const productController=require('../controllers/productController')
const middleWare1=require('../middleWare/middleWare1')
const userController=require('../controllers/userController')
const orderController=require('../controllers/orderController')



router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

// Authors API
router.post('/authors',  authorController.createAuthor  );


// Books API
router.post('/createBook', BookController.createBook  );
router.get('/getBooks' ,  BookController.getBooks  );


//publisher Api
router.post('/publisher',publisherController.createPublisher)

router.post('/createBookPub',publisherController.createBookPub)
router.get('/getBooksPub',publisherController.getBooksPub)


//product Api

router.post('/createProduct', productController.createProduct)

//user Api
router.post('/createUser',middleWare1.middle,userController.createUser)


// order Api
router.post('/createOrder' ,middleWare1.middle, orderController.createOrder)


module.exports = router;