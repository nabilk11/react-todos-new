import React from "react";
import { ToDo } from "./ToDo";

export const ToDoList = ({ toDoList, filterComplete, completeToggle }) => {
  return (
    <div>
      {toDoList.map((todo) => {
        return <ToDo completeToggle={completeToggle} todo={todo} />;
      })}
      <div className="list-control">
        <button onClick={filterComplete} className="btn" id="btn-del">Clear Completed</button>
      </div>
    </div>
  );
};
