import React, { useRef, useState } from "react";
const ToDo = () => {
  const [toDo, setToDo] = useState([]);
  const ref = useRef();

  const handleAddButtonTask = () => {
    console.log(ref.current .value);
    setToDo(...toDo, ref.current.value)
  }
  console.log(toDo);

  return (
    <div>
      <h1>ToDo</h1>
      <input ref = {ref} type="text" placeholder="Enter To Do Task" />
      <button onClick={handleAddButtonTask}>Add</button>
    </div>
  );
};

export default ToDo;
