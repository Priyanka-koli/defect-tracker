import React from "react";

const INITAIL_VALUES = {
  defect_title: "",
  defect_assigned: "",
  defect_status: "",
  defect_priority: "",
  defect_created: "",
};
const DefectsContext = React.createContext({
  defects: INITAIL_VALUES,
  setDefects: () => {},
});

export default DefectsContext;
