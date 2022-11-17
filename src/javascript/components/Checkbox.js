import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const Checkbox = (props) => {
  const { icon, size, init, getValue } = props;
  const [checked, setChecked] = useState(init);
  return (
    <div
      className={
        (checked ? "checkedCheckboxRound " : "uncheckedCheckboxRound ") + size
      }
      onClick={() => {
        setChecked(!checked);
        getValue(!checked);
      }}
    >
      <FontAwesomeIcon
        icon={icon}
        className={checked ? "font-color-white" : "font-color-darkBlue"}
      ></FontAwesomeIcon>
    </div>
  );
};

export default Checkbox;
