import React from "react";
import Home from "./components/Pages/Home";
import EditDefects from "./components/Pages/EditDefects";
import { Typography, Divider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/edit-defects/:id"
            element={<EditDefects />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
