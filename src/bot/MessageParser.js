import React from 'react';
import { setName } from '../redux/student/StudentSlice';
import { useDispatch } from 'react-redux';
const MessageParser = ({ children, actions }) => {
  const dispatch = useDispatch();
  const parse = (message) => {
    if (message) {
       dispatch(setName(message));
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
            ageHandler: actions.ageHandler,
            setAgeHandler:actions.setAgeHandler
          },
        });
      })}
    </div>
  );
};

export default MessageParser;
