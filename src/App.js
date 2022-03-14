import React from "react";
// import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Thoughts from "./components/Thoughts";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Navbar /> */}
        <Welcome />
      </header>
      <div><Thoughts /></div>
    </div>
  );
}

export default App;
