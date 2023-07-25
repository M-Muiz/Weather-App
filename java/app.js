let searcBtn = document.getElementById("search-btn");
let tempicon = document.getElementById("temp-icon");
let temperature = document.querySelector(".temperature");
let clouds = document.getElementById("clouds");
let windSpeed = document.getElementById("windSpeed");
let humadity = document.getElementById("humadity");
let maxtemp = document.getElementById("max-temp");
let mintemp = document.getElementById("min-temp");
let feelslike = document.getElementById("feels-like");
let country = document.getElementById("country");
let city = document.querySelector(".city");
let weatherType = document.getElementById("weather-type");
let image = document.getElementById("image");
let date = document.getElementById("date");
let loadContainer = document.querySelector(".min-container");
let dateDay;
let dateMonth;
let dateYear;
let lon;
let lat;

function currentLocation() {
  navigator.geolocation.getCurrentPosition((location) => {
    lat = location.coords.latitude;
    lon = location.coords.longitude;
  });
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=23506ad4266a1d665868d2bcb12d6c43&units=metric`
    // `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=23506ad4266a1d665868d2bcb12d6c43&units=metric`
  )
    .then((data) => data.json())
    .then((data) => {
      let chk_tmp = Math.floor(data.main.temp);
      if (chk_tmp > "-10" && chk_tmp <= "10") {
        tempicon.src = "../css/temp-icon/cold-wave.png";
      } else if (chk_tmp > "10" && chk_tmp <= "20") {
        tempicon.src = "../css/temp-icon/cold.png";
      } else if (chk_tmp > "20" && chk_tmp <= "30") {
        tempicon.src = "../css/temp-icon/man.png";
      } else if (chk_tmp > "30") {
        tempicon.src = "../css/temp-icon/hot.png";
      } else {
        tempicon.src = "../css/temp-icon/warning.png";
      }
      temperature.innerHTML = chk_tmp;

      clouds.innerHTML = data.clouds.all + "%";
      windSpeed.innerHTML = data.wind.speed + "m/s";
      humadity.innerHTML = data.main.humidity + "%";
      maxtemp.innerHTML = Math.floor(data.main.temp_max) + "&deg;";
      mintemp.innerHTML = Math.floor(data.main.temp_min) + "&deg;";
      feelslike.innerHTML = Math.floor(data.main.feels_like) + "&deg;";
      country.innerHTML = data.name + " ";
      city.innerHTML = "," + data.sys.country;
      let chk_weather = data.weather[0].main;
      weatherType.innerHTML = chk_weather;
      if (chk_weather == "Clouds") {
        image.src = "../css/folder/cld.png";
      } else if (chk_weather == "Rain") {
        image.src = "../css/folder/drizzle.gif";
      } else if (chk_weather == "Clear") {
        image.src = "../css/temp-icon/clear.png";
      } else if (chk_weather == "Smoke") {
        image.src = "../css/folder/smoke.png";
      } else if (chk_weather == "Haze") {
        image.src = "../css/folder/haze.png";
      } else if (chk_weather == "Snow") {
        image.src = "../css/folder/snow.gif";
      } else if (chk_weather == "Thunderstorm") {
        image.src = "../css/folder/storm.gif";
      } else if (chk_weather == "Smoke") {
        image.src = "../css/folder/smoke.png";
      } else if (chk_weather == "Mist") {
        image.src = "../css/folder/mist.png";
      } else {
        image.src = "../css/folder/warning.png";
      }
      let currentdate = new Date();
      let dayarr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
      dateDay = currentdate.getDay();
      dateMonth = currentdate.getMonth();
      if (dateMonth < 10) {
        dateMonth = "0" + dateMonth;
      }
      dateYear = currentdate.getFullYear();
      let fullDate = `${dayarr[dateDay]}, ${dateMonth} ${dateYear}`;
      date.innerHTML = fullDate;
    })
    .catch((err) => {
      console.log(err);
    });
}

currentLocation();

searcBtn.addEventListener("click", () => {
  let userVal = document.getElementById("userVal").value.toLowerCase();
  console.log(userVal);
  if (userVal == "".trim()) {
    tempicon.src = "../css/temp-icon/warning.png";
  country.innerHTML = `... Enter City Name ...`
  }
  date.innerHTML = "...Loading...";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${userVal}&appid=23506ad4266a1d665868d2bcb12d6c43&units=metric`
  )
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      let chk_tmp = Math.floor(data.main.temp);
      if (chk_tmp > "-10" && chk_tmp <= "10") {
        tempicon.src = "../css/temp-icon/cold-wave.png";
      } else if (chk_tmp > "10" && chk_tmp <= "20") {
        tempicon.src = "../css/temp-icon/cold.png";
      } else if (chk_tmp > "20" && chk_tmp <= "30") {
        tempicon.src = "../css/temp-icon/man.png";
      } else if (chk_tmp > "30") {
        tempicon.src = "../css/temp-icon/hot.png";
      } else {
        tempicon.src = "../css/temp-icon/warning.png";
      }
      temperature.innerHTML = chk_tmp;

      clouds.innerHTML = data.clouds.all + "%";
      windSpeed.innerHTML = data.wind.speed + "m/s";
      humadity.innerHTML = data.main.humidity + "%";
      maxtemp.innerHTML = Math.floor(data.main.temp_max) + "&deg;";
      mintemp.innerHTML = Math.floor(data.main.temp_min) + "&deg;";
      feelslike.innerHTML = Math.floor(data.main.feels_like) + "&deg;";
      country.innerHTML = data.name + " ";
      city.innerHTML = "," + data.sys.country;
      let chk_weather = data.weather[0].main;
      weatherType.innerHTML = chk_weather;
      if (chk_weather == "Clouds") {
        image.src = "../css/folder/cld.png";
      } else if (chk_weather == "Rain") {
        image.src = "../css/folder/drizzle.gif";
      } else if (chk_weather == "Clear") {
        image.src = "../css/temp-icon/clear.png";
      } else if (chk_weather == "Smoke") {
        image.src = "../css/folder/smoke.png";
      } else if (chk_weather == "Haze") {
        image.src = "../css/folder/haze.png";
      } else if (chk_weather == "Snow") {
        image.src = "../css/folder/snow.gif";
      } else if (chk_weather == "Thunderstorm") {
        image.src = "../css/folder/storm.gif";
      } else if (chk_weather == "Smoke") {
        image.src = "../css/folder/smoke.png";
      } else if (chk_weather == "Mist") {
        image.src = "../css/folder/mist.png";
      } else {
        image.src = "../css/folder/warning.png";
      }
      let currentdate = new Date();
      let dayarr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
      dateDay = currentdate.getDay();
      dateMonth = currentdate.getMonth();
      if (dateMonth < 10) {
        dateMonth = "0" + dateMonth;
      }
      dateYear = currentdate.getFullYear();
      let fullDate = `${dayarr[dateDay]}, ${dateMonth} ${dateYear}`;
      date.innerHTML = fullDate;
    })
    .catch((err) => {
       warn();  
    });
});
function warn(){
  loadContainer.style.border = `4px solid red`;
      setTimeout(()=>{
        loadContainer.style.border = "none"
      }, 2000)
      clouds.innerHTML = `00%`;
      windSpeed.innerHTML = `00 m/s`;
      humadity.innerHTML = `00%`;
      temperature.innerHTML = `00`
      mintemp.innerHTML = `00`
      maxtemp.innerHTML = `00`
      feelslike.innerHTML = `00`
      date.innerHTML = `<img src="../css/temp-icon/cross.png"> City Not Found <img src="../css/temp-icon/cross.png">`;
};


function abc() {
  let abc = document.querySelector(".min-container");
  let toggle = document.querySelector(".toggle-btn");
  abc.classList.toggle("color-change");
  toggle.classList.toggle("color-change");

  if (toggle.innerHTML == "Dark") {
    toggle.innerHTML = "Light";
  } else if (toggle.innerHTML == "Light") {
    toggle.innerHTML = "Dark";
  }
}
