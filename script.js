const apiKey = "a9119e87f87145a6897b7439e601fb67"; // <-- Replace this!
const btn = document.getElementById("getWeatherBtn");
const result = document.getElementById("result");

btn.addEventListener("click", async () => {
  const city = document.getElementById("city").value.trim();
  if (!city) {
    result.innerText = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=d7a2b30d8bbd102517d6da194775bbaa&units=metric`;
try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    result.innerText = `🌡️ Temp in ${data.name}: ${data.main.temp}°C`;
  } catch (error) {
    result.innerText = `City not found or API error: ${error.message}`;
  }
});
