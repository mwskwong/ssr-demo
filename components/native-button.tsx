"use client";

import { FC, useState } from "react";

const NativeButton: FC = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <button onClick={() => setClicked(true)}>
      {clicked ? "clicked" : "click me"}
    </button>
  );
};

export default NativeButton;
