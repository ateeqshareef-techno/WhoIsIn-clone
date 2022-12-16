import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Attendence from "./Attendence";
import MyActivity from "./MyActivity";
import Members from "./Members";

const DashboardContent = () => {
  return (
    <Box height={"100%"} sx={{ flexGrow: 1 , marginTop:6 }}>
      <Grid container spacing={2}>
        <Grid item xl={4} lg={12} xs={12}>
          <Attendence />
        </Grid>
        <Grid item xl={4} lg={6} xs={12}>
          <MyActivity />
        </Grid>
        <Grid item xl={4} lg={6} xs={12}>
          <Members />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardContent;
