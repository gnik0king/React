import React from "react";

const Header = ({ toggleTheme, theme }) => (
  <header>
    <h1>Task Manager</h1>
    <button onClick={toggleTheme}>
      {theme === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
  </header>
);

export default Header;
