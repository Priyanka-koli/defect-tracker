import React from "react";
import { StyledBox } from "../../styles/Home";
import AddDefects from "./AddDefects";
import NavBar from "./Navbar";

const Home = () => {
  return (
    <>
      <NavBar />

      <StyledBox>
        <AddDefects />
      </StyledBox>
    </>
  );
};
export default Home;
