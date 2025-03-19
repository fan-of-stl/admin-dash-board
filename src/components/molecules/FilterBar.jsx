import { MenuItem } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import AInput from "../atoms/AInput";
import AIcon from "../atoms/AIcon";
import ACard from "../atoms/ACard";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ClearIcon from "@mui/icons-material/Clear";
import AButton from "../atoms/AButton";

const FilterBar = ({ categories, onFilterChange }) => {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
  });

  const handleChange = (field, value) => {
    setFilters((prev) => {
      const updatedFilters = { ...prev, [field]: value };
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  const handleClear = () => {
    const clearedFilters = { search: "", category: "" };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <ACard>
      <Grid container flex={"row"} spacing={2} alignItems="center">
        <Grid size={{ xs: 4, sm: 4 }}>
          <AInput
            label="Search..."
            fullWidth
            value={filters.search}
            onChange={(e) => handleChange("search", e.target.value)}
            InputProps={{
              endAdornment: <AIcon name={SearchIcon} />,
            }}
          />
        </Grid>

        <Grid size={{ xs: 4, sm: 4 }}>
          <AInput
            select
            fullWidth
            label="Category"
            value={filters.category}
            onChange={(e) => handleChange("category", e.target.value)}
          >
            {categories?.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </AInput>
        </Grid>

        <Grid size={{ xs: 2, sm: 2 }}>
          <AButton
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => onFilterChange(filters)}
          >
            <AIcon name={FilterListIcon} /> Filter
          </AButton>
        </Grid>

        <Grid size={{ xs: 2, sm: 2 }}>
          <AButton
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={handleClear}
          >
            <AIcon name={ClearIcon} /> Clear
          </AButton>
        </Grid>
      </Grid>
    </ACard>
  );
};

export default FilterBar;
