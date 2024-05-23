import React, { useState, createContext } from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";

export const ThemeContext = createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  document.body.style.background = darkTheme
    ? "linear-gradient(to right, #282c34, #000000)"
    : "linear-gradient(to right, #ead8ce, #f2c283, #f2a839)";

  document.body.style.color = darkTheme ? "#ffffff" : "#000000";
  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
