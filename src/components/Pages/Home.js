import React, { useState, useEffect } from "react";
import { StyledBox } from "../../styles/Home";
import AddDefects from "./AddDefects";
import NavBar from "./Navbar";
import { getDefectsFromApi } from "../../service/api";
const INITIAL_VALUES = {
  id: "",
  defect_title: "",
  defect_status: "",
  defect_priority: "",
  defcet_created: "",
};

const Home = () => {
  const [defects, setDefects] = useState([]);
  const getAllDefects = async () => {
    let { data } = await getDefectsFromApi();
    setDefects(data);
  };

  useEffect(() => {
    getAllDefects();
  }, []);
  return (
    <>
      <NavBar />
      <StyledBox>
        <AddDefects defects={defects} setDefects={setDefects} />
      </StyledBox>
    </>
  );
};
export default Home;
