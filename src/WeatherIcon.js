import React from "react";
import { WeatherSvg } from "weather-icons-animated";
import "./Weather.css";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "01d": "sunny",
    "01n": "clear-night",
    "02d": "partlycloudy",
    "02n": "partlycloudy",
    "03d": "cloudy",
    "03n": "cloudy",
    "09d": "pouring",
    "09n": "pouring",
    "010d": "rainy",
    "010n": "rainy",
    "011d": "lightning",
    "011d": "lightning-rainy",
    "013d": "snowy",
    "013d": "snowy-rainy",
    "050d": "fog",
  };

  return <WeatherSvg state={codeMapping[props.code]} width={50} height={50} />;
}
