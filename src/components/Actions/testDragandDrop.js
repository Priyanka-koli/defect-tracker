import React, { useEffect } from "react";
import dragula from "dragula";
import { Box } from "@mui/material";

const Test = () => {
  function draganddrop() {
    dragula([
      document.querySelector("#left1"),
      document.querySelector("#right1"),
    ]);
  }
  useEffect(() => {
    draganddrop();
  }, []);
  return (
    <>
      <Box className="wrapper" sx={{ display: "flex", flexDirection: "row" }}>
        <Box id="left1" className="container">
          <div>ABC</div>
          <div>BCD</div>
          <div>DEF</div>
          <div>RDF</div>
        </Box>
        <Box id="right1" className="container">
          <div>right</div>
        </Box>
      </Box>
    </>
  );
};
export default Test;
