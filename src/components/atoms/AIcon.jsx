import React from "react";
import { Icon } from "@mui/material";
import Box from "@mui/material/Box";

const AIcon = ({ name: IconComponent, color = "inherit", size = "medium" }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mx: 2 }}>
      {typeof IconComponent === "string" ? (
        <Icon sx={{ fontSize: size, color }}>{IconComponent}</Icon>
      ) : (
        <IconComponent sx={{ fontSize: size, color }} />
      )}
    </Box>
  );
};

export default AIcon;
