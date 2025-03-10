import { TextField } from "@mui/material";
import React from "react";

const AInput = ({
  label,
  type = "text",
  variant = "outlined",
  size = "medium",
  fullWidth = false,
  sx = {},
  ...props
}) => {
  return (
    <TextField
      label={label}
      type={type}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      sx={{
        borderRadius: "8px",
        "& .MuiInputBase-root": {
          height: "40px",
          display: "flex",
          alignItems: "center",
          padding: "0 14px",
        },
        "& .MuiInputLabel-root": {
          top: "-4px",
        },
        "& .MuiInputLabel-shrink": {
          top: "0",
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default AInput;
