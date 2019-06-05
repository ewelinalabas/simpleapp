import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Notes from "./Notes";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Notes />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
