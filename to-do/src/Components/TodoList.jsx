import { React, useState } from "react";
import TodoFrom from "./TodoFrom";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) return;
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(newTodos);
  };

  const updateTodo = (id, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) return;
    setTodos((prev) => prev.map((item) => (item.id === id ? newValue : item)));
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    let removed = [...todos].filter((todo) => todo.id !== id);
    setTodos(removed);
  };

  return (
    <div>
      <h1 className="app-heading">Add Your Todo here</h1>
      <TodoFrom onSubmit={addToDo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}
