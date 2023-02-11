import React from "react";

// CSS
import "./ToDoItem.css";

function ToDoItem(props) {
  const { todo, completeTodo, removeToDo, index } = props;

  return <div className={`todo ${todo.isComplete ? "complete" : ""}`}>
    {todo.text}
    <button onClick={() => completeTodo(index)}>Complete</button>
  </div>;
}

export default ToDoItem;
