import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { deleteDefectById, getDefectsFromApi } from "../../service/api";

export default function BasicMenu(props) {
  const Navigate = useNavigate();
  const { open, onClose, openMenu, defect_id, setDefects } = props;
  console.log(defect_id);
  if (!open) return null;

  const editClickHandler = () => {
    onClose();
    Navigate(`/edit-defects/${defect_id}`);
  };

  const deleteClickHandler = async () => {
    onClose();
    await deleteDefectById(defect_id);
    let { data } = await getDefectsFromApi();
    setDefects(data);
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
        <MenuItem onClick={onClose}>Move</MenuItem>
      </Menu>
    </div>
  );
}
