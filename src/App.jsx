import React, { useState } from "react";

// Components
import ToDoForm from "./components/ToDoForm/TodoForm";
import ToDoItem from "./components/ToDoItem";

// CSS
import "./App.css";

function App() {
  // State
  const [todos, setTodos] = useState([
    { text: "Do this", inComplete: false },
    { text: "Do that", inComplete: false },
    { text: "Maybe something else", inComplete: false },
  ]);

  // Actions
  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, inComplete: false }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1>ToDo List</h1>
        {todos.map((todo, index) => (
          <ToDoItem key={index} todo={todo} />
        ))}
        <ToDoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
