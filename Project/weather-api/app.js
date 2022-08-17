const key = "b4704060e4a657f7551fd1662b2dafe5";
const url = "https://api.openweathermap.org/data/2.5/";
const input = document.querySelector("#input");
const output = document.querySelector("#output");
const tempOutput = document.querySelector(".temp-output");
const feelsOutput = document.querySelector(".feels-output");
const cityName = "istanbul";

input.addEventListener("input", (e) => {
  fetch(`${url}weather?q=${input.value}&appid=${key}&units=metric&lang=tr`)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod == 200) {
        console.log(data);
        output.innerHTML = `${data.name} <small>(${
          data.sys.country
        })</small>`;
        tempOutput.innerHTML = `${data.main.temp.toFixed()}°C`;
        feelsOutput.innerHTML = `${data.main.temp_min.toFixed()}°C / ${data.main.temp_max.toFixed()}°C`;
      }
    });
  if (input.value == "") {
    output.innerHTML = "";
    tempOutput.innerHTML = "";
    feelsOutput.innerHTML = "";
  }
});
