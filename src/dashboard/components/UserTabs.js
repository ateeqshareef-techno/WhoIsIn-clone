import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import NoUsers from "./NoUsers";
import UsersData from "./UsersData";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "#448AFF",
      height: 3,
    },
    "& .MuiTab-root.Mui-selected": {
      color: "#448AFF",
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container sx={{padding:4}}>
          <Box>{children}</Box>
        </Container>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const {allUsers} = useSelector((s)=>s.user)
 

  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let styles = {
    default_tab: {
      fontSize: "12px",
      width: "50px",
    },
  };
  styles.tab = [];
  styles.tab[0] = styles.default_tab;
  styles.tab[1] = styles.default_tab;
  styles.tab[2] = styles.default_tab;
  styles.tab[3] = styles.default_tab;

  return (
    <Box sx={{ width: "100%", marginTop: 3, color: "white" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Tabs
          sx={{
            "& button": { borderRadius: 2, color: "white" },
            "& button:focus": { color: "#448AFF" },
            "& button:active": { color: "#448AFF" },
          }}
          className={classes.tabs}
          TabIndicatorProps={{
            style: {
              color: "#ffffff",
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            style={styles.tab[0]}
            label={
              <React.Fragment>
            {(allUsers.filter((item)=> item.status === "in")).length}
                <br />
                <span style={{ marginTop: 4, textTransform: "uppercase" }}>
                  In
                </span>
              </React.Fragment>
            }
            {...a11yProps(0)}
          />
          <Tab
            style={styles.tab[1]}
            label={
              <React.Fragment>
              {(allUsers.filter((item)=> item.status === "break")).length}
                <br />
                <span style={{ marginTop: 4, textTransform: "uppercase" }}>
                  break
                </span>
              </React.Fragment>
            }
            {...a11yProps(1)}
          />
          <Tab
            style={styles.tab[2]}
            label={
              <React.Fragment>
               {(allUsers.filter((item)=> item.status === "out")).length}
                <br />
                <span style={{ marginTop: 4, textTransform: "uppercase" }}>
                  out
                </span>
              </React.Fragment>
            }
            {...a11yProps(2)}
          />
          <Tab
            style={styles.tab[3]}
            label={
              <React.Fragment>
               {(allUsers.filter((item)=> item.status === "notin")).length}
                <br />
                <span style={{ marginTop: 4, textTransform: "uppercase" }}>
                  not in
                </span>
              </React.Fragment>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <UsersData condition ="in"  />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <UsersData condition ="break" />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <UsersData condition ="out" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <UsersData condition ="notin" />
      </TabPanel>
    </Box>
  );
}
