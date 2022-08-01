import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSquare } from "react-icons/bi";
import { AiFillCheckSquare } from "react-icons/ai";
import TodoFrom from "./TodoFrom";

export default function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoFrom edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      key={index}   
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
    >
      <div className="icons" onClick={() => completeTodo(todo.id)}>
      {
        todo.isComplete ? (<AiFillCheckSquare/>) : (<BiSquare/>)
      }
      
      </div>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <FaRegEdit
          className="edit-icon"
          onClick={() =>
            setEdit({
              id: todo.id,
              value: todo.text,
            })
          }
        />
        <RiDeleteBin6Line
          className="delete-icon"
          onClick={() => removeTodo(todo.id)}
        />
      </div>
    </div>
  ));
}
