const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel")

const UserController= require("../controllers/userController")

const BookController=require("../controllers/bookController")
const BookModel=require("../models/bookModel")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createuser',  UserController.createUser  );
router.get('/getAllUsers',  UserController.getUsersData  );


// router.post('/createBook' , UserController.createBook);
// router.get('/getAllBooks' ,UserController.getBooksData)


router.post('/createBook' , BookController.createBook);

module.exports = router;