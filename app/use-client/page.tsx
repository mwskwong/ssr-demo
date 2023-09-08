"use client";

import { useState } from "react";

const UseClient = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>count +1</button>
      <p>You clicked {count}</p>
    </div>
  );
};

// make sure this page is not statically generated
export const dynamic = "force-dynamic";

export default UseClient;
