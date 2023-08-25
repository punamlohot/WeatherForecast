var weatherDiv = document.querySelector(".weather");

async function getWeatherData(city){
    // console.log(city);
    //var res_data = await fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b2c7abe45380e9c0ab82e772d65d9d23&units=metric");

try
    {
    const res_data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b2c7abe45380e9c0ab82e772d65d9d23&units=metric`);
    if(res_data.status === 200){
        const res = await res_data.json();
        showWeatherData(res);
        //console.log(res);
    }
    else{
        alert("Please enter valid city name");
    }
}
catch (error) {
    console.error("Error fetching weather data:", error);
}  
}

document.querySelector(".btn").addEventListener("click", function () {
    var city = document.querySelector(".input-city").value;
    getWeatherData(city);
});

function showWeatherData(response){
    //console.log(response.name);
    document.querySelector(".city-name").innerHTML = response.name+`(${response.sys.country})`;
    // document.querySelector("img").src ="img/"+response.weather[0].description+".svg";
    document.querySelector(".max-temp").innerHTML = response.main.temp_max;
    document.querySelector(".min-temp").innerHTML = response.main.temp_min;
}