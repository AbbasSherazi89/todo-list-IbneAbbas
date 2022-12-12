import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Layout/Navbar";
import ArraysMethod from "./Pages/ArraysMethod";
import CustomHooks from "./Pages/CustomHooks";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hof" element={<ArraysMethod />} />
          <Route path="/hooks" element={<CustomHooks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
