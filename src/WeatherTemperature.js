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
        <span>
          <strong>{Math.round(props.celsius)}</strong>
        </span>
        <span className="temperature">
          <sup className="fs-6">
            <strong className="degrees"> °C | </strong>
            <a href="/" className="degrees" onClick={showFahrenheit}>
              <strong>F</strong>
            </a>
          </sup>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="unit">
        <span>
          <strong>{Math.round(fahrenheit)}</strong>
        </span>
        <span className="temperature">
          <sup className="fs-6">
            <strong className="degrees"> °F | </strong>
            <a href="/" className="degrees" onClick={showCelsius}>
              <strong>°C</strong>
            </a>
          </sup>
        </span>
      </div>
    );
  }
}
