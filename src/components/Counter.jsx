import React, { useEffect, useState } from "react";
import useCustomEffect from "./hooks/use-custom-effect";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);


  useCustomEffect(()=>{
    console.log("useEffect Triggered",count);
    

    return ()=>{
        console.log("cleanup done");
        
    }
  })


  console.log("component rerenderd");
  

  function handleIncrement() {  
    setCount((prev) => prev + 1);
  }

  function handleDecrement() {
    setCount((prev) => prev - 1);
  }

  return(
  <div>
    <h1>Counter: {count}</h1>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
  </div>
  );
};

export default Counter;
