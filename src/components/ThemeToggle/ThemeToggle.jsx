
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Sun from "../../assets/icons/Sun";
import Moon from "../../assets/icons/MoonIcon";
import { useTheme } from "../../components/Context/ThemeContext";
import "./ThemeToggle.css";
const ThemeToggle = () => {

    const {theme, toggleTheme} = useTheme();


  return <button className="theme-toggle-btn" onClick={toggleTheme}>
           {theme === "light" ? <Moon /> : <Sun /> }
         </button>;
};

export default ThemeToggle;
