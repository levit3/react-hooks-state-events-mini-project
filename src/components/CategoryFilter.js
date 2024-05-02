import React, { useState } from "react";
import TaskList from "./TaskList";
function CategoryFilter({ tasks, categories, children, removeTask }) {
  const [selectCategory, setSelectCategory] = useState("All");
  const [click, setClick] = useState(true);

  function handleClick(e) {
    e.target.className = click ? "selected" : "";
    setSelectCategory(click ? e.target.textContent : "All");
    setClick(!click);
  }

  const filteredTasks =
    selectCategory === "All" || selectCategory === ""
      ? tasks
      : tasks.filter((task) => task.category === selectCategory);

  const category = categories.map((category) => (
    <button key={category} onClick={handleClick}>
      {category}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {category}
      {children}
      <TaskList tasks={filteredTasks} removeTask={removeTask} />
    </div>
  );
}

export default CategoryFilter;
