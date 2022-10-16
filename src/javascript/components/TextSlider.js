import React, { useEffect, useState } from "react";
import { ReactComponent as Cloud } from "../../assets/svg/Cloud.svg";

const TextSlider = (props) => {
  const { texts } = props;
  const [index, setIndex] = useState(0);
  const [newText, setNewText] = useState(texts[0]);
  const [slidingOut, setSlidingOut] = useState(false);
  const [slidingIn, setSlidingIn] = useState(true);

  useEffect(() => {
    if (slidingIn) {
      const intervalSlidingIn = setInterval(() => {
        setSlidingIn(false);
      }, 1000);
      return () => clearInterval(intervalSlidingIn);
    } else if (!slidingOut) {
      const intervalFixed = setInterval(() => {
        setSlidingOut(true);
      }, 3000);
      return () => clearInterval(intervalFixed);
    } else {
      const intervalSliding = setInterval(() => {
        setIndex(index === texts.length - 1 ? 0 : index + 1);
        setNewText(texts[index]);
        setSlidingOut(false);
        setSlidingIn(true);
      }, 1000);
      return () => clearInterval(intervalSliding);
    }
  }, [newText, slidingOut, slidingIn, index]);

  return (
    <div className="cloudParent">
      <Cloud className="cloud" />
      <div
        className={
          (slidingOut
            ? "slidingText"
            : slidingIn
            ? "slidingInText"
            : "fixedText") + " lineBreaks quoteText"
        }
      >
        {newText}
      </div>
    </div>
  );
};

export default TextSlider;
