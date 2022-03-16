import React from "react";
import Welcome from "./components/Welcome";
import Thoughts from "./components/Thoughts";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Welcome />
      </header>
      <hr></hr>
      <Thoughts />
    </div>
  );
}

export default App;
