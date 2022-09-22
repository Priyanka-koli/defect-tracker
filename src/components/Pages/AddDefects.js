import React, { useState, useEffect } from "react";
import Buttons from "../Actions/Buttons";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextFields from "../Actions/TextFields";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  addDefectsToApi,
  editDefectById,
  getDefectsFromApi,
} from "../../service/api";
import BasicCards from "../Actions/BasicCard";
import dragula from "dragula";
import {
  StyledContainerBox,
  StyledBoxHeading,
  StyledChildBox,
  StyledVerticalBox,
} from "../../styles/AddDefects";

const INITIAL_VALUES = {
  id: "",
  defect_title: "",
  defect_status: "",
  defect_priority: "",
  defect_created: "",
};
const AddDefects = ({ defects, setDefects }) => {
  const [showInput, setShowInput] = useState(false);
  const [newDefect, setNewDefect] = useState(INITIAL_VALUES);

  const getElementStatus = (elementId) => {
    switch (elementId) {
      case "backlogs-box":
        return "New";
      case "on-hold-box":
        return "On Hold";
      case "in-development":
        return "In progress";
      case "qa-testing-box":
        return "In QA";
      case "closed-box":
        return "Closed";
    }
  };

  const dragAndDropHandler = () => {
    dragula(
      [
        document.querySelector("#backlogs-box"),
        document.querySelector("#on-hold-box"),
        document.querySelector("#in-development"),
        document.querySelector("#qa-testing-box"),
        document.querySelector("#closed-box"),
      ],
      {
        removeOnSpill: true,
      }
    )
      .on("drag", function (el, event) {})
      .on("drop", async function (el, event) {
        const elementId = el.id.split("-")[1];
        const status = getElementStatus(String(event.id));
        const dataToBeUpdated = defects.filter((defect, id) => {
          return defect.id == Number(elementId);
        });
        const newData = { ...dataToBeUpdated[0], ["defect_status"]: status };
        await editDefectById(newData, elementId);
        let { data } = await getDefectsFromApi();
        setDefects(data);
      });
  };

  useEffect(() => {
    dragAndDropHandler();
  }, [defects]);

  const clickHandler = () => {
    setShowInput(!showInput);
  };

  const changeHandler = (event) => {
    setNewDefect({ ...newDefect, [event.target.name]: event.target.value });
  };
  const addDefectHandler = async () => {
    newDefect.id = defects[defects.length - 1].id + 1;
    newDefect.defect_status = "New";
    newDefect.defect_priority = "0";
    newDefect.defect_created = new Date().toLocaleDateString();
    await addDefectsToApi(newDefect);
    defects.push(newDefect);
    setDefects(defects);
    setNewDefect(INITIAL_VALUES);
    setShowInput(false);
  };
  return (
    <>
      <StyledContainerBox>
        <StyledChildBox id="backlogs-box">
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
              key={`${defect.defect_title} - ${defect.id}`}
              avtar_string="Priyanka Koli"
              defect={defect}
              setDefects={setDefects}
              allDefects={defects}
            />
          ))}
        </StyledChildBox>
        <StyledChildBox id="on-hold-box">
          <StyledBoxHeading variant="h6">On Hold</StyledBoxHeading>
          <StyledVerticalBox>bcs</StyledVerticalBox>
        </StyledChildBox>
        <StyledChildBox id="in-development">
          <StyledBoxHeading variant="h6">In Development</StyledBoxHeading>
          <StyledVerticalBox>bcs</StyledVerticalBox>
        </StyledChildBox>
        <StyledChildBox id="qa-testing-box">
          <StyledBoxHeading variant="h6">QA Testing</StyledBoxHeading>
          <StyledVerticalBox>bcs</StyledVerticalBox>
        </StyledChildBox>
        <StyledChildBox id="closed-box">
          <StyledBoxHeading variant="h6">Closed</StyledBoxHeading>
          <StyledVerticalBox>bcs</StyledVerticalBox>
        </StyledChildBox>
      </StyledContainerBox>
    </>
  );
};
export default AddDefects;
