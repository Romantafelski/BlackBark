import Home from "./Home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Background from "./Images/Background.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img className="background" src={Background} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/3rdpage" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
