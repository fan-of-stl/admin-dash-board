import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Player } from "@lottiefiles/react-lottie-player";
import comingSoonAnimation from "./assets/coming-soon.json";
import "./App.css";
import Grid2 from "@mui/material/Grid2";
import AText from "./components/atoms/AText";
import StatsCard from "./components/molecules/StatsCard";
import RecordsTablePanel from "./components/organisms/RecordsTablePanel";
import PeopleIcon from '@mui/icons-material/People';

const columns = [
  { header: "ID", key: "id" },
  { header: "Name", key: "name" },
  { header: "Category", key: "category" },
];

const mockData = [
  { id: 2, name: "Item B", category: "Clothing" },
  { id: 3, name: "Item C", category: "Electronics" },
  { id: 1, name: "Item A", category: "Electronics" },
  { id: 4, name: "Item D", category: "Grocery" },
  { id: 4, name: "Item G", category: "Grocery" },
  { id: 4, name: "Item E", category: "Grocery" },
  { id: 4, name: "Item N", category: "Grocery" },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="loader-container">
          <Grid2 container sx={{ alignItems: "center" }}>
            <Grid2 size={{ xs: 12 }}>
              <Player
                autoplay
                loop
                src={comingSoonAnimation}
                style={{ height: "80vh", width: "80vw" }}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }} sx={{ alignItems: "center" }} textAlign={"center"}>
              <AText variant="h4">Home Page Coming Soon...</AText>
              <StatsCard
                title="Total Users"
                value="100"
                icon={PeopleIcon}
                description="Number of users registered on the platform. This description can be very long and should be scrollable if it exceeds the maximum height."
                width="20%"
              />
              <RecordsTablePanel columns={columns} data={mockData} />
            </Grid2>
          </Grid2>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
