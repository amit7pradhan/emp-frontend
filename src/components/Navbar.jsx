import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Clear any stored user data if necessary
    localStorage.removeItem("user"); // Example if using localStorage
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Employment Agency
        </Link>
        <div>
          {/* Registration button - shown on all pages */}
          <Link to="/" className="btn btn-outline-light mx-2">
            Registration
          </Link>

          {/* Login button - shown only on the registration page */}
          {location.pathname === "/" && (
            <Link to="/login" className="btn btn-outline-light mx-2">
              Login
            </Link>
          )}

          {/* Logout button - shown only on the welcome page */}
          {location.pathname === "/welcome" && (
            <button
              onClick={handleLogout}
              className="btn btn-outline-light mx-2"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
