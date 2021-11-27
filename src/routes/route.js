const express = require('express');
const router = express.Router();

const cowinController= require("../controllers/cowinController")

const weatherController=require("../controllers/weatherController")

const cryptoController=require("../controllers/cryptoController")


// router.get("/cowin/states", cowinController.getStatesList)
// router.get("/cowin/districts/:stateId", cowinController.getDistrictsList)
// router.get("/cowin/centers", cowinController.getByPin)
// router.post("/cowin/getOtp", cowinController.getOtp)


 router.get("/getWeather",weatherController.getWeather)
 router.get("/getLondon",weatherController.getLondon)



router.get('/getCrypto',cryptoController.getTopCrypto)


module.exports = router;