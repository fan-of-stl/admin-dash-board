import Grid2 from "@mui/material/Grid2";
import React, { useState } from "react";
import FilterBar from "../molecules/FilterBar";
import SortBar from "../molecules/SortBar";
import StatsCard from "../molecules/StatsCard";
import ATable from "../atoms/ATable";
import ListIcon from '@mui/icons-material/List';

const RecordsTablePanel = ({ columns, data }) => {
    const [filteredData, setFilteredData] = useState(data);

    const handleFilterChange = (filters) => {
        let newData = data;
        if (filters.search) {
            newData = newData.filter((item) =>
                item.name.toLowerCase().includes(filters.search.toLowerCase())
            );
        }
        if (filters.category) {
            newData = newData.filter((item) => item.category === filters.category);
        }
        setFilteredData(newData);
    };

    return (
        <Grid2 container spacing={2}>
            <Grid2  container size={{ xs: 12 }} spacing={2}>
                <Grid2 size={{ xs: 11 }}>
                    <FilterBar
                        categories={[...new Set(data.map((item) => item.category))]}
                        onFilterChange={handleFilterChange}
                    />
                </Grid2>
                <Grid2 size={{ xs: 1}}>
                    <SortBar variant="contained" data={filteredData} />
                </Grid2>
            </Grid2>

            <Grid2 size={{ xs: 12 }}>
                <ATable columns={columns} data={filteredData} />
            </Grid2>
        </Grid2>
    );
};

export default RecordsTablePanel;
