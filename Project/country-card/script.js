function country(country) {
  let container = document.querySelector("#container");

  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    let data = JSON.parse(request.responseText)[0];
    setCountry(data);
  });
  function setCountry(data) {
    let html = `
    <div class="card" style="width: 18rem">
        <img src="${data.flags.svg}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 card-title">Country: ${data.name.common}</h5>
          <h6 >Capital city: ${data.capital[0]}</h6>
          <h6 >Language: ${Object.values(data.languages)}</h6>
          <h6 >Population: ${(data.population / 1000000).toFixed(1)}</h6>
        </div>
      </div>
  `;
    console.log(data);
    container.innerHTML += html;
  }
}
country("turkey");
country("italy");
country("Azerbaijan");
country("uganda");
country("united states");
country("japan");
country("germany");
country("ukraine");
country("france");
country("canada");
