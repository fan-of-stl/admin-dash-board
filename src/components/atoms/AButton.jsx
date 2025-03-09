import React from "react";
import { Button } from "@mui/material";

const AButton = ({ variant, children, onClick }) => {
  return (
    <Button variant={variant ? variant : "contained"} onClick={onClick}>
      {children}
    </Button>
  );
};

export default AButton;
