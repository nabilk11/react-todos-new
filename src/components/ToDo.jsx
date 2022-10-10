import React from "react";

export const ToDo = ({ todo, completeToggle }) => {
  return (
    <div className="card">
      <h3 className={todo.complete ? "complete" : "incomplete"}>{todo.task}</h3>
      <button onClick={completeToggle} className="btn" id="btn-sm">
        {todo.complete ? "Mark Incomplete ⛔️" : "Mark Complete ✅"}
      </button>
    </div>
  );
};
