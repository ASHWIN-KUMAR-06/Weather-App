






const searchButton = document.querySelector(".searchButton");

searchButton.addEventListener("click", ()=>{
  const city = document.querySelector(".inputfield").value;
  getData(city);
})


function getData(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d02d86a054ba4b4e737703186aec2670`)
    .then(response=> response.json())
    .then(data=>{

      document.querySelector(".location").textContent = data.message ? `${data.message} , enter a valid city name` : data.name ;

      document.querySelector('.temperature').textContent = data.message ? "" : `${Math.floor(data.main.temp)} °C`;
      document.querySelector('.max_temp>.p1').textContent = data.message ? "" : `${Math.floor(data.main.temp_max)} °C`;
      document.querySelector('.min_temp>.p1').textContent = data.message ? "" : `${Math.floor(data.main.temp_min)} °C`;

    })
    .catch((error)=>{
      console.log("something went wrong", error);
    })
}