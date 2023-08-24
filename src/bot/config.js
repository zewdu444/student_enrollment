import { createChatBotMessage } from 'react-chatbot-kit';
const botName = 'Student Registration  System';

const config = {
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: 'rgb(25,118,210)',

    },

    chatButton: {
      backgroundColor: 'rgb(25,118,210)',
    },
    chatContainer: {
      backgroundColor: 'rgb(25,118,210)',
    }
  }

};

export default config;
