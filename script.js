function inp(){
    var input = document.getElementById("cityname")
    input.addEventListener("keydown", (e)=> {
     if (e.key === "Enter") {  
       var cname = e.target.value
       callapi(cname)
}})}
inp()


function func(){
    let cname = document.getElementById("cityname").value
    callapi(cname)
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
        let sky = data.weather[0].main
        document.getElementById("temp").innerHTML = tempr
        document.getElementById("ftemp").innerHTML = feeltemp
        document.getElementById("mintemp").innerHTML = mintemp
        document.getElementById("maxtemp").innerHTML = maxtemp
        document.getElementById("wind").innerHTML = winds
        document.getElementById("sky").innerHTML = sky

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
    clear:"clear.jpg",
    thunder: "thunder.jpg",
    rainy: "rain.jpg",
    cloudy: "cloudy.jpg",
    snow: "snow.jpg",
    drizzle: "drizzle.jpg",
    haze: "haze.jpg",
    tornado: "tornado.jpg",
    cold: "cold.jpg",
    windy: "windy.jpg",
    hail: "hail.jpg",
    sunny: "sunny.jpg"
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

function clock(){ 
    var date=new Date()
    var D=date.getDay()
    if(D==0){
        Day="Sunday"
    }
    else if(D==1){
        Day="Monday"
    }
    else if(D==2){
        Day="Tuesday"
    }
    else if(D==3){
        Day="Wednesday"
    }
    else if(D==4){
        Day="Thursday"
    }
    else if(D==5){
        Day="Friday"
    }
    else if(D==6){
        Day="Saturday"
    }
    
    var d = date.getDate()+"-"+(date.getMonth()+1)+"-"+ date.getFullYear() 
    var t = date.getHours()+":"+date.getMinutes();
    document.getElementById("day").innerHTML = Day
    document.getElementById("date").innerHTML = d
    document.getElementById("time").innerHTML = t
}

function timebg(){
    var bgImage=''
    var d = new Date()
    var n = d.getHours()
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

    clock()
    
    }
    
timebg()

