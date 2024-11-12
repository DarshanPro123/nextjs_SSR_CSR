"use client";
import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button
        className="bg-blue-500 text-white rounded px-4 py-2 mx-4"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="bg-blue-500 text-white rounded px-4 py-2 mx-4"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
