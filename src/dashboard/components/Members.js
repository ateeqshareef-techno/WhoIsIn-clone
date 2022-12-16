import { Box, Typography } from "@mui/material";
import React from "react";
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import UserTabs from "./UserTabs"


const Members = () => {



  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "10px",
        border: 1,
        borderColor: "textColor.border",
        backgroundColor: "secondary.main",
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
          alignItems:"center",
          padding: 2,
        }}
      >
        <Typography sx={{ textTransform: "uppercase", fontSize: "12px" }}>
          MEMBERS
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap:1
          }}
        >
          <Box sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#38B9CF",
            color:"white",
            borderRadius:"100%",
          }}>
             <RefreshOutlinedIcon/>
          </Box>
          <Typography sx={{
            fontSize:"10px",
            color:"#44504D",
            fontStyle:"italic"
          }}>Last Updated: 04:45 PM</Typography>
        </Box>

      </Box>
      <UserTabs />
    </Box>
  );
};

export default Members;
