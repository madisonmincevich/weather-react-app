import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === `fahrenheit`) {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="units">°F</span> |{" "}
        <span className="units">
          <a href="/" onClick={convertToCelcius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celcius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(celcius)}</span>
        <span className="units">
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>{" "}
        |<span className="units">°C</span>
      </div>
    );
  }
}
