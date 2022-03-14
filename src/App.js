import React from "react";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Thoughts from "./components/Thoughts";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {/* <Welcome /> */}
        <p>Hello World!</p>
        <Thoughts />
      </header>
    </div>
  );
}

export default App;
