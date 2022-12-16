import { Box, Typography } from "@mui/material";
import React from "react";
import DatePicker from "./DatePicker";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import CoffeeOutlinedIcon from "@mui/icons-material/CoffeeOutlined";
import StopOutlinedIcon from "@mui/icons-material/StopOutlined";

const Attendence = () => {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "10px",
        border: 1,
        borderColor: "textColor.border",
        backgroundColor:"secondary.main",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          borderBottom: 1,
          borderColor: "textColor.border",
          color: "textColor.child",
          justifyContent: "space-between",
          padding: 2,
        }}
      >
        <Typography sx={{ textTransform: "uppercase" }}>Attendence</Typography>
        <DatePicker />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: 6,
          borderBottom: 1,
          borderColor: "textColor.border",
        }}
      >
        <Box
          sx={{
            width: "60px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#38A890",
            color: "textColor.child",
            borderRadius: "100%",
          }}
        >
          <PlayArrowOutlinedIcon sx={{ fontSize: "42px" }} />
        </Box>
        <Box
          sx={{
            width: "60px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "#38A890",
            color: "textColor.child",
            borderRadius: "100%",
          }}
        >
          <CoffeeOutlinedIcon sx={{ fontSize: "42px" }} />
        </Box>
        <Box
          sx={{
            width: "60px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "#38A890",
            color: "textColor.child",
            borderRadius: "100%",
          }}
        >
          <StopOutlinedIcon sx={{ fontSize: "42px" }} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: 2,
          paddingX:4,
          color:"textColor.child"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign:"center"
          }}
        >
          <Typography sx={{ fontSize: "18px" }}>00:00:00</Typography>
          <Typography sx={{ fontSize: "10px" }}>Total Work</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign:"center"
          }}
        >
          <Typography sx={{ fontSize: "18px" }}>0m</Typography>
          <Typography sx={{ fontSize: "10px" }}>Breaks</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Attendence;
