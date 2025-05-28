const form = document.getElementById("weatherInfo");
const input = document.getElementById("cityName");
const api_key = "a98da3413bfc42bbb24f8fefb4047f9c";
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = input.value.toLowerCase();
  console.log(name);
  input.value = "";

  try {
    result.innerHTML = `<p style="color:blue"> Loading....</p> `;

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api_key}&units=metric`
    );

    if (!res.ok) throw new error("City not found");

    const xyz = await res.json();

    result.innerHTML = `<h2> ${name.toUpperCase()} </h2>
             <p>Temprature = ${xyz.main.temp}<sup>o</sup></p>
             <p> Condition = ${xyz.weather[0].main}</p>
             <p> Humidity = ${xyz.main.humidity}%</p>
             <p> Wind Speed = ${xyz.wind.speed}m/s</p>`;
  } catch (error) {
    result.innerHTML = `<h1 style="color:red "> City not Found</h1> `;
  }
});
