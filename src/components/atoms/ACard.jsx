import { Card, CardContent } from "@mui/material";
import React from "react";

const ACard = ({ children, ...props }) => {
  return (
    <Card sx={{ p: 2, borderRadius: "10px", boxShadow: 2 }} {...props}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ACard;
