import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

function SearchBox() {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "21ab1d4d19e1a64544e3ab707045e311";

  const getWeather = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
      if (!response.ok) {
        throw new Error("Response not ok");
      }
      const data = await response.json();

      function kelvinToCelsius(kelvin) {
        return (kelvin - 273.15).toFixed(2);
      }

      let result = {
        temp: kelvinToCelsius(data.main.temp),
        temp_min: kelvinToCelsius(data.main.temp_min),
        temp_max: kelvinToCelsius(data.main.temp_max),
        humidity: data.main.humidity,
        feelsLike: kelvinToCelsius(data.main.feels_like),
        description: data.weather[0].description,
      };
      console.log("Weather data:", result);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for weather in:", city);
    setCity("");
    getWeather();
  };

  return (
    <div>
      <h3>Search for Weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          color="secondary"
          margin="normal"
          required
          focused
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchBox;
