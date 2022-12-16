import { Box, Typography } from "@mui/material";
import React from "react";
import TimerIcon from "@mui/icons-material/Timer";
const PageTitle = () => {
  return (
    <Box sx={{
        display:"flex",
        gap:2,
       
    }}>


        <TimerIcon sx={{ color: "white", fontSize: "32px",marginTop:1 }} />
  

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Typography sx={{ fontSize: "32px" }}>Dashboard</Typography>
        <Typography sx={{ fontSize: "13px" }}>
          Welcome, Muhammad Ateeq
        </Typography>
      </Box>
    </Box>
  );
};

export default PageTitle;
