import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { deleteDefectById, getDefectsFromApi } from "../../service/api";

export default function BasicMenu({
  open,
  onClose,
  openMenu,
  defect_id,
  setDefects,
  allDefects,
}) {
  const Navigate = useNavigate();
  if (!open) return null;

  const editClickHandler = () => {
    onClose();
    Navigate(`/edit-defects/${defect_id}`);
  };

  const deleteClickHandler = async () => {
    onClose();
    await deleteDefectById(defect_id);
    setDefects(allDefects.filter((defect) => defect.id != defect_id));
  };

  return (
    <div>
      <Menu
        id="basic-menu"
        open={open}
        onClose={onClose}
        anchorEl={openMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={editClickHandler}>Edit</MenuItem>
        <MenuItem onClick={deleteClickHandler}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
