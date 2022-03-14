import { Navbar, Thoughts, Welcome } from "./components";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Welcome />
        <Thoughts />
      </header>
    </div>
  );
}

export default App;
