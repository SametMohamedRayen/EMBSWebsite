import React, { useEffect, useState } from "react";

const EventSlideShow = (props) => {
  const {
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  } = props;

  const [index, setIndex] = useState(-1);
  const [isHovered, setIsHovered] = useState(-1);

  useEffect(() => {
    if (isHovered !== -1) {
      setTimeout(() => {
        setIndex(index === 2 ? 0 : index + 1);
      }, 3000);
    }
  }, [index]);

  return (
    <svg
      className="activitiesHexFrame"
      viewBox="0 0 5650 3500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Hexagons" className="positionLower">
        <g
          id="LeftHex"
          onMouseEnter={() => {
            console.log("entered 1");
            setIndex(0);
            setIsHovered(0);
          }}
          onMouseLeave={() => {
            console.log("left 1");
            setIsHovered(-1);
          }}
          className={
            isHovered === 0
              ? "highlightEventLeft"
              : isHovered === 1 || isHovered === 2
              ? "diminishEventLeft"
              : "setDefaultCss-trans-500"
          }
        >
          <g id="LeftHexFrame">
            <path
              id="Polygon 32"
              d="M489.835 821.065L1150.5 439.63L1811.16 821.065V1583.94L1150.5 1965.37L489.835 1583.94V821.065Z"
              stroke="url(#paint0_linear_342_22)"
              strokeWidth="34"
            />
            <line
              id="Line 47"
              x1="124.299"
              y1="1805.98"
              x2="501.299"
              y2="1571.98"
              stroke="#0CC5CB"
              strokeWidth="33"
            />
            <circle
              id="Ellipse 30"
              cx="71.5"
              cy="1840.5"
              r="59.5"
              stroke="#0CC5CB"
              strokeWidth="24"
            />
            <line
              id="Line 46"
              x1="407"
              y1="918"
              x2="407"
              y2="1487"
              stroke="#0CC5CB"
              strokeWidth="26"
              strokeLinecap="round"
            />
          </g>
          <g id="Mask group">
            <mask
              id="mask0_342_22"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="520"
              y="475"
              width="1262"
              height="1456"
            >
              <path
                id="Polygon 33"
                d="M1151 475L1781.47 839V1567L1151 1931L520.534 1567V839L1151 475Z"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_342_22)">
              <rect
                id="Anger 1"
                x="398"
                y="475"
                width="1506"
                height="1456"
                fill="url(#pattern1)"
              />
            </g>
          </g>
        </g>
        <g
          id="MiddleHex"
          onMouseEnter={() => {
            console.log("entered 2");
            setIndex(0);
            setIsHovered(1);
          }}
          onMouseLeave={() => {
            console.log("left 2");
            setIsHovered(-1);
          }}
          className={
            isHovered === 1
              ? "highlightEventCenter"
              : isHovered === 0
              ? "diminishEventRight"
              : isHovered === 2
              ? "diminishEventLeft"
              : "setDefaultCss-trans-500"
          }
        >
          <g id="MiddleHexFrame">
            <path
              id="Polygon 31"
              d="M1991.84 838.065L2652.5 456.63L3313.16 838.065V1600.94L2652.5 1982.37L1991.84 1600.94V838.065Z"
              stroke="url(#paint1_linear_342_22)"
              strokeWidth="34"
            />
            <line
              id="Line 42"
              x1="3400"
              y1="928"
              x2="3400"
              y2="1497"
              stroke="url(#paint2_linear_342_22)"
              strokeWidth="26"
              strokeLinecap="round"
            />
            <line
              id="Line 44"
              x1="1905"
              y1="918"
              x2="1905"
              y2="1487"
              stroke="url(#paint3_linear_342_22)"
              strokeWidth="26"
              strokeLinecap="round"
            />
            <line
              id="Line 43"
              x1="2654.5"
              y1="1985"
              x2="2654.5"
              y2="2272"
              stroke="#F0C808"
              strokeWidth="31"
            />
            <circle
              id="Ellipse 29"
              cx="2653"
              cy="2349"
              r="84"
              stroke="url(#paint4_linear_342_22)"
              strokeWidth="32"
            />
            <line
              id="Line 48"
              x1="2651.5"
              y1="464"
              x2="2651.5"
              y2="177"
              stroke="#F0C808"
              strokeWidth="31"
            />
            <circle
              id="Ellipse 31"
              cx="2653"
              cy="100"
              r="84"
              transform="rotate(-180 2653 100)"
              stroke="url(#paint5_linear_342_22)"
              strokeWidth="32"
            />
          </g>
          <g id="Mask group_2">
            <mask
              id="mask1_342_22"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="2022"
              y="492"
              width="1262"
              height="1456"
            >
              <path
                id="Polygon 33_2"
                d="M2653 492L3283.47 856V1584L2653 1948L2022.53 1584V856L2653 492Z"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask1_342_22)">
              <rect
                id="Anger 1_2"
                x="1900"
                y="492"
                width="1506"
                height="1456"
                fill="url(#pattern2)"
              />
            </g>
          </g>
        </g>
        <g
          id="RightHex"
          onMouseEnter={() => {
            console.log("entered 3");
            setIndex(0);
            setIsHovered(2);
          }}
          onMouseLeave={() => {
            console.log("left 3");
            setIsHovered(-1);
          }}
          className={
            isHovered === 2
              ? "highlightEventRight"
              : isHovered === 0 || isHovered === 1
              ? "diminishEventRight"
              : "setDefaultCss-trans-500"
          }
        >
          <g id="RightHexFrame">
            <path
              id="Polygon 30"
              d="M3488.84 838.065L4149.5 456.63L4810.16 838.065V1600.94L4149.5 1982.37L3488.84 1600.94V838.065Z"
              stroke="url(#paint6_linear_342_22)"
              strokeWidth="34"
            />
            <line
              id="Line 40"
              x1="4812.3"
              y1="835.981"
              x2="5189.3"
              y2="601.981"
              stroke="#112849"
              strokeWidth="33"
            />
            <circle
              id="Ellipse 28"
              cx="5232.5"
              cy="573.5"
              r="59.5"
              stroke="#112849"
              strokeWidth="24"
            />
            <line
              id="Line 45"
              x1="4886"
              y1="935"
              x2="4886"
              y2="1504"
              stroke="#112849"
              strokeWidth="26"
              strokeLinecap="round"
            />
          </g>
          <g id="Mask group_3">
            <mask
              id="mask2_342_22"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="3519"
              y="492"
              width="1262"
              height="1456"
            >
              <path
                id="Polygon 33_3"
                d="M4150 492L4780.47 856V1584L4150 1948L3519.53 1584V856L4150 492Z"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask2_342_22)">
              <rect
                id="Anger 1_3"
                x="3397"
                y="492"
                width="1506"
                height="1456"
                fill="url(#pattern3)"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref={
              isHovered === 0
                ? "#image" + (3 * isHovered + index).toString() + "_342_22"
                : "#image0_342_22"
            }
            transform="scale(0.0019771 0.00204499)"
          />
        </pattern>
        <pattern
          id="pattern2"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref={
              isHovered === 1
                ? "#image" + (3 * isHovered + index).toString() + "_342_22"
                : "#image3_342_22"
            }
            transform="scale(0.0019771 0.00204499)"
          />
        </pattern>
        <pattern
          id="pattern3"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref={
              isHovered === 2
                ? "#image" + (3 * isHovered + index).toString() + "_342_22"
                : "#image6_342_22"
            }
            transform="scale(0.0019771 0.00204499)"
          />
        </pattern>
        <linearGradient
          id="paint0_linear_342_22"
          x1="2714.5"
          y1="1170"
          x2="784"
          y2="1203"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F0C808" />
          <stop offset="0.567708" stopColor="#24549B" />
          <stop offset="1" stopColor="#0CC5CB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_342_22"
          x1="3592.5"
          y1="1220"
          x2="1683"
          y2="1220"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#24549B" />
          <stop offset="0.498549" stopColor="#F0C808" />
          <stop offset="1" stopColor="#24549B" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_342_22"
          x1="3383"
          y1="1213"
          x2="3432"
          y2="1213"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#687B6A" />
          <stop offset="1" stopColor="#335C90" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_342_22"
          x1="1922.5"
          y1="1203"
          x2="1892"
          y2="1203"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5D7472" />
          <stop offset="1" stopColor="#476782" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_342_22"
          x1="3680.5"
          y1="2249"
          x2="1769"
          y2="2249"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#24549B" />
          <stop offset="0.536458" stopColor="#F0C808" />
          <stop offset="1" stopColor="#24549B" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_342_22"
          x1="3757.5"
          y1="155.5"
          x2="1612"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#24549B" />
          <stop offset="0.514339" stopColor="#F0C808" />
          <stop offset="1" stopColor="#24549B" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_342_22"
          x1="2636.5"
          y1="1161"
          x2="4584"
          y2="1220"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F0C808" />
          <stop offset="0.473958" stopColor="#24549B" />
          <stop offset="1" stopColor="#112849" />
        </linearGradient>
        <image
          id="image0_342_22"
          width="506"
          height="489"
          xlinkHref={image0}
          className="picFitFrame"
        />
        <image
          id="image1_342_22"
          width="506"
          height="489"
          xlinkHref={image1}
          className="picFitFrame"
        />
        <image
          id="image2_342_22"
          width="506"
          height="489"
          xlinkHref={image2}
          className="picFitFrame"
        />
        <image
          id="image3_342_22"
          width="506"
          height="489"
          xlinkHref={image3}
          className="picFitFrame"
        />
        <image
          id="image4_342_22"
          width="506"
          height="489"
          xlinkHref={image4}
          className="picFitFrame"
        />
        <image
          id="image5_342_22"
          width="506"
          height="489"
          xlinkHref={image5}
          className="picFitFrame"
        />
        <image
          id="image6_342_22"
          width="506"
          height="489"
          xlinkHref={image6}
          className="picFitFrame"
        />
        <image
          id="image7_342_22"
          width="506"
          height="489"
          xlinkHref={image7}
          className="picFitFrame"
        />
        <image
          id="image8_342_22"
          width="506"
          height="489"
          xlinkHref={image8}
          className="picFitFrame"
        />
      </defs>
    </svg>
  );
};

export default EventSlideShow;
