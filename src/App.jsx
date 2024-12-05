import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct import from react-router-dom
import Navbar from "./components/Navbar.jsx";
import Registration from "./components/Registation.jsx";
import Login from "./components/Login.jsx";
import Welcome from "./components/Welcome.jsx";

function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      {/* Routes for different pages */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
