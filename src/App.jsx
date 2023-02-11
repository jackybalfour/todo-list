import React, { useState } from "react";

// Components
import ToDoForm from "./components/ToDoForm/TodoForm";
import ToDoItem from "./components/ToDoItem/ToDoItem";

// CSS
import "./App.css";

function App() {
  // State
  const [todos, setTodos] = useState([
    { text: "Do this", isComplete: false },
    { text: "Do that", isComplete: false },
    { text: "Maybe something else", isComplete: false },
  ]);

  //Actions
  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isComplete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        <h1>My ToDo List</h1>
        {todos.map((todo, index) => (
          <ToDoItem
            key={index}
            todo={todo}
            index={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo} />

        ))}
        <ToDoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;