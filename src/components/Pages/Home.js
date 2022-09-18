import React from "react";
import { Box } from "@mui/material";
import AddDefects from "./AddDefects";
/* import AllDefects from "./AllDefects"; */
/* import DefectsContext from "../context/defect-context";
 */
/* const INITAIL_VALUES = {
  id: "",
  defect_title: "",
  defect_assigned: "",
  defect_status: "",
  defect_priority: "",
  defect_created: "",
}; */

const Home = () => {
  /* const [defects, setDefects] = useState(INITAIL_VALUES);
  const value = { defects, setDefects }; */

  /*   const getAllDefects = async () => {
    const { data } = await getDefectsFromApi();
    setDefects(data);
  };
  useEffect(() => {
    getAllDefects();
  }, []); */

  return (
    <>
      <Box sx={{ width: "70%", margin: "auto" }}>
        {/*<DefectsContext.Provider value={value}>  */}
        <AddDefects />
        {/* <AllDefects /> */}
        {/* </DefectsContext.Provider> */}
      </Box>
    </>
  );
};
export default Home;
