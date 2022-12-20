import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ButtonIcon from "./ButtonIcon";
import { useDispatch } from "react-redux";
import { removeUserAct } from "../features/usersSlice";

const UserComp = ({ user }) => {
  const dispatch = useDispatch();
  const deleteUserAct = (item) => {
    dispatch(removeUserAct(item));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "70vh",
        backgroundColor: "#22272D",
        gap: 1,
      }}
    >
      <Box
        sx={{
          width: "100%",
          py: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {user?.map((item) => (
          <Box
            key={item?.date}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              mx: "auto",
              borderTop: item?.status === "break" || item?.status === "out"   ? 1 : 0,
              borderColor: "textColor.border",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "textColor.main",
                fontSize: "16px",
              }}
            >
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "100%",
                  backgroundColor:
                    item?.status === "break"
                      ? "buttonColors.orange"
                      : item.status === "out" ? "buttonColors.red" : "buttonColors.blue",
                }}
              ></Box>
              <Typography
                sx={{
                  textTransform: "capitalize",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {item?.msg}
              </Typography>
              <Typography
                sx={{
                  textTransform: "capitalize",
                  fontSize: "12px",
                }}
              >
                {item?.date}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              {item?.status !== "in" ? (
                <ButtonIcon
                  hoverColor="buttonColors.red"
                  size={"large"}
                  color="buttonColors.white"
                  IconName={DeleteForeverOutlinedIcon}
                  action={() => deleteUserAct(item)}
                />
              ) : null}
             
                <ButtonIcon
                  hoverColor="buttonColors.blue"
                  size={"large"}
                  color="buttonColors.white"
                  IconName={EditOutlinedIcon}
                />
           
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default UserComp;
