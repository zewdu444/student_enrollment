import React from "react";


const Options = (props) => {
  const options = [
    {
      text: "javascript",
      handler: props.actionProvider.nameHandler,
      id: 1,
    },
    { text: "Python", handler: () => {}, id: 2 },
    { text: "Golang", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} >
      {option.text}
    </button>
  ));

  return <div>{buttonsMarkup}</div>;
};

export default Options;
