import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SearchBox() {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for weather in:", city);
    setCity("");
  };

  return (
    <div>
      <h3>Search for Weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name*"
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
