import { Typography } from "@mui/material";
import React from "react";

const AText = ({ variant = "body1", children, color = "inherit" }) => {
  return (
    <Typography variant={variant} color={color}>
      {children}
    </Typography>
  );
};

export default AText;
