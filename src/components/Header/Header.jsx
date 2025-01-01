import { useState } from "react";
import "./header.css";
import { useTheme } from "../../context/ThemeContext";

export default function Header() {
  // Toggle menu
  const [Toggle, showMenu] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav-logo">
          Osman
        </a>

        <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                <i className="uil uil-estate nav-icon"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                <i className="uil uil-user nav-icon"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">
                <i className="uil uil-file-alt nav-icon"></i> Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                <i className="uil uil-briefcase-alt nav-icon"></i> Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                <i className="uil uil-scenery nav-icon"></i> Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <i className="uil uil-message nav-icon"></i> Contact
              </a>
            </li>
            <li className="nav-item">
              <i
                className={`bx ${darkMode ? "bx-sun hide-icon" : "bx-moon"} theme-icon`}
                onClick={toggleDarkMode}
              ></i>
            </li>
          </ul>

          <i
            className="uil uil-times nav-close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav-toggle">
          <i
            className={`bx ${darkMode ? "bx-sun" : "bx-moon"}`}
            onClick={toggleDarkMode}
          ></i>
          <i
            className="uil uil-apps"
            style={{ marginLeft: "12px" }}
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
      </nav>
    </header>
  );
}
