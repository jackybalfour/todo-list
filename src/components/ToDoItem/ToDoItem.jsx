import React from "react";

// CSS
import "./ToDoItem.css";

function ToDoItem(props) {
  const { todo, completeTodo, removeTodo, index } = props;

  return <div className={`todo ${todo.isComplete ? "complete" : ""}`}>
    {todo.text}
    <div>
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>Remove</button>
    </div>
  </div>;
}

export default ToDoItem;
