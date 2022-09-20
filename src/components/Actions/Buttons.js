import React from "react";
import Button from "@mui/material/Button";

const Buttons = (props) => {
  const { color, title, size, starticon, onClick, margin, styles, endicon } =
    props;
  return (
    <Button
      variant="contained"
      sx={{ color: { color }, margin: { margin }, ...styles }}
      size={size}
      startIcon={starticon}
      endIcon={endicon}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default Buttons;
