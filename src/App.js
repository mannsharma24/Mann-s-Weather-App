import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/mannsharma24/Open-Weather-App.git">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/mann-sharma-8b374124a/">
          Mann Sharma
        </a>{" "}
        
      </div>
    </React.Fragment>
  );
}

export default App;
