import { Button, Stack } from '@mui/material'

import React from 'react'

function Prompt(props) {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        margin: '0 auto',
        bgcolor: '#F4F5FA',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'right',

      }}
    >
      <Button
        sx={{
          display: 'flex',
          width: '50%',
          variant:'outlined',
          color: 'primary',
          border: '2px solid #1976d2',
        }}
         onClick={props.actionProvider.nameHandler}
        >
        Got it!
      </Button>
    </Stack>
  )
}

export default Prompt
