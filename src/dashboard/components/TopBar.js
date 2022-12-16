import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const TopBar = () => {

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color:"white",
        padding:4,
      }}
    >
    <Box></Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <CalendarMonthIcon />
        <Typography>Fri,Dec 16,2022</Typography>
      </Box>
    </Box>
  );
};

export default TopBar;
