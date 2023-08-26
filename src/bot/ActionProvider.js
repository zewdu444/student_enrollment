import React from 'react';
import { createClientMessage, createCustomMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const helloHandler = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };


  const nameHandler = () => {
    const botMessage = createChatBotMessage(
      "Please enter your name",
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage]
    }));


  };

  const ageHandler = () => {
    const botMessage = createChatBotMessage(
      "Please Select your age",
      {
        widget: "Options",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  // Put the handleHello and handleDog function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            helloHandler,
            nameHandler,
            ageHandler,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
