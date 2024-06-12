import React, { useState } from "react";

const Calculator = () => {
  const numberpad = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "/",
    "*",
    "=",
    "C",
    ".",
  ];
  const [value, setValue] = useState("");
  const [calculatedValue, setCalculatedValue] = useState("");
  const handleClick = (e) => {
    const id = e.target.id;
    if (id === "C") {
      setValue("");
    } else if (id === "=") {
      const res = eval(value);
      setCalculatedValue(res);
    } else {
      setValue((val) => val + e.target.innerText);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <form>
        <input value={value} type="text" onChange={handleChange} />
        {value.length > 0  ? <p style={{ fontSize: "40px" }}>{calculatedValue}</p> : null}
      </form>
      <div className="container" onClick={handleClick}>
        {numberpad.map((item, idx) => {
          return (
            <button id={item} key={idx} className="cell">
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
