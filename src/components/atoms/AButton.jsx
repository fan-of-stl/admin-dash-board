import React from "react";
import { Button } from "@mui/material";

const AButton = ({
  variant = "contained",
  color = "primary",
  size = "medium",
  fullWidth = false,
  sx = {},
  onClick,
  children,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{ ...sx }}
    >
      {children}
    </Button>
  );
};

export default AButton;
