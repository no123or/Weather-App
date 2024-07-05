
// fetch("https://api.openweathermap.org/data/2.5/weather?q=faisalabad&appid=fd4af9dce37d7cfb1fe9acf0579e2086&units=metric")
// .then(response => {
//     if (response.ok) {
//         console.log("Success")
//     } else {
//         console.log("Unsuccessful")
//     }
//     })
// .then(data => console.log(data))
// .catch(error => console.log("error"))
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let apiKey = "fd4af9dce37d7cfb1fe9acf0579e2086";
const searchBox = document.querySelector('.searchBtn input');
const searchBtn = document.querySelector('.searchBtn button');
const weatherImage = document.querySelector(".weather-image");
const display = document.getElementById('Weather');

async function weather(city){
 const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
 var data = await response.json();
 console.log(data);
 document.querySelector('.city').innerHTML= data.name;
 document.querySelector('.tempp').innerHTML= `${data.main.temp}&deg;C`;
 document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
 document.querySelector('.wind').innerHTML = `${data.wind.speed}Km/h`;

 if (data.weather[0].main.toLowerCase() === "clouds") {
    weatherImage.src = "cloudy.jfif";
} else if(data.weather[0].main.toLowerCase() === 'clear'){
    weatherImage.src = "noon.jfif";
} else if (data.weather[0].main.toLowerCase() === "rain") {
    weatherImage.src = "rain.jfif";
} else if (data.weather[0].main.toLowerCase() === 'mist'){
    weatherImage.src = "mist.jfif";
} else if (data.weather[0].main.toLowerCase() === 'drizzle'){
    weatherImage.src = "drizzle.jfif";
}
display.style.display = 'block';
}
searchBtn.addEventListener('click', () => { 
    weather(searchBox.value);
    })
