import React, { useEffect, useState } from "react";
import { ReactComponent as Cloud } from "../SVG/Cloud.svg";

const TextSlider = (props) => {
  const { texts } = props;
  const [index, setIndex] = useState(0);
  const [newText, setNewText] = useState(texts[0]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setIndex(index === texts.length - 1 ? 0 : index + 1);
      setNewText(texts[index]);
    }, 5000);
    return () => clearInterval(intervalID);
  }, [newText, index]);

  return (
    <div>
      <Cloud className="cloud" />
      <div className="slidingText">{newText}</div>
    </div>
  );
};

export default TextSlider;
