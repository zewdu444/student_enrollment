import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useLocation } from 'react-router-dom'

function NavBar() {
  const location = useLocation();
  return (
    <Box sx={{
      marginBottom: '1rem',
    }}>
    <AppBar position="static">
      <Toolbar>
      {location.pathname === '/register' ?
      <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }} >
      <HomeIcon />
    </IconButton> :
    <IconButton
    component={Link}
    to="/register"
    size="large"
    edge="start"
    color="inherit"
    aria-label="menu"
    sx={{ mr: 2 }} >
    <ArrowBackIcon />
  </IconButton> }
        <Typography variant="h6" component="div" sx={{
          flexGrow: 1,
          textAlign: 'center',
        }}>
          {location.pathname === '/register' ? 'Register' : 'Student Details'}
        </Typography>
        <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ ml: 2 }}
      >
        <MenuIcon />
      </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default NavBar
