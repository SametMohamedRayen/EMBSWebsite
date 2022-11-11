import React, { useState } from "react";

const AboutFrame = (props) => {
  const { img, imgSizeFactor } = props;
  const [isTurned, setIsTurned] = useState(false);
  return (
    <svg viewBox="0 0 1459 1851" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g
        id="AboutFrame v1.0"
        onMouseEnter={() => setIsTurned(true)}
        onMouseLeave={() => setIsTurned(false)}
      >
        <g id="Group 15">
          <g id="Group 14">
            <g
              id="Bottom"
              className={isTurned ? "turnAnimation animation-delay-half" : ""}
            >
              <path
                id="Polygon 43"
                d="M882.563 1839.75L862.499 1774.42C841.992 1707.64 805.634 1646.82 756.528 1597.14L722.782 1563L689.036 1597.14C639.929 1646.82 603.572 1707.64 583.064 1774.42L563 1839.75"
                stroke="#0CC5CB"
                strokeWidth="21"
                strokeLinecap="round"
              />
              <line
                id="Line 68"
                x1="621.027"
                y1="1690.18"
                x2="813.027"
                y2="1655.18"
                stroke="#0CC5CB"
                strokeWidth="22"
              />
              <line
                id="Line 69"
                x1="593.796"
                y1="1737.5"
                x2="850.796"
                y2="1732.5"
                stroke="#0CC5CB"
                strokeWidth="21"
              />
              <line
                id="Line 70"
                x1="588.18"
                y1="1780.57"
                x2="871.18"
                y2="1812.57"
                stroke="#0CC5CB"
                strokeWidth="21"
              />
            </g>
            <g
              id="Top"
              className={isTurned ? "turnAnimation animation-delay-half" : ""}
            >
              <path
                id="Polygon 42"
                d="M585 11L605.064 76.3331C625.572 143.108 661.93 203.931 711.036 253.61L744.782 287.75L778.528 253.61C827.634 203.931 863.992 143.108 884.499 76.3331L904.563 11"
                stroke="#24549B"
                strokeWidth="21"
                strokeLinecap="round"
              />
              <line
                id="Line 71"
                x1="650.957"
                y1="183.76"
                x2="798.957"
                y2="223.76"
                stroke="#24549B"
                strokeWidth="15"
              />
              <line
                id="Line 72"
                x1="628"
                y1="141"
                x2="862"
                y2="141"
                stroke="#24549B"
                strokeWidth="16"
              />
              <line
                id="Line 73"
                x1="615.014"
                y1="89.5574"
                x2="889.014"
                y2="57.5574"
                stroke="#24549B"
                strokeWidth="17"
              />
            </g>
            <g id="Middle" className={isTurned ? "turnAnimation" : ""}>
              <line
                id="Line 74"
                x1="511.89"
                y1="1441.23"
                x2="1067.89"
                y2="1321.23"
                stroke="url(#paint0_linear_475_47)"
                strokeWidth="20"
              />
              <line
                id="Line 75"
                x1="422.943"
                y1="1350.48"
                x2="1185.94"
                y2="1105.48"
                stroke="url(#paint1_linear_475_47)"
                strokeWidth="20"
              />
              <path
                id="Line 76"
                d="M498.951 413.192L1068 527.5"
                stroke="url(#paint2_linear_475_47)"
                strokeWidth="20"
              />
              <line
                id="Line 77"
                x1="333.701"
                y1="591.025"
                x2="1144.7"
                y2="648.025"
                stroke="url(#paint3_linear_475_47)"
                strokeWidth="20"
              />
              <g id="Group 12">
                <path
                  id="Vector 6"
                  d="M883.784 291.956C880.445 286.552 873.359 284.878 867.956 288.217C862.552 291.555 860.878 298.641 864.217 304.044L883.784 291.956ZM1001.6 459.927L1009.74 451.813L1001.6 459.927ZM1033.78 492.249L1041.93 484.134L1033.78 492.249ZM1012.9 1398.52L1049.03 1361.05L1032.47 1345.08L996.344 1382.55L1012.9 1398.52ZM1041.93 484.134L1009.74 451.813L993.447 468.042L1025.63 500.363L1041.93 484.134ZM884.722 293.475L883.784 291.956L864.217 304.044L865.156 305.564L884.722 293.475ZM1009.74 451.813C962.135 404.004 920.185 350.875 884.722 293.475L865.156 305.564C901.546 364.465 944.593 418.983 993.447 468.042L1009.74 451.813ZM1049.03 1361.05C1285.73 1115.53 1282.58 725.786 1041.93 484.134L1025.63 500.363C1257.44 733.144 1260.48 1108.58 1032.47 1345.08L1049.03 1361.05ZM996.344 1382.55C945.479 1435.31 901.076 1493.94 864.074 1557.19L883.926 1568.81C920.007 1507.13 963.304 1449.96 1012.9 1398.52L996.344 1382.55Z"
                  fill="url(#paint4_linear_475_47)"
                />
                <circle
                  id="Ellipse 46"
                  cx="858.5"
                  cy="1587.5"
                  r="34"
                  stroke="#0CC5CB"
                  strokeWidth="11"
                />
              </g>
              <g id="Group 11">
                <path
                  id="Vector 5"
                  d="M575.217 1555.04C578.555 1560.45 585.641 1562.12 591.044 1558.78C596.448 1555.45 598.122 1548.36 594.783 1542.96L575.217 1555.04ZM457.404 1387.07L449.255 1395.19L457.404 1387.07ZM425.217 1354.75L417.069 1362.87L425.217 1354.75ZM446.098 448.485L409.975 485.953L426.533 501.916L462.656 464.448L446.098 448.485ZM417.069 1362.87L449.255 1395.19L465.553 1378.96L433.366 1346.64L417.069 1362.87ZM574.278 1553.52L575.217 1555.04L594.783 1542.96L593.845 1541.44L574.278 1553.52ZM449.255 1395.19C496.865 1443 538.815 1496.12 574.278 1553.52L593.845 1541.44C557.454 1482.53 514.407 1428.02 465.553 1378.96L449.255 1395.19ZM409.975 485.953C173.27 731.467 176.423 1121.21 417.069 1362.87L433.366 1346.64C201.555 1113.86 198.518 738.417 426.533 501.916L409.975 485.953ZM462.656 464.448C513.521 411.69 557.924 353.064 594.926 289.807L575.074 278.193C538.993 339.875 495.696 397.041 446.098 448.485L462.656 464.448Z"
                  fill="url(#paint5_linear_475_47)"
                />
                <circle
                  id="Ellipse 47"
                  cx="602.5"
                  cy="258.5"
                  r="34"
                  stroke="#24549B"
                  strokeWidth="11"
                />
              </g>
            </g>
          </g>
          <g id="Mask group">
            <mask
              id="mask0_475_47"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="287"
              y="630"
              width="891"
              height="672"
            >
              <path
                id="Vector 7"
                d="M1162.41 1068.33L428.028 1302L376.562 1215.64C349.343 1169.96 327.582 1121.24 311.729 1070.49L310.503 1066.57C285.886 987.754 281.209 904.067 296.892 823.004C305.313 779.476 317.393 736.736 333.006 695.24L357.551 630L1126.15 683.039L1155.09 779.361C1178.39 856.896 1183.68 938.726 1170.57 1018.62L1162.41 1068.33Z"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_475_47)">
              <rect
                id="9atous Yebki 1 1"
                x="27"
                y="630"
                width="1195"
                height="672"
                fill="url(#pattern0)"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_475_47"
            transform="scale(0.00208333 0.00370474)"
          />
        </pattern>
        <linearGradient
          id="paint0_linear_475_47"
          x1="792.002"
          y1="1436.5"
          x2="738.503"
          y2="991.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0CC5CB" />
          <stop offset="1" stopColor="#24549B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_475_47"
          x1="703"
          y1="1407"
          x2="617.495"
          y2="772.501"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0CC5CB" />
          <stop offset="1" stopColor="#24549B" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_475_47"
          x1="806.492"
          y1="398.499"
          x2="741.498"
          y2="892.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#24549B" />
          <stop offset="0.973841" stopColor="#0CC5CB" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_475_47"
          x1="706.508"
          y1="506"
          x2="680.511"
          y2="911.001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#24549B" />
          <stop offset="1" stopColor="#0CC5CB" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_475_47"
          x1="1166.5"
          y1="1563"
          x2="1166.5"
          y2="298"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0CC5CB" />
          <stop offset="1" stopColor="#24549B" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_475_47"
          x1="292.5"
          y1="284"
          x2="292.5"
          y2="1549"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#24549B" />
          <stop offset="1" stopColor="#0CC5CB" />
        </linearGradient>
        <image
          id="image0_475_47"
          data-name="9atous Yebki 1.jpg"
          width={(480 * imgSizeFactor).toString()}
          height={(270 * imgSizeFactor).toString()}
          xlinkHref={img}
        />
      </defs>
    </svg>
  );
};

export default AboutFrame;
