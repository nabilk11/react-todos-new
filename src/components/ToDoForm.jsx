import React from "react";

export const ToDoForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState(" ");

  // handleChange for task
  const handleChange = (e) => {
    setNewTask(e.currentTarget.value);
  };

  // handle submit/add task
  const handleSubmit = (e) => {
    e.preventdefault();
    addTask(newTask);
    setNewTask("");
  };


 

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit} action="" method="post">
        <h3 className="form-header">Add a New Task</h3>
        <input
          placeholder="new task"
          value={newTask}
          onChange={handleChange}
          type="text"
          name="new_task"
          id="new_task"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
