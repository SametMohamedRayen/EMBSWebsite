import React from "react";

const GradientText = (props) => {
  const { text, font, size, weight, color1, percentage1, color2, percentage2 } =
    props;
  return (
    <h2
      className={
        "gradientText-" +
        font +
        "-" +
        size +
        "-" +
        weight +
        "-" +
        color1 +
        "-" +
        percentage1 +
        "-" +
        color2 +
        "-" +
        percentage2
      }
    >
      {text}
    </h2>
  );
};

GradientText.defaultProps = {
  text: "Text",
  font: "lato",
  size: "1",
  weight: "100",
  color1: "white",
  percentage1: "50",
  color2: "black",
  percentage2: "50",
};

export default GradientText;
