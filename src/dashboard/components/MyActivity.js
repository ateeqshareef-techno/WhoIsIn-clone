import { Box, Typography } from '@mui/material'
import React from 'react'
import TimerIcon from "@mui/icons-material/Timer";


const MyActivity = () => {
  return (
    <Box  sx={{
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
          padding: 2,
        }}
      >
        <Typography sx={{ textTransform: "uppercase" , fontSize:"12px" }}>MY ACTIVITY</Typography>
      </Box>
      <Box sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"70vh",
        backgroundColor:"#22272D"
      }}>
          <Box sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            color:"gray.main",
            gap:1,
          }}>
            <TimerIcon sx={{ cursor: "pointer", fontSize: "32px" }} />
             <Typography sx={{fontSize:"12px"}}>No Activity</Typography>
          </Box>
      </Box>
    </Box>
  )
}

export default MyActivity