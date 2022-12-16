import { Box } from "@mui/system";
import React from "react";
import ShortTextOutlinedIcon from "@mui/icons-material/ShortTextOutlined";
import TimerIcon from "@mui/icons-material/Timer";
import Person4Icon from "@mui/icons-material/Person4";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {  NavLink } from "react-router-dom";

const useStyles = makeStyles({
  labelRoot: {
    "&:hover": {
      borderRadius: "100%",
      backgroundColor: "rgba(40,45,51,0.7)",
    },
    "&:hover .hidden-button": {
      display: "flex",
    },
  },

});

const SideBar = () => {

  const classes = useStyles();
  return (
    <Box
      sx={{
        color: "gray.main",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      paddingY={4}
      height="90vh"
    >
      <Box display={"flex"} justifyContent="center" alignItems={"center"}>
        <ShortTextOutlinedIcon fontSize="large" />
      </Box>
      <Box
        display={"flex"}
        gap={4}
        flexDirection="column"
        justifyContent={"center"}
        alignItems="center"
      >
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "notActive")}
          to="/dashboard"
        >
          <Box
            className={classes.labelRoot}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
            width={45}
            height={45}
          >
            <TimerIcon sx={{ cursor: "pointer", fontSize: "28px" }} />
            <Box
              className="hidden-button"
              sx={{
                backgroundColor: "gray.main",
                position: "absolute",
                bottom: "-40px",
                borderRadius: "10px",
                display: "none",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "12px",
                  paddingX: "8px",
                  paddingY: "4px",
                }}
              >
                Dashborad
              </Typography>
            </Box>
          </Box>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "notActive")}
          to="/users"
        >
          <Box
            className={classes.labelRoot}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
            width={45}
            height={45}
          >
            <Person4Icon sx={{ cursor: "pointer", fontSize: "28px" }} />
            <Box
              className="hidden-button"
              sx={{
                backgroundColor: "gray.main",
                position: "absolute",
                bottom: "-40px",
                borderRadius: "10px",
                display: "none",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "12px",
                  paddingX: "8px",
                  paddingY: "4px",
                }}
              >
                Members
              </Typography>
            </Box>
          </Box>
        </NavLink>
      </Box>
      <Box display={"flex"} justifyContent="center" alignItems={"center"}>
        <Box
          sx={{
            backgroundColor: "gray.main",
            color: "black",
            cursor: "pointer",
          }}
          borderRadius="100%"
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          width={40}
          height={40}
        >
          <Typography>M</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
