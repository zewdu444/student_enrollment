import { createChatBotMessage } from 'react-chatbot-kit';
import Prompt  from '../widgets/Prompt';
import Options from '../widgets/Options';
const botName = 'Student Registration  System';

const config = {
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`, {
    widget: "Prompt",
    delay: 2000,
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
    {
      widgetName: 'Options',
      widgetFunc: (props) => <Options {...props} />,
    },
  ],

};

export default config;
