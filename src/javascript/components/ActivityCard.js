import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActivityCard = (props) => {
  const { images, i, title, date, description } = props;
  return (
    <div className="width-fit relative">
      <svg
        className="grid-child-for-overlap"
        width="500"
        height="500"
        viewBox="0 0 977 1042"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="ActivityCard">
          <g id="Card">
            <path
              id="Image"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M886 9.82427V0H868.984L886 9.82427ZM105.553 0L91 8.40241V0H105.553ZM106.993 606.44L99.4466 603.679V328.88L488.5 104.26L877.553 328.88V590.28C742.85 573.172 604.739 583.562 473.98 620.22C353.648 653.955 224.353 649.39 106.993 606.44Z"
              fill={"url(#pattern" + i + ")"}
            />
            <g id="Frame">
              <path
                id="Polygon 58"
                d="M82.4466 319.065L488.5 84.6299L894.553 319.065V787.935L488.5 1022.37L82.4466 787.935V319.065Z"
                stroke="url(#paint0_linear_637_341)"
                strokeWidth="34"
              />
              <path
                id="Line 104"
                d="M106.993 557.94L73 545.5V793.5L488 1032.5L904 793.5V545.5C760.991 523.423 613.312 532.658 473.98 571.72C353.648 605.455 224.353 600.89 106.993 557.94Z"
                fill="url(#paint1_linear_637_341)"
              />
              <path
                id="Vector 11"
                d="M360.082 182.299L315 197.5L488.5 87.5L678 207.5L615.95 185.07C533.428 155.24 443.231 154.264 360.082 182.299Z"
                fill="url(#paint2_linear_637_341)"
              />
            </g>
            <g id="Mask group">
              <mask
                id="mask0_637_341"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="616"
                y="522"
                width="290"
                height="363"
              >
                <g id="Group">
                  <path
                    id="Vector"
                    d="M618 882.658C627.719 876.55 642.493 868.442 661.768 862.532C675.289 858.37 679.978 858.691 690.494 856.079C704.559 852.617 742.415 843.296 758.913 813.528C773.613 787.036 765.359 755.202 763.173 746.821C762.767 745.265 759.852 736.493 753.997 718.978C744.287 689.886 742.867 686.683 742.061 679.332C741.366 672.914 739.824 656.916 747.581 639.915C757.218 618.782 775.559 608.525 786.056 602.667C791.872 599.405 797.777 597.24 809.529 592.829C827.049 586.231 839.824 582.862 845.497 581.2C859.271 577.195 879.15 569.477 904.207 553.012"
                    stroke="#24549B"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    id="Vector_2"
                    d="M703.123 880.019C700.566 860.558 695.728 845.653 691.64 835.432C684.598 817.817 678.792 811.639 676.74 796.07C675.736 788.533 673.899 774.581 680.987 760.876C688.075 747.17 702.513 741.493 721.145 733.484C726.848 731.022 731.643 729.47 741.261 726.31C768.042 717.525 775.924 717.005 786.104 713.359C791.357 711.462 825.406 699.204 833.964 673.426C839.979 655.295 831.172 633.991 813.8 591.266C809.867 581.59 806.029 573.205 806.791 561.402C807.829 545.16 816.927 532.383 824.648 523.997"
                    stroke="#24549B"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    id="Vector_3"
                    d="M764.786 753.456L721.15 733.481"
                    stroke="#24549B"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  />
                  <path
                    id="Vector_4"
                    d="M766.958 787.243L690.458 749.436"
                    stroke="#24549B"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  />
                  <path
                    id="Vector_5"
                    d="M758.707 816.7L677.251 770.872"
                    stroke="#24549B"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  />
                  <path
                    id="Vector_6"
                    d="M728.539 842.218L678.123 803.295"
                    stroke="#24549B"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  />
                  <path
                    id="Vector_7"
                    d="M702.08 873.029L653.947 865.109"
                    stroke="#24549B"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  />
                  <path
                    id="Vector_8"
                    d="M800.794 706.931L742.059 679.333"
                    stroke="#24549B"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  />
                  <path
                    id="Vector_9"
                    d="M825.083 688.616L744.309 648.794"
                    stroke="#24549B"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  />
                  <path
                    id="Vector_10"
                    d="M835.423 667.13L761.152 620.474"
                    stroke="#24549B"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  />
                  <path
                    id="Vector_11"
                    d="M830.443 634.423L789 601"
                    stroke="#24549B"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  />
                  <path
                    id="Vector_12"
                    d="M806.961 567.724L859.793 576.267"
                    stroke="#24549B"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  />
                </g>
              </mask>
              <g mask="url(#mask0_637_341)">
                <g id="Group_2">
                  <path
                    id="Vector_13"
                    d="M781.136 531.366L890.963 579.755L752.05 895.039L642.223 846.65L781.136 531.366Z"
                    fill="url(#paint2_linear_637_341)"
                    fillOpacity="0.5"
                  />
                </g>
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
              xlinkHref="#image0_637_341"
              transform="translate(0 -0.159) scale(0.000805153 0.000996261)"
            />
          </pattern>
          <pattern
            id="pattern1"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_637_341"
              transform="translate(0 -0.159) scale(0.000805153 0.000996261)"
            />
          </pattern>
          <pattern
            id="pattern2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_637_341"
              transform="translate(0 -0.159) scale(0.000805153 0.000996261)"
            />
          </pattern>
          <pattern
            id="pattern3"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image3_637_341"
              transform="translate(0 -0.159) scale(0.000805153 0.000996261)"
            />
          </pattern>
          <pattern
            id="pattern4"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image4_637_341"
              transform="translate(0 -0.159) scale(0.000805153 0.000996261)"
            />
          </pattern>
          <linearGradient
            id="paint0_linear_637_341"
            x1="489"
            y1="565.5"
            x2="488.5"
            y2="1042"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#24549B" />
            <stop offset="1" stopColor="#0CC5CB" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_637_341"
            x1="489"
            y1="572"
            x2="488.5"
            y2="1032.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#24549B" />
            <stop offset="1" stopColor="#0CC5CB" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_637_341"
            x1="836.049"
            y1="555.56"
            x2="697.137"
            y2="870.844"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.124908" stopColor="#24549B" />
            <stop offset="0.467342" stopColor="#FFC10D" />
            <stop offset="0.885429" stopColor="#0CC5CB" />
          </linearGradient>
          <image
            id="image0_637_341"
            data-name="I m sensetive.png"
            width="1242"
            height="1500"
            xlinkHref={images[0]}
          />
          <image
            id="image1_637_341"
            data-name="I m sensetive.png"
            width="1242"
            height="1500"
            xlinkHref={images[1]}
          />
          <image
            id="image2_637_341"
            data-name="I m sensetive.png"
            width="1242"
            height="1500"
            xlinkHref={images[2]}
          />
          <image
            id="image3_637_341"
            data-name="I m sensetive.png"
            width="1242"
            height="1500"
            xlinkHref={images[3]}
          />
          <image
            id="image4_637_341"
            data-name="I m sensetive.png"
            width="1242"
            height="1500"
            xlinkHref={images[4]}
          />
        </defs>
      </svg>
      <div className="absolute z-2 margin-top-neg-16 margin-left-5 line-height-0-5">
        <h2 className="font-size-2 margin-0 font-josefin-sans font-color-white">
          {title}
        </h2>
        <div className="row width-26-pc">
          <FontAwesomeIcon
            icon="fa-regular fa-calendar"
            className="font-size-140 font-color-white"
          ></FontAwesomeIcon>
          <h3 className="margin-0 font-size-140 font-color-white font-albori">
            {date}
          </h3>
        </div>
        <p className="font-size-125 margin-0 font-color-white font-lato centerText margin-right-5">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;
