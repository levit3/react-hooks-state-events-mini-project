import React from "react";

function Task({ text, category, removeTask }) {
  function handleDelete(e) {
    const task = e.target.previousSibling.textContent;
    removeTask(task);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text" name="text">
        {text}
      </div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
