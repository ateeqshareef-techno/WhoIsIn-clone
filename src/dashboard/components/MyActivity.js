import { Box, Typography } from "@mui/material";
import React from "react";
import TimerIcon from "@mui/icons-material/Timer";
import { useSelector } from "react-redux";
import EmptyComp from "../../common/EmptyComp";
import UserComp from "../../common/UserComp";

const MyActivity = () => {
  const { user } = useSelector((state) => state.user);


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
          padding: 2,
        }}
      >
        <Typography sx={{ textTransform: "uppercase", fontSize: "12px" }}>
          MY ACTIVITY
        </Typography>
      </Box>
      {user.length === 0 ? (
        <EmptyComp Icon={TimerIcon} title="No Activity" />
       
      ) : (
        <UserComp user={user} />
      )}
    </Box>
  );
};

export default MyActivity;
