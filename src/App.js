import { Route,Routes, useLocation  } from "react-router-dom";
import  NavBar  from "./components/NavBar";
import  Register  from "./components/Register";
import  Splash  from "./components/Splash";
import  Detail  from "./components/Detail";
import {Stack } from "@mui/material";


function App() {
  const location = useLocation();

  return (

      <Stack sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        bgcolor: '#F4F5FA',
        width: '414px',
        height: '100vh',
      }}>
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      </Stack>
  );
}

export default App;
