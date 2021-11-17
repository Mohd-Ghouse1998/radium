const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel")

const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createUser',  UserController.createUser  );
router.get('/getAllUsers',  UserController.getUsersData  );

router.post('/createBook',  BookController.createBook  );
router.get('/bookList', BookController.bookList);
router.post('/getBooksInYear',BookController.getBooksInYear);

router.post('/particularBooks',BookController.particularBooks);


router.get('/getXINRBooks', BookController.getXINRBooks)
router.get('/getRandomBooks', BookController.getRandomBooks)

//router.get('/getAllBooks',  BookController.getBooksData  );




//tuesday assignment

const newBookModel=require("../models/newBookModel")
const newAuthorModel=require("../models/newAuthorModel")

const newBookController=require("../controllers/newBookController")
const newAuthorController=require("../controllers/newAuthorController")

router.post('/createNewBook',  newBookController.createNewBook  );

router.post("/createNewAuthor", newAuthorController.createNewAuthor);

router.post("/getBookByAuthor",newBookController.getBookByAuthor);
  
router.get("/books",newBookController.books);

router.get("/changePrice",newBookController.changePrice)




module.exports = router;