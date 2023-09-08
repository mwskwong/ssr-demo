"use client";

import Button from "@mui/material/Button";
import { FC, useState } from "react";

const MuiButton: FC = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <Button onClick={() => setClicked(true)}>
      {clicked ? "clicked" : "click me"}
    </Button>
  );
};

export default MuiButton;
