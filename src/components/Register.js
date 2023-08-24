import { Stack } from '@mui/material'
import React from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../bot/config'
import MessageParser from '../bot/MessageParser'
import ActionProvider from '../bot/ActionProvider'
function Register() {
  return (
    <Stack sx={{
      display: 'flex',
      flexDirection: 'column',
       paddingX: '0.3rem'
    } }>
    <Chatbot
    config={config}
    messageParser={MessageParser}
    actionProvider={ActionProvider}
  />
    </Stack>
  )
}

export default Register
