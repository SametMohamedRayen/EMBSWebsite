import React, { useState } from "react";

const Input = (props) => {
  const { type, placeholder, width, height, options } = props;
  const optionsArray = type === "select" ? options.split(",") : null;
  const [focused, setFocused] = useState(false);
  return (
    <div className="inputContainer">
      <svg
        width="1060"
        height="949"
        viewBox="0 0 1060 949"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={focused ? "hexDecoration" : "hexDecoration hidden"}
      >
        <g id="HexagonInputDecoration">
          <g
            id="RemainderBottom"
            className={focused ? "hexAnimate animation-delay-half" : ""}
          >
            <line
              id="Line 90"
              x1="808.903"
              y1="869.19"
              x2="887.19"
              y2="825.097"
              stroke="#0CC5CB"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <line
              id="Line 91"
              x1="966"
              y1="874"
              x2="966"
              y2="944"
              stroke="#0CC5CB"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </g>
          <g
            id="HexBottom"
            className={focused ? "hexAnimate animation-delay-quarter" : ""}
          >
            <path
              id="Polygon 50"
              d="M886.795 735.637L964.5 690.774L1042.21 735.637V825.363L964.5 870.227L886.795 825.363V735.637Z"
              stroke="url(#paint0_linear_541_36)"
              strokeWidth="10"
            />
            <line
              id="Line 93"
              x1="1024.5"
              y1="750.5"
              x2="1024.5"
              y2="809.5"
              stroke="url(#paint1_linear_541_36)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <line
              id="Line 94"
              x1="906.5"
              y1="750.5"
              x2="906.5"
              y2="809.5"
              stroke="url(#paint2_linear_541_36)"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>
          <g id="HexMiddleBottom" className={focused ? "hexAnimate" : ""}>
            <path
              id="Polygon 49"
              d="M805.795 601.637L883.5 556.774L961.205 601.637V691.363L883.5 736.227L805.795 691.363V601.637Z"
              stroke="#112849"
              strokeWidth="10"
            />
            <line
              id="Line 98"
              x1="827.415"
              y1="682.085"
              x2="878.511"
              y2="711.585"
              stroke="#112849"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <line
              id="Line 99"
              x1="943.5"
              y1="613.5"
              x2="943.5"
              y2="672.5"
              stroke="#112849"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>
          <g
            id="HexTop"
            className={focused ? "hexAnimate animation-delay-half" : ""}
          >
            <path
              id="Polygon 53"
              d="M95.7946 123.637L173.5 78.7735L251.205 123.637V213.363L173.5 258.227L95.7946 213.363V123.637Z"
              stroke="url(#paint3_linear_541_36)"
              strokeWidth="10"
            />
            <line
              id="Line 95"
              x1="168.511"
              y1="102.415"
              x2="117.415"
              y2="131.915"
              stroke="url(#paint4_linear_541_36)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <line
              id="Line 96"
              x1="167.011"
              y1="233.915"
              x2="115.915"
              y2="204.415"
              stroke="url(#paint5_linear_541_36)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <line
              id="Line 97"
              x1="234.5"
              y1="198.5"
              x2="234.5"
              y2="139.5"
              stroke="url(#paint6_linear_541_36)"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>
          <g
            id="HexMiddleTopRight"
            className={focused ? "hexAnimate animation-delay-quarter" : ""}
          >
            <path
              id="Polygon 52"
              d="M173.795 257.637L251.5 212.774L329.205 257.637V347.363L251.5 392.227L173.795 347.363V257.637Z"
              stroke="#112849"
              strokeWidth="10"
            />
            <line
              id="Line 101"
              x1="312.5"
              y1="331.5"
              x2="312.5"
              y2="272.5"
              stroke="#112849"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <line
              id="Line 102"
              x1="190.5"
              y1="331.5"
              x2="190.5"
              y2="272.5"
              stroke="#112849"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <line
              id="Line 100"
              x1="312.5"
              y1="331.5"
              x2="312.5"
              y2="272.5"
              stroke="#112849"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>
          <g id="HexMiddleTopLeft" className={focused ? "hexAnimate" : ""}>
            <path
              id="Polygon 51"
              d="M17.7946 257.637L95.5 212.774L173.205 257.637V347.363L95.5 392.227L17.7946 347.363V257.637Z"
              stroke="#112849"
              strokeWidth="10"
            />
            <line
              id="Line 103"
              x1="35.9151"
              y1="266.585"
              x2="87.0106"
              y2="237.085"
              stroke="#112849"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>
          <g
            id="RemainderTop"
            className={focused ? "hexAnimate animation-delay-3-quarters" : ""}
          >
            <line
              id="Line 89"
              x1="253.903"
              y1="121.19"
              x2="332.19"
              y2="77.0971"
              stroke="#24549B"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <line
              id="Line 92"
              x1="174"
              y1="5"
              x2="174"
              y2="75"
              stroke="#24549B"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_541_36"
            x1="909.5"
            y1="738"
            x2="915"
            y2="830.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#112849" />
            <stop offset="0.917687" stopColor="#0CC5CB" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_541_36"
            x1="1022"
            y1="748"
            x2="1022"
            y2="812"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#112849" />
            <stop offset="1" stopColor="#0CC5CB" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_541_36"
            x1="904"
            y1="740.5"
            x2="904"
            y2="812"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#112849" />
            <stop offset="1" stopColor="#0CC5CB" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_541_36"
            x1="196.5"
            y1="97"
            x2="173.5"
            y2="264"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#24549B" />
            <stop offset="0.0001" stopColor="#24549B" />
            <stop offset="0.723486" stopColor="#112849" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_541_36"
            x1="142"
            y1="126.5"
            x2="142"
            y2="169"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#24549B" />
            <stop offset="0.0001" stopColor="#24549B" />
            <stop offset="1" stopColor="#112849" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_541_36"
            x1="143"
            y1="154.5"
            x2="143"
            y2="221"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#24549B" />
            <stop offset="0.0001" stopColor="#24549B" />
            <stop offset="1" stopColor="#112849" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_541_36"
            x1="237"
            y1="127.5"
            x2="237"
            y2="214"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#24549B" />
            <stop offset="0.0001" stopColor="#24549B" />
            <stop offset="1" stopColor="#112849" />
          </linearGradient>
        </defs>
      </svg>

      {type !== "select" ? (
        <input
          type={type}
          placeholder={placeholder}
          className="customInput"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        ></input>
      ) : (
        <select className="customInput">
          {optionsArray.map((op) => (
            <option>{op}</option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Input;
