// document.addEventListener('DOMContentLoaded' , function (){


    // document.querySelector('.weatherButton').addEventListener('click', changeBackground);


    // document.querySelector('.mainWeather').style.display = "none";

    
    let classValue = document.querySelector('.mainWeather').innerText;
    console.log(classValue + "=============");

        // function changeBackground(){

                if (classValue.toUpperCase() === "THUNDERSTORM"){
                    
                    document.querySelector('body').style.backgroundImage = "url('/assets/img/thunderstorm.gif')";

                    document.querySelector('body').style.backgroundRepeat = "no-repeat";
                    
                    document.querySelector('body').style.backgroundSize = "cover";

                }else if(classValue.toUpperCase() === "DRIZZLE"){
                    
                    document.querySelector('body').style.backgroundImage = "url('/assets/img/drizzle.gif')";

                    document.querySelector('body').style.backgroundRepeat = "no-repeat";
                    
                    document.querySelector('body').style.backgroundSize = "cover";

                }else if(classValue.toUpperCase() === "RAIN"){

                    document.querySelector('body').style.backgroundImage = "url('/assets/img/rain.gif')";

                    document.querySelector('body').style.backgroundRepeat = "no-repeat";
                    
                    document.querySelector('body').style.backgroundSize = "cover";

                }else if(classValue.toUpperCase() === "SNOW"){

                    document.querySelector('body').style.backgroundImage = "url('/assets/img/snow.gif')";

                    document.querySelector('body').style.backgroundRepeat = "no-repeat";
                    
                    document.querySelector('body').style.backgroundSize = "cover";

                }else if(classValue.toUpperCase() === "CLEAR"){

                    document.querySelector('body').style.backgroundImage = "url('/assets/img/clear.gif')";

                    document.querySelector('body').style.backgroundRepeat = "no-repeat";
                    
                    document.querySelector('body').style.backgroundSize = "cover";


                }else if(classValue.toUpperCase() === "CLOUDS"){

                    document.querySelector('body').style.backgroundImage = "url('/assets/img/cloud.gif')";

                    document.querySelector('body').style.backgroundRepeat = "no-repeat";
                    
                    document.querySelector('body').style.backgroundSize = "cover";

                }else{

                    document.querySelector('body').style.backgroundImage = "url('/assets/img/clear.gif')";

                    document.querySelector('body').style.backgroundRepeat = "no-repeat";
                    
                    document.querySelector('body').style.backgroundSize = "cover";

                }

    // }
// })




