import React from "react";

const RoundButton = (props) => {
  const { text, href } = props;
  return (
    <a href={href} className="roundButton">
      {text}
    </a>
  );
};

export default RoundButton;
