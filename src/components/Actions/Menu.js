import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function BasicMenu(props) {
  const { open, onClose } = props;
  if (!open) return null;

  return (
    <div>
      <Menu
        id="basic-menu"
        open={open}
        onClose={onClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={onClose}>Edit</MenuItem>
        <MenuItem onClick={onClose}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
