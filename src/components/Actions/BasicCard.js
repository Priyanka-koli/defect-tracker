import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Grid,
  Item,
} from "@mui/material/";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BasicMenu from "./Menu";
import Buttons from "./Buttons";

import {
  StyledCard,
  StyledBox,
  StyledCardContent,
} from "../../styles/BasicCard";
function stringAvatar(name) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function BasicCard(props) {
  const [openMenu, setOpenMenu] = useState(null);
  const open = Boolean(openMenu);
  const menuIconClickHandler = (event) => {
    setOpenMenu(event.currentTarget);
  };
  const {
    defect_number,
    avtar_string,
    defect_title,
    defect_status,
    defect_priority,
    defect_created,
    setDefects,
  } = props;

  return (
    <StyledCard id={`card-${defect_number}`}>
      <StyledCardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          <Typography
            sx={{ fontSize: "13px", wordWrap: "break-word", flex: "5" }}
            gutterBottom
          >
            {`${defect_number}: ${defect_title}`}
          </Typography>
          <BasicMenu
            open={open}
            onClose={() => setOpenMenu(false)}
            openMenu={openMenu}
            defect_id={defect_number}
            setDefects={setDefects}
            /*  data={expenseDetails} */
          ></BasicMenu>
          <Buttons
            styles={{
              flex: "1",
              minWidth: "0px",
              padding: "0px",
              color: "#000000",
              alignItems: "flex-end",
              backgroundColor: "transparent",
              height: "20px",
              boxShadow: "none",
              "&:hover": {
                boxShadow: "none",
                backgroundColor: "transparent",
              },
            }}
            onClick={menuIconClickHandler}
            endicon={<MoreVertIcon fontSize="small" />}
          ></Buttons>
        </Box>
        <StyledBox>
          <Avatar
            {...stringAvatar(String(avtar_string))}
            sx={{ bgcolor: "pink", fontSize: "14px", width: 30, height: 30 }}
          ></Avatar>

          <Typography sx={{ fontSize: "12px" }}>{avtar_string}</Typography>
        </StyledBox>

        <Box sx={{ paddingTop: "10px" }}>
          <Grid container spacing={0}>
            <Grid xs={4}>
              <Typography sx={{ fontSize: "11px" }}>Status</Typography>
              <Typography sx={{ fontSize: "11px" }}>Priority</Typography>
              <Typography sx={{ fontSize: "11px" }}>Created</Typography>
            </Grid>
            <Grid xs={4}>
              <Typography sx={{ fontSize: "11px" }}>{defect_status}</Typography>
              <Typography sx={{ fontSize: "11px" }}>
                {defect_priority}
              </Typography>
              <Typography sx={{ fontSize: "11px" }}>
                {defect_created}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </StyledCardContent>
    </StyledCard>
  );
}
