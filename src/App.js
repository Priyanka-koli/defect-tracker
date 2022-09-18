import React from "react";
import Home from "./components/Pages/Home";
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Defect Tracker
      </Typography>
      <Home />
    </>
  );
}

export default App;
