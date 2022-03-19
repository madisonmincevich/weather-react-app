import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          <a
            href="https://github.com/madisonmincevich/weather-react-app"
            alt=""
            target="_blank"
            rel="noreferrer"
          >
            Open sourced code
          </a>{" "}
          by{" "}
          <a
            href="https://stupefied-poitras-c9d7d8.netlify.app/"
            alt=""
            target="_blank"
            rel="noreferrer"
          >
            Maddie Mincevich
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
