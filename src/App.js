import { ThemeProvider, createTheme } from "@mui/material/styles";
import Layout from "./layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/pages/Dashboard";
import Users from "./dashboard/pages/Users";

let theme = createTheme({
  palette: {
    primary: {
      main: "#0E1117",
    },
    secondary: {
      main: "#161B22",
    },
    gray: {
      main: "#757575",
    },
    textColor:{
      main:"#ffffff",
      child:"#BAB6A4",
      border:"rgba(186,182,164,0.3)"
    },
    tabColor:{
      main:"#ffffff",
    }
    
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
