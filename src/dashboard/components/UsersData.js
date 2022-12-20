import React from "react";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
    list: {
        overflowY: "auto",
        margin: 0,
        padding: 0,
        listStyle: "none",
        height: "100%",
        '&::-webkit-scrollbar': {
          width: '0.4em'
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
          webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#757575',
          borderRadius:"10px",
          outline: '1px solid slategrey'
        }
      }
  });


const UsersData = ({
  condition
}) => {
  const [users, setUsers] = useState([]);
  const {allUsers} = useSelector((s)=>s.user)
  const classes = useStyles();
  const fetchUsers = () => {
    setUsers(allUsers.filter((item)=> item.status === condition))
  };
  useEffect(() => {
    fetchUsers()
  }, []);
  return (
    <Box
     className={classes.list}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "60vh",
        gap: 2,
       
      }}
    >
      {users.map((user, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
              backgroundColor: "#38BBD1",
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>{user.name.split("")[0]}</Typography>
          </Box>
          <Typography>{user.name}</Typography>
        </Box>
      ))}
      
    </Box>
  );
};

export default UsersData;
