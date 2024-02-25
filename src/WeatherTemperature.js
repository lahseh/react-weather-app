import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="unit">
        <span id="current-temp" className="current-temp-numeral">
          {" "}
          {Math.round(props.celsius)}
        </span>
        °C |{" "}
        <a href="/" className="change-unit" onClick={showFahrenheit}>
          F
        </a>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="unit">
        <span id="current-temp" className="current-temp-numeral">
          {" "}
          {Math.round(fahrenheit)}
        </span>
        °F |{" "}
        <a href="/" className="change-unit" onClick={showCelsius}>
          C
        </a>
      </div>
    );
  }
}
