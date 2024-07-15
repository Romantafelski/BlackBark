import Home from "./Pages/Home/Home"
import Menu from "./Pages/Menu/Menu"
import About from "./Pages/About/About"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Background from "./Components/Images/Background.jpg";
import "./App.css";

function App() {
  return (
     <div className="App">
        <Router>
           <Routes>
              <Route className="home" path="/" element={<Home />} />
              <Route className="menu" path="/menu" element={<Menu />} />
              <Route className="about" path="/about" element={<About />} />
           </Routes>
        </Router>
     </div>
  );
}

export default App;
