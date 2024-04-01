import { useEffect, useRef, useState } from "react";

const WhackAMole = () => {
  const[random, setRandom] = useState(Math.floor(Math.random() * 10) + 1);
  const [score, setScore] = useState(0);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleClick = (e) => {
    if(+e.target.id === random){
      setScore(score => score + 1)
    }
  };
 

  useEffect(() => {
    setInterval(() => {
      setRandom(Math.floor(Math.random() * 10) + 1);
    }, 800);
  },[]);

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "5px" }}>
      <div
        style={{
          display: "flex",
          height: "154px",
          width: "157px",
          flexFlow: "wrap",
          alignItems: "center",
        }}
      >
        {numbers.map((number) =>
          number === random ? (
            <button
              onClick={handleClick}
              id={number}
              key={number}
              style={{
                height: "50px",
                width: "50px",
                border: "solid black 1px",
                backgroundColor: "red",
              }}
            />
          ) : (
            <button
              onClick={handleClick}
              key={number}
              id={number}
              style={{
                height: "50px",
                width: "50px",
                border: "solid black 1px",
                backgroundColor: "blue",
              }}
            />
          )
        )}

        <div>
          <p> Total Score: {score}</p>
        </div>
      
      </div>
    </div>
  );
};

export default WhackAMole;
