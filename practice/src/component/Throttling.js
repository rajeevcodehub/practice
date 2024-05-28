import React, { useState } from "react";

const Throttling = () => {
  const [todo, setTodo] = useState("");
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

  const throttle = (func, interval) => {
    let inThrottle = false;
    return function (...args) {
      if (!inThrottle) {
        inThrottle = true;
        func.apply(this, args);
        setTimeout(() => {
          inThrottle = false;
        }, interval);
      }
    };
  };

  const throttleHandler = throttle(getTodos, 1000);

  return (
    <div>
      <h1>Throttling</h1>
      <input
        type="number"
        placeholder="Enter userId"
        onChange={(event) => {
          throttleHandler(event.target.value);
        }}
      />
    </div>
  );
};

export default Throttling;
