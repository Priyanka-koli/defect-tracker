import React from "react";
import { TextField } from "@mui/material";

const TextFields = (props) => {
  const { variant, label, helperText, onChange, name } = props;
  return (
    <TextField
      variant={variant}
      label={label}
      helperText={helperText}
      onChange={onChange}
      name={name}
    ></TextField>
  );
};
export default TextFields;
