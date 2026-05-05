const APIKEY = "dcb806957aeefafaca04e7cdf47fc927",
URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchbox = document.getElementById("city");
const searchbtn = document.getElementById("btn");

async function checkWeather(city = "Mumbai") {
  const res = await fetch(URL +city + `&appid=${APIKEY}`);
  let data = await res.json();
  console.log(data);
  document.querySelector(".temp").innerHTML = Math.ceil(data.main.temp) + "\u00B0" + "C"
  document.querySelector(".city").innerHTML = data.name
  document.querySelector(".humidity").innerHTML = Math.floor(data.main.humidity) + "%"
  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h"
}

searchbtn.addEventListener("click", ()=>{
  checkWeather(searchbox.value)
  
})

searchbox.addEventListener("keydown", (e)=>{
  if(e.key == "Enter"){
    checkWeather(searchbox.value)
  }

})

checkWeather(); 