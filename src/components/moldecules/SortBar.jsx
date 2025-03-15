import { Grid2 } from "@mui/material";
import React, { useState } from "react";
import AButton from "../atoms/AButton";
import AIcon from "../atoms/AIcon";
import { Sort } from "@mui/icons-material";

const SortBar = ({ data = [], onSort }) => {
  const [sortedData, setSortedData] = useState(data);
  const handleSorting = () => {
    const sorted = [...sortedData].sort();
    setSortedData(sorted);

    if (onSort) onSort(sorted);
  };
  return (
    <Grid2
      container
      size={{ sm: 1, md: 1, xl: 1, xs: 1 }}
      alignItems={"center"}
    >
      <AButton variant="text" onClick={handleSorting}>
        <AIcon name={Sort} fullWidth />
      </AButton>
    </Grid2>
  );
};

export default SortBar;
