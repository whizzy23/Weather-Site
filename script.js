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

    })
    .catch(err => {
        console.log(err);
    });
}
