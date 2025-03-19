import { Card, CardContent, Grid2 } from "@mui/material";
import React from "react";

const ACard = ({ children, ...props }) => {
  return (
    <Grid2>
      <Card sx={{ p: 2, borderRadius: "10px", boxShadow: 2 }} {...props}>
        <CardContent>{children}</CardContent>
      </Card>
    </Grid2>
  );
};

export default ACard;
