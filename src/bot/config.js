import { createChatBotMessage } from 'react-chatbot-kit';
import Prompt  from '../widgets/Prompt';
const botName = 'Student Registration  System';

const config = {
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`, {
    widget: "Prompt",
    delay: 3000,
  })],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: 'rgb(25,118,210)',

    },
    chatButton: {
      backgroundColor: 'rgb(25,118,210)',
    },
  },
  widgets: [
    {
      widgetName: 'Prompt',
      widgetFunc: (props) => <Prompt {...props} />,
    },
  ],

};

export default config;
