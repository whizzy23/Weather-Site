function func(){
    let cname = document.getElementById("cityname").value
    return callapi(cname)
}
function callapi(cname){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+cname+"&appid=ffc62ccd1d119915112987d5a4b6fe4a")
    .then(response => {
        return response.json()
    })
    .then(data => {

        console.log(data)
        
        if(data.cod=="404" ){
            var mes = data.message.toUpperCase()+' !'
            alert (mes)
        }
        else if(data.cod=="400"){
            alert("PLEASE ENTER THE CITY NAME !" )
        }

        let tempr="Temp : "+(data.main.temp-273.15).toFixed(2)+"°C"
        let winds = "Wind Speed : " + data.wind.speed
        let feeltemp = "Feels Like : "+(data.main.feels_like-273.15).toFixed(2)+"°C"
        let mintemp = "Min Temp : "+(data.main.temp_min-273.15).toFixed(2)+"°C"
        let maxtemp = "Max Temp : "+(data.main.temp_max-273.15).toFixed(2)+"°C"
        let clouds = "Clouds : " + data.clouds.all

        document.getElementById("temp").innerHTML = tempr
        document.getElementById("ftemp").innerHTML = feeltemp
        document.getElementById("mintemp").innerHTML = mintemp
        document.getElementById("maxtemp").innerHTML = maxtemp
        document.getElementById("wind").innerHTML = winds
        document.getElementById("sky").innerHTML = clouds

        selectImage (data)

    })
    .catch(err => {
        console.log(err);
        if(err=="TypeError: Failed to fetch"){
            alert("UNABLE TO FETCH DATA FROM SERVER ! \nCHECK YOUR INTERNET CONNECTION")
        }
    });
}


var weatherImage = "";

  var imagePhoto = {

    thunder: "https://s-media-cache-ak0.pinimg.com/originals/2e/43/73/2e4373184057ab029b5ca15aca484b09.jpg",
    rainy: "https://i.ytimg.com/vi/q76bMs-NwRk/maxresdefault.jpg",
    cloudy: "https://static1.squarespace.com/static/57523357c2ea515ccf6c1adb/58dcea75bebafb06e997da9c/58dcece61e5b6cf38585d46b/1490873606398/mostly+cloudy.jpg",
    snow: "https://static.bhphotovideo.com/explora/sites/default/files/Correct.jpg",
    clear: "https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80.jpg",
    drizzle: "https://s-media-cache-ak0.pinimg.com/736x/e4/43/f5/e443f59b4f03dd487d090a279c2f08ab--rain-drops-water-drops.jpg",
    haze: "https://cdn.pixabay.com/photo/2022/09/13/13/02/hills-7451872_960_720.jpg",
    tornado: "https://i.ytimg.com/vi/5QnsRXUbsK4/maxresdefault.jpg",
    cold: "https://static.pexels.com/photos/374/snow-dawn-sunset-winter.jpg",
    windy: "https://ak9.picdn.net/shutterstock/videos/4337360/thumb/1.jpg",
    hail: "https://s-media-cache-ak0.pinimg.com/236x/7c/60/3d/7c603d9183ff32c92330780a2ebdcfca--rainy-weather-rainy-days.jpg",
    sunny: "https://i.ytimg.com/vi/rG9fev-m0ag/maxresdefault.jpg"
};


function selectImage (data){
    
    let id = data.weather[0].id

    if (id >= 200 && id <= 232){
        weatherImage = imagePhoto.thunder;
    }else if(id >= 300 && id <= 321){
        weatherImage = imagePhoto.drizzle;
    }else if (id >= 500 && id <= 531){
        weatherImage = imagePhoto.rainy;
    }else if (id >= 600 && id <= 622){
        weatherImage = imagePhoto.snow;
    }else if (id >= 701 && id <= 721 ){
        weatherImage = imagePhoto.haze;
    }else if (id === 800){
        weatherImage = imagePhoto.clear;
    }else if (id >= 801 && id <= 804){
        weatherImage = imagePhoto.cloudy;
    }else if (id >= 900 && id <= 902){
        weatherImage = imagePhoto.tornado;
    }else if (id === 903){
        weatherImage = imagePhoto.cold;
    }else if (id === 904){
        weatherImage = imagePhoto.sunny;
    }else if (id === 905){
        weatherImage = imagePhoto.windy;
    }else if (id === 906){
        weatherImage = imagePhoto.hail;
    }else{
        weatherImage = imagePhoto.windy;
    }

    document.body.style.backgroundImage = "url("+weatherImage+")"

}

function timebg(){

    var bgImage=''
    var d = new Date()
    var n = d.getHours()
    console.log(n)
    if (n>=5 && n<6){
        // If time is between 5AM - 6AM sunrise theme to ‘body’
        bgImage= 'sunrise.jpg'}
    else if (n >= 18 && n < 19){
      // If time is between 6PM – 7PM sunset theme to ‘body’
      bgImage= 'sunset.jpg'}
    else  if (n >= 19 || n < 5 ){
        // If time is after 7PM or before 5AM, apply night theme to ‘body’
        bgImage= 'night.jpg'}
    
    else{
        // If time is after 6AM or before 6PM, apply day theme to ‘body’
      bgImage= 'day.jpg'}
    
    document.body.style.backgroundImage = "url(" + bgImage + ")"
    }
    
    timebg()