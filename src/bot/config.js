import { createChatBotMessage } from 'react-chatbot-kit';
import Prompt  from '../widgets/Prompt';
import AgeOptions from '../widgets/AgeOptions';
import Counter from '../widgets/Counter';
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
      widgetName: 'AgeOptions',
      widgetFunc: (props) => <AgeOptions {...props} />,
    },
    {
      widgetName: 'Counter',
      widgetFunc: (props) => <Counter {...props} />,
    }
  ],

};

export default config;
