import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, Toolbar, Tabs, Tab } from "@mui/material";
import BugReportIcon from "@mui/icons-material/BugReport";
const Pages = [{ label: "Home", url: "/" }];

const NavBar = () => {
  const [click, setClick] = useState(0);

  const clickHandler = (e, value) => {
    setClick(value);
  };
  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#ffffff", marginBottom: "3rem" }}
      >
        <Toolbar>
          <BugReportIcon
            sx={{ fontSize: "2rem", color: "#000000" }}
            onClick={(e) => (window.location.href = "/")}
          />

          <>
            <Typography
              variant="h3"
              sx={{ fontSize: "1.3rem", paddingRight: "1%", color: "#000000" }}
            >
              Bug Tracker
            </Typography>

            <Tabs
              textColor="inherit"
              value={click}
              sx={{ indicator: "#000000", color: "#000000" }}
              onChange={clickHandler}
            >
              {Pages.map((pages, index) => {
                return (
                  <Tab
                    label={pages.label}
                    component={Link}
                    to={pages.url}
                    key={index}
                  ></Tab>
                );
              })}
            </Tabs>
          </>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default NavBar;
