import { useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    document.body.classList.toggle("light-mode");
    setDarkMode(!darkMode);
  };

return (
  <nav className="navbar">
    <h2
  className="logo"
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
>
  Shivaraj PM
</h2>
    <div className="nav-right">

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button
        className={`theme-toggle ${darkMode ? "dark" : "light"}`}
        onClick={toggleTheme}
      >
        <span className="moon">🌙</span>
        <span className="sun">☀️</span>
        <div className="toggle-circle"></div>
      </button>

    </div>
  </nav>
);
}

export default Navbar;