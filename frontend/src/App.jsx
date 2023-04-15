import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function CarrotIcon() {
  return <FontAwesomeIcon className="carrot" icon={faCarrot} />;
}

function App() {
  return (
    <div className="app">
      <h1>
        <CarrotIcon /> Hello SIGL <CarrotIcon />
      </h1>
    </div>
  );
}

export default App;
