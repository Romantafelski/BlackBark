import Home from "./Home/Home";
import About from "./About/About";
import Menu from "./Menu/Menu";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Background from "./Images/Background.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img className="background" src={Background} />
      <div className="tint"></div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
