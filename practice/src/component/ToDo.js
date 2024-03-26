import React, { useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdSave } from "react-icons/md";
const ToDo = () => {
  const [toDos, setToDos] = useState([]);
  const [edit, setEdit] = useState({ isEdit: false, key: null });
  const ref = useRef();

  const handleAddTask = () => {
    setToDos((toDos) => [
      ...toDos,
      { task: ref.current.value, key: toDos.length + 1 },
    ]);
  };

  const handleEdit = (key) => {
    console.log(key);
    setEdit({ isEdit: true, key: key });
  };

  const handleDelete = (key2) => {
    let res = toDos.filter((task, key) => {
      return key2 - 1 !== key;
    });
    setToDos(res);
  };

  return (
    <div>
      <h1 className="toDoHeading">ToDo</h1>
      <div className="toDoCreate">
        <input ref={ref} type="text" placeholder="Enter To Do Task" />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div className="toDoList">
        <ul>
          {toDos?.map(({ task, key }) => {
            return task ? (
              <div className="toDoItems">
                {edit.isEdit && edit.key === key ? (
                  <div>
                    <input type="text" value={task} /> <MdSave />
                  </div>
                ) : (
                  <div style={{display: "flex"}}>
                    <li>{task}</li>
                    <MdEdit
                      onClick={() => {
                        handleEdit(key);
                      }}
                      style={{ fontSize: "1.3em" }}
                    />
                  </div>
                )}

                <MdDelete
                  onClick={() => {
                    handleDelete(key);
                  }}
                />
              </div>
            ) : null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
