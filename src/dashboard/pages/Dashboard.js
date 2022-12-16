import { Box } from "@mui/material";
import React from "react";
import DashboardContent from "../components/DashboardContent";
import PageTitle from "../components/PageTitle";

const Dashboard = () => {
  return (
    <Box
      sx={{
        width: "80%",
        height: "80vh",
        margin: "auto",
      }}
    >
      <PageTitle />
      <DashboardContent />
    </Box>
  );
};

export default Dashboard;
