import { Stack, Typography } from '@mui/material'
import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
function Counter() {
  const [counter, setCounter] =useState(5)
  const navigate =useNavigate()
  useEffect(()=>{
    counter > 0 && setTimeout(()=>setCounter(counter-1),1000)
    if(counter ===0){
       navigate('/detail')
    }
  },[counter,navigate])
  return (
    <Stack
     sx={{

     }}
    >
     <Typography  variant="h4" textAlign='center'>
      {counter}
     </Typography>
    </Stack>
  )
}

export default Counter
