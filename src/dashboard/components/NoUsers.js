import { Box, Typography } from '@mui/material'
import React from 'react'
import Person4Icon from "@mui/icons-material/Person4";


const NoUsers = () => {
  return (
    <Box sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"60vh",
        backgroundColor:"#secondary.main"
      }}>
          <Box sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            color:"gray.main",
            gap:1,
          }}>
            <Person4Icon sx={{ cursor: "pointer", fontSize: "32px" }} />
             <Typography sx={{fontSize:"12px"}}>No Users</Typography>
          </Box>
      </Box>
  )
}

export default NoUsers