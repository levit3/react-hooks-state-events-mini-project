import React from "react";
import Task from "./Task";

function TaskList({ tasks, removeTask }) {
  const task = tasks.map((task, index) => (
    <Task
      key={index}
      text={task.text}
      category={task.category}
      removeTask={removeTask}
    />
  ));
  return <div className="tasks">{task}</div>;
}

export default TaskList;
