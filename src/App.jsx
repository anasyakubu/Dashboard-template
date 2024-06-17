import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

// import axios from "axios";

// axios.defaults.baseURL = "https://devograph.onrender.com";
// axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <div className="App font-nunito-eb">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            {/* <Route path="/Projects" element={<Projects />}></Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
