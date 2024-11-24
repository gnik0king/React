import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import ProgressBar from "./components/ProgressBar";

function App() {
 
  return (
    <div className={`app ${theme}`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
}

export default App;
