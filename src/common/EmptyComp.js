import { Box, Typography } from "@mui/material";
import React from "react";

const EmptyComp = ({ Icon, title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        backgroundColor: "#22272D",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "gray.main",
          gap: 1,
        }}
      >
        <Icon sx={{ cursor: "pointer", fontSize: "32px" }} />
        <Typography sx={{ fontSize: "12px" }}>{title}</Typography>
      </Box>
    </Box>
  );
};

export default EmptyComp;
