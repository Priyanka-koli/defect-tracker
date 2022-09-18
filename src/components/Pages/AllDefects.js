import React from "react";
import BasicCards from "../Actions/BasicCard";

//import { getDefectsFromApi } from "../../service/api";
const AllDefects = ({ defectData }) => {
  return (
    <>
      {defectData.map((defect) => (
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
    </>
  );
};

export default AllDefects;
