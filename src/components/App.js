import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);

  function removeTask(remTask) {
    setTasks(tasks.filter((task) => task.text !== remTask));
  }

  function addTask(task) {
    setTasks([...tasks, task]);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        tasks={tasks}
        removeTask={removeTask}
      >
        <NewTaskForm categories={CATEGORIES} addTask={addTask} />
      </CategoryFilter>
    </div>
  );
}

export default App;
