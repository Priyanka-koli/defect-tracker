import React from "react";
import Button from "@mui/material/Button";

const Buttons = (props) => {
  const { color, title, size, starticon, onClick } = props;
  return (
    <Button
      variant="contained"
      sx={{ color: { color } }}
      size={size}
      startIcon={starticon}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default Buttons;
