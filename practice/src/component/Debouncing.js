import React, { useEffect, useState } from "react";

const Debouncing = () => {
  const [todo, setTodo] = useState();
  const getTodos = async (query) => {
    console.log(this);
    const todos = await fetch(
      "https://jsonplaceholder.typicode.com/todos/" + query
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTodo(todo);
      });
  };

  function debounce(func, delay) {
    let timer;

    return function (...args) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  const debounceSearchHandler = debounce(getTodos, 1000);

  return (
    <div>
      <h1>Debouncing</h1>
      <input
        type="text"
        placeholder="Enter Todos Id"
        onChange={(event) => {
          debounceSearchHandler(event.target.value);
        }}
      />
      {todo ?? <h1>{todo?.userId}</h1>}
    </div>
  );
};

export default Debouncing;
