import { Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function Detail() {
  const student =useSelector((state)=>state.student.student)
  return (
    <Stack
     sx={{
       padding: 4
     }}
    >
      <Typography paddingBottom={1} variant='h6' textAlign='center'>Student infromation</Typography>
       <Divider/>
        <Stack sx={{
          padding:2
        }}>
       <Typography paddingBottom={2}>Name: {student.name}</Typography>
       <Divider />
       <Typography paddingTop={2}>Age: {student.age}</Typography>
       </Stack>

    </Stack>
  )
}

export default Detail
