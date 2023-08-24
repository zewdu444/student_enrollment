import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
function Splash() {
  return (
    <Stack sx={{
      display: 'flex',
      flexDirection: 'column',
       alignItems: 'center',
        paddingTop: '15rem',
    }}>
      <Typography variant="h1" sx={{ fontSize: '2rem', textAlign: 'center'}}>Welcome to Student Enrollment</Typography>
      <Button variant="contained" component={Link} to="/register" sx={{ margin: '0 auto', marginTop: '2rem', width: '10rem', height: '3rem', fontSize: '1.2rem' }}>Register</Button>
    </Stack>
  )
}

export default Splash
