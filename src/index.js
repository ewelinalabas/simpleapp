import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Note from "./Note";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Note />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
