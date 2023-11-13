const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const expressLayout = require('express-ejs-layouts');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 5000 || process.env.PORT;
let cityName;

let lat;
let lon;
const appidOne = process.env.appidOne;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


//Setting up the templating engine
app.use(expressLayout);
app.set('layout' , './layouts/main')
app.set('view engine', 'ejs');

app.get('/', (req , res) => {
    res.render('./layouts/main');
});


app.post('/weather' , (req , res) =>{
    cityName = req.body.cityName;

    console.log(cityName);

    

    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${appidOne}`)
         .then((response) => {

            //got the latitude and longitude
            lat=response.data[0].lat;
            lon = response.data[0].lon;
            console.log(lat);
            console.log(lon);

            axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appidOne}`)
    
            .then((response) => {
                
               let weatherInformation = response.data.weather[0].description;
               let mainWeather = response.data.weather[0].main;


               
               function checkWhichWeather(weather){

                  console.log(weather.toUpperCase());

                  if (weather.toUpperCase() === "THUNDERSTORM"){

                     
                     let classValue = "thunderstorm";
                     return classValue;    

                  }else if(weather.toUpperCase() === "DRIZZLE"){
                     

                     let classValue = "drizzle";
                     return classValue;

                  }else if(weather.toUpperCase() === "RAIN"){

                     let classValue = "rain";
                     return classValue;

                  }else if(weather.toUpperCase() === "SNOW"){

                     let classValue = "snow";
                     return classValue;

                  }else if(weather.toUpperCase() === "CLEAR"){

                     let classValue = "clear";
                     return classValue;

                  }else if(weather.toUpperCase() === "CLOUDS"){

                     let classValue = "clouds";
                     return classValue;

                  }else {

                     let classValue = "atmosphere";
                     return classValue;

                  }

               }
               
               let classValue = checkWhichWeather(mainWeather);
               console.log(classValue);

               let locals = {
                  weatherInformation: weatherInformation,
                  cityName: cityName,
                  classValue: classValue,
               }

               console.log(response.data.weather[0].description);

               res.render('partials/weather' , locals);

            } , (error)  => {
               console.log(error);
            });
            

         } , (error) => {
            console.log(error);
         });
})

app.listen(PORT , () => {
    console.log(`App listening on port ${PORT}`);
});