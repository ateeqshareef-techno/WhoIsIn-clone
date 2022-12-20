import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DatePicker from "./DatePicker";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import CoffeeOutlinedIcon from "@mui/icons-material/CoffeeOutlined";
import StopOutlinedIcon from "@mui/icons-material/StopOutlined";
import { makeStyles } from "@mui/styles";
import { secondsToHms } from "../../utilsFunctions/timerFunctions";
import { useDispatch, useSelector } from "react-redux";
import { addUserAct, changeStatus } from "../../features/usersSlice";
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles({
  labelRoot: {
    "&:hover .hidden-button": {
      display: "flex",
    },
  },
});

const active ={ 
  start:false,
  break:false,
  out:false,
}


const Attendence = () => {
  const [isActive, setIsActive] = useState(active);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState();
  const dispatch = useDispatch()
  const {user} = useSelector((s)=>s.user)


 const userIn =()=>{
    setIsActive({...isActive, start:true})
    const userIn = user.find(item => item.status === "in")
    if(!userIn){
      dispatch(changeStatus({
        id: "33625d29-dd93-4db5-8254-9186c7656197",
        name: "M.Ateeq",
        status: "in",
        msg: "in",
        date: "4:34:07 PM",
      }))
      dispatch(addUserAct({
        id:uuidv4(),
        name:"M.Ateeq",
        status:"in",
        msg:"In",
        date: new Date().toLocaleTimeString()
      }))
    }
  }

  const userBreak = () => {
    setIsActive({...isActive, break:!isActive.break,start:!isActive.start})
    if(!isActive.break){
      dispatch(changeStatus({
        id: "33625d29-dd93-4db5-8254-9186c7656197",
        name: "M.Ateeq",
        status: "break",
        msg: "in",
        date: "4:34:07 PM",
      }))
      dispatch(addUserAct({
       id:uuidv4(),
        name:"M.Ateeq",
        status:"break",
        msg:"Will be right back",
        date: new Date().toLocaleTimeString() 
      }))
    }else{
      dispatch(changeStatus({
        id: "33625d29-dd93-4db5-8254-9186c7656197",
        name: "M.Ateeq",
        status: "in",
        msg: "in",
        date: "4:34:07 PM",
      }))
      dispatch(addUserAct({
        id:uuidv4(),
        name:"M.Ateeq",
        status:"StopBreak",
        msg:"Back after 0m ",
        date: new Date().toLocaleTimeString()
      }))
    }
  
  }

  const userOut = () => {
    setIsActive({...isActive,start:false,break:false,out:true})
    dispatch(changeStatus({
      id: "33625d29-dd93-4db5-8254-9186c7656197",
      name: "M.Ateeq",
      status: "out",
      msg: "in",
      date: "4:34:07 PM",
    }))
    dispatch(addUserAct({
       id:uuidv4(),
       name:"M.Ateeq",
       status:"out",
       msg:"Out From Office",
       date: new Date().toLocaleTimeString() 
     }))
  }

  useEffect(() => {
    let timer = null;
    if (isActive.start) {
      timer = setTimeout(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    setTime(secondsToHms(seconds));
    return () => {
      clearInterval(timer);
    };
  });

  const classes = useStyles();
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
          padding: 2,
        }}
      >
        <Typography sx={{ textTransform: "uppercase" }}>Attendence</Typography>
        <DatePicker />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: 6,
          borderBottom: 1,
          borderColor: "textColor.border",
        }}
      >
        <Box
          className={isActive.start || isActive.break ? "" : classes.labelRoot}
          sx={{
            position: "relative",
            width: "60px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isActive.start || isActive.break  ? "" : "buttonColors.blue",
            color: "textColor.child",
            borderRadius: "100%",
          }}
        >
          <Button
            disabled={isActive.start || isActive.break  ? true : false}
            sx={{
              color: "white",
            }}
            onClick={userIn}
          >
            <PlayArrowOutlinedIcon sx={{ fontSize: "42px" }} />
          </Button>
          <Typography
            className="hidden-button"
            sx={{
              position: "absolute",
              color: "white",
              backgroundColor: "gray.main",
              fontSize: "10px",
              bottom: "-30px",
              paddingX: "4px",
              paddingY: "2px",
              textAlign: "center",
              borderRadius: "5px",
              display: "none",
            }}
          >
            Start Time
          </Typography>
        </Box>
        <Box
          className={isActive.start  || isActive.break ? classes.labelRoot : ""}
          sx={{
            position: "relative",
            width: "60px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isActive.start ? "buttonColors.orange" : isActive.break ? "buttonColors.blue"  : "",
        
            borderRadius: "100%",
          }}
        >
        
          <Button
           disabled={ isActive.start ? false: isActive.break ? false : true}
            sx={{
              color: isActive.start ? "textColor.child" : isActive.break ? "buttonColors.white"  : "",
            }}
             
             onClick={userBreak}

          >
            <CoffeeOutlinedIcon sx={{ fontSize: "42px" }} />
          </Button>
          <Typography
            className="hidden-button"
            sx={{
              position: "absolute",
              color: "white",
              backgroundColor: "gray.main",
              fontSize: "10px",
              bottom: "-30px",
              paddingX: "4px",
              paddingY: "2px",
              textAlign: "center",
              borderRadius: "5px",
              display: "none",
            }}
          >
          { isActive.break ? "stop break" : "break"}
          </Typography>
        </Box>
        <Box
          className={isActive.start ? classes.labelRoot : ""}
          sx={{
            position: "relative",
            width: "60px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isActive.start ? "buttonColors.red" : "",

            borderRadius: "100%",
          }}
        >
          <Button
          disabled={ isActive.start ? false: isActive.out ? true : false}
            sx={{
              color: isActive.start ? "textColor.child" : isActive.out ? "buttonColors.white"  : "",
            }}
         onClick={userOut} >
            <StopOutlinedIcon sx={{ fontSize: "42px" }} />
          </Button>
          <Typography
            className="hidden-button"
            sx={{
              position: "absolute",
              color: "white",
              backgroundColor: "gray.main",
              fontSize: "10px",
              bottom: "-30px",
              paddingX: "4px",
              paddingY: "2px",
              textAlign: "center",
              borderRadius: "5px",
              display: "none",
            }}
          >
            Out
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: 2,
          paddingX: 4,
          color: "textColor.child",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: "18px" }}>{time}</Typography>
          <Typography sx={{ fontSize: "10px" }}>Total Work</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: "18px" }}>0m</Typography>
          <Typography sx={{ fontSize: "10px" }}>Breaks</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Attendence;
