import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import SideBar from "../dashboard/components/SideBar";
import TopBar from "../dashboard/components/TopBar";


const useStyles = makeStyles({
  list: {
      overflowY: "auto",
      margin: 0,
      padding: 0,
      listStyle: "none",
      height: "100%",
      '&::-webkit-scrollbar': {
        width: '0.6em'
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#757575',
        borderRadius:"10px",
        outline: 'px solid slategrey'
      }
    }
});

const Layout = ({ children }) => {

  const classes = useStyles();

  return (
    <Box height={"100%"} display={"flex"} width={"100%"}>
      <Box
        sx={{ backgroundColor: "secondary.main", my: "auto" }}
        height="100vh"
        width={"5%"}
      >
        <SideBar />
      </Box>
      <Box  height={"100vh"} sx={{ backgroundColor: "primary.main", display:"flex",flexDirection:"column" }} width={"95%"}>
         <TopBar/>
        <Box className={classes.list}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
