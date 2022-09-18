import React, { useState, useEffect } from "react";
import Buttons from "../Actions/Buttons";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextFields from "../Actions/TextFields";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { addDefectsToApi, getDefectsFromApi } from "../../service/api";
import AllDefects from "./AllDefects";
/* import DefectsContext from "../context/defect-context"; */

const INITIAL_VALUES = {
  id: "",
  defect_number: "",
  defect_title: "",
  defect_status: "",
  defect_priority: "",
  defcet_created: "",
};
const AddDefects = () => {
  const [showInput, setShowInput] = useState(false);
  const [defects, setDefects] = useState([]);
  /* const { defects, setDefects } = React.useContext(DefectsContext); */
  const [newDefect, setNewDefect] = useState(INITIAL_VALUES);

  const getAllDefects = async () => {
    let { data } = await getDefectsFromApi();
    setDefects(data);
  };

  useEffect(() => {
    getAllDefects();
  }, []);

  const clickHandler = () => {
    setShowInput(true);
  };

  const changeHandler = (event) => {
    setNewDefect({ ...newDefect, [event.target.name]: event.target.value });
  };
  const addDefectHandler = async () => {
    await addDefectsToApi(newDefect);
    getAllDefects();
    //after submitting setting input filed values to empty
    setNewDefect(INITIAL_VALUES);
    setShowInput(false);
  };
  return (
    <>
      <Buttons
        color="red"
        title="New Defect"
        size="medium"
        starticon={<AddCircleOutlineIcon />}
        onClick={clickHandler}
      />
      {showInput && (
        <>
          <TextFields
            variant="outlined"
            label="Defect Title"
            helperText="Enter defect Title"
            name="defect_title"
            onChange={changeHandler}
          ></TextFields>
          <Buttons
            color="red"
            title="jh"
            size="medium"
            starticon={<AddCircleIcon />}
            onClick={addDefectHandler}
          />
        </>
      )}
      <AllDefects defectData={defects}></AllDefects>
    </>
  );
};
export default AddDefects;
