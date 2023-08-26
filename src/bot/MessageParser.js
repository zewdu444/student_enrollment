import React from 'react';

const MessageParser = ({ children, actions }) => {

  const parse = (message) => {
     console.log(message);
    if (message) {
       actions.ageHandler();
    }
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {
            nameHandler: actions.nameHandler,
          },
        });
      })}
    </div>
  );
};

export default MessageParser;
