import { React, useState, useEffect, useRef } from "react";

export default function TodoFrom(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1200),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            className="todo-input edit"
            type="text"
            placeholder="Update it"
            value={input}
            onChange={handleChange}
            name="text"
          />
          <button onClick={handleSubmit} className="todo-button">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            className="todo-input edit"
            type="text"
            placeholder="Add  a Todo"
            value={input}
            onChange={handleChange}
            name="text"
          />
          <button onClick={handleSubmit} className="todo-button">
            Add
          </button>
        </>
      )}
    </form>
  );
}
