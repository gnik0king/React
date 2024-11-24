import React from "react";

const ProgressBar = ({ tasks }) => {
  const completed = tasks.filter((task) => task.completed).length;
  const total = tasks.length;
  const progress = total === 0 ? 0 : (completed / total) * 100;

  return (
    <div>
      <p>Progress: {completed}/{total}</p>
      <div style={{ width: "100%", background: "#ccc", height: "10px" }}>
        <div
          style={{
            width: `${progress}%`,
            background: "green",
            height: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
