import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import comingSoonAnimation from "./assets/coming-soon.json";
import "./App.css";
import Grid from "@mui/material/Grid2";
import AText from "./components/atoms/AText";
import SortBar from "./components/moldecules/SortBar";

function App() {
  return (
    <div className="App">
      <div className="loader-container">
        <Grid container sx={{ alignItems: "center" }}>
          <Grid size={{ sm: 12 }}>
            <Player
              autoplay
              loop
              src={comingSoonAnimation}
              style={{ height: "80vh", width: "80vw" }}
            />
          </Grid>
          <Grid
            size={{ sm: 12 }}
            sx={{ alignItems: "center" }}
            textAlign={"center"}
          >
            <AText variant="h4">Home Page Coming Soon...</AText>
            <SortBar />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
