import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox() {
  const InitUrl =
    "https://plus.unsplash.com/premium_photo-1733317236155-b0e1a2930f37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xlYXIlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  let info = {
    feelsLike: 24.04,
    humidity: 60,
    temp: 26.0,
    temp_max: 30.0,
    temp_min: 22.0,
    weather: "Clear",
  };
  return (
    <>
      <h3>Info Box - {info.weather}</h3>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={InitUrl} title="Clear Weather" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bengaluru
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Temperatur : {info.temp}&deg;C</p>
            <p>Humidity : {info.humidity}</p>
            <p>Temperatur Max : {info.temp_max}&deg;C</p>
            <p>Temperatur Min : {info.temp_min}&deg;C</p>
            <p>
              The weather can be described as <strong>{info.weather}</strong>{" "}
              and feels like {info.feelsLike}.
            </p>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
