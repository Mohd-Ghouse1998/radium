const axios = require("axios");

// Assignment:

// GOTO  http://api.openweathermap.org => “subscribe” current weather data ==> get api key for Free version ==> create new account and Verify your emailId( Must verify to avoid issues) => go to My APi keys under your account name(top right corner) or https://home.openweathermap.org/api_keys => save the key/appid somewhere. Now proceed further
	
// get weather of London from http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>  (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error  ..also use HTTP only and not HTTPS)
	
// then change the above to get the temperature only( of London)
	
// Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature

// result should look something like this

// [

// {city:"London", temp: 280},

// {city:"Moscow", temp: 290},

// {city:"Bangalore", temp: 301.2},
// .......

// ]
const getLondon=async function(req,res){
    try {
        let options = {
          method: "get",
          url: "http://api.openweathermap.org/data/2.5/weather?q=London&appid=f1a93c7f2832ca822dc0920253b1614a",
        };
        const response = await axios(options);
    
        console.log("WORKING");
        let states = response.data;
        res.status(200).send({msg:"sucess", data:states})
        //res.status(200).send({ msg: "Successfully fetched data", data: states });


        //let temparature=response.data.main.temp

        //res.status(200).send({msg:"sucess", data:temparature})
    
      } 
      catch (err) {
        console.log(err.message);
        res.status(500).send({ msg: "Some error occured" });
      }
    
}
    









const getWeather = async function (req, res) { 
    try {
  
        let cities=  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray=[] 
  
        
  
        
        for (i=0 ;i<cities.length; i++){
          
            let obj= { city: cities[i] }
            let resp=  await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=f1a93c7f2832ca822dc0920253b1614a`)
            console.log(resp.data.main.temp)
  
            obj.temp= resp.data.main.temp
  
            cityObjArray.push(obj)
        }
  
        let sorted = cityObjArray.sort(  function(a, b) { return a.temp - b.temp } )
       
        
        console.log(sorted)
        res.status(200).send({status: true, data: sorted}) 
    } catch (error) {
        console.log(error)
        res.status(500).send({status: false, msg: "server error"})
    }
  }
  
  
  
  module.exports.getWeather = getWeather;
  module.exports.getLondon=getLondon