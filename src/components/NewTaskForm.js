import React, { useState } from "react";

function NewTaskForm({ categories, addTask }) {
  const dropCategories = categories.filter((c) => c !== "All");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function onTaskFormSubmit(e) {
    e.preventDefault();
    const newTask = { text, category };
    addTask(newTask);
  }

  const categoryDropDown = dropCategories.map((category, index) => (
    <option value={category} key={index}>
      {category}
    </option>
  ));

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={handleCategoryChange}
        >
          {categoryDropDown}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
