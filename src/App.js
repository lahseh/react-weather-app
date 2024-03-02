import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by Blessing Orisaleye and is{" "}
          <a href="https://github.com/lahseh/react-weather-app" target="_blank">
            open-sourced on GitHub{" "}
          </a>{" "}
          and{" "}
          <a href="https://wondrous-crepe-301456.netlify.app/" target="_blank">
            {" "}
            hosted on Netlify{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
