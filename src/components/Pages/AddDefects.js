import React, { useState, useEffect } from "react";
import Buttons from "../Actions/Buttons";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextFields from "../Actions/TextFields";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { addDefectsToApi, getDefectsFromApi } from "../../service/api";
import BasicCards from "../Actions/BasicCard";
import { Box, Typography } from "@mui/material";
import {
  StyledContainerBox,
  StyledBoxHeading,
  StyledChildBox,
  StyledVerticalBox,
} from "../../styles/AddDefects";

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
  const [newDefect, setNewDefect] = useState(INITIAL_VALUES);

  const getAllDefects = async () => {
    let { data } = await getDefectsFromApi();
    setDefects(data);
  };

  useEffect(() => {
    getAllDefects();
  }, []);

  const clickHandler = () => {
    setShowInput(!showInput);
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
      <StyledContainerBox>
        <StyledChildBox>
          <StyledBoxHeading variant="h6">Backlogs</StyledBoxHeading>
          <StyledVerticalBox>
            <Buttons
              color="white"
              title="New Item"
              size="medium"
              margin="0 0 10px 0"
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
                  color="white"
                  title="add"
                  size="small"
                  starticon={<AddCircleIcon />}
                  onClick={addDefectHandler}
                />
              </>
            )}
          </StyledVerticalBox>

          {defects.map((defect) => (
            <BasicCards
              key={defect.defect_title}
              defect_number={defect.id}
              avtar_string="Priyanka Koli"
              defect_title={defect.defect_title}
              defect_status={defect.defect_status}
              defect_priority={defect.defect_priority}
              defcet_created={defect.defect_created}
            />
          ))}
        </StyledChildBox>
        <StyledChildBox>
          <StyledBoxHeading variant="h6">On Hold</StyledBoxHeading>
          <StyledVerticalBox>bcs</StyledVerticalBox>
        </StyledChildBox>
        <StyledChildBox>
          <StyledBoxHeading variant="h6">In Development</StyledBoxHeading>
          <StyledVerticalBox>bcs</StyledVerticalBox>
        </StyledChildBox>
        <StyledChildBox>
          <StyledBoxHeading variant="h6">QA Testing</StyledBoxHeading>
          <StyledVerticalBox>bcs</StyledVerticalBox>
        </StyledChildBox>
        <StyledChildBox>
          <StyledBoxHeading variant="h6">Closed</StyledBoxHeading>
          <StyledVerticalBox>bcs</StyledVerticalBox>
        </StyledChildBox>
      </StyledContainerBox>
    </>
  );
};
export default AddDefects;
