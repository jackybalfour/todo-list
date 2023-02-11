import React, { useState } from "react";

function ToDoForm(props) {
  // Props
  const { addTodo } = props;

  const name = "alexander";

  // State
  const [todo, setTodo] = useState("");
  console.log("todo", todo);

  // Actions
  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo) {
      addTodo(todo);
      setTodo("");
    }
  };

  const completeToDO = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodo(newTodos);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todo here..."
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
    </form>
  );
}

export default ToDoForm;
