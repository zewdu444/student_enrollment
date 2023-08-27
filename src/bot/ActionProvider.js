import React from 'react';
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
        widget: "AgeOptions",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

  }

const setAgeHandler = ()=>{
  const botMessage = createChatBotMessage(
    "Thank you. In 5 seconds, bot will exit",
    {
      widget: "Counter",
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
            setAgeHandler,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
