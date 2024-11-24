import React, { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState("light");

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      console.log("Theme changed to: ", newTheme);
      return newTheme;
  });
  };

  return (
    <div style={{margin: 'auto'}}>
    <div className={`app ${theme}`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <TaskInput addTask={addTask} />
      <ProgressBar tasks={tasks} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
      </div>
    </div>
  );
}

export default App;
