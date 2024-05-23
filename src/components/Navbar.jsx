import React from "react";
import "./styles/navbar.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../App";
import { useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <header className="App-header">
      {darkTheme ? (
        <LightModeIcon
          onClick={toggleTheme}
          style={{ color: "white", margin: "10px", padding: "3px" }}
        />
      ) : (
        <DarkModeIcon
          onClick={toggleTheme}
          style={{ color: "black", margin: "10px", padding: "3px" }}
        />
      )}

      <NavLink to="/" className="nav-link">
        <span className="nav-span">Home</span>
      </NavLink>
      <NavLink to="/details" className="nav-link">
        <span className="nav-span">Browse Movies</span>
      </NavLink>
      <NavLink to="/register" className="nav-link">
        <span className="nav-span">Register</span>
      </NavLink>
      <NavLink to="/profile" className="nav-link">
        <span className="nav-span">Profile</span>
      </NavLink>
    </header>
  );
};

export default Navbar;
