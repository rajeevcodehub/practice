import React, { useEffect, useState } from "react";
const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevState) => !prevState);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Stop watch</h1>
      <div class="stopwatchBody">
        <p>{time} sec</p>
      </div>
      <div class="startStopButtons">
        <button onClick={handleStartStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}>Reset </button>
      </div>
    </div>
  );
};

export default StopWatch;
