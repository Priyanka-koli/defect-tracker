import React from "react";
import { StyledBox } from "../../styles/Home";
import AddDefects from "./AddDefects";
import NavBar from "./Navbar";
/* import Test from "../Actions/testDragandDrop";
 */
const Home = () => {
  return (
    <>
      <NavBar />
      {/*       <Test></Test>
       */}{" "}
      <StyledBox>
        <AddDefects />
      </StyledBox>
    </>
  );
};
export default Home;
