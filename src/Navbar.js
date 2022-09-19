import React, { useState } from "react";
import { ReactComponent as NavbarShape } from "./SVG/NavbarShape.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

const Navbar = () => {
  const [isOn, setIsOn] = useState(0);
  return (
    <div className="navbar">
      <NavbarShape className="navbarShape" />
      <nav className="nav">
        <div className="navElements">
          <img
            src={require("./images/Logo EMBS.png")}
            alt="LOGO"
            className="logo"
          />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Activities</li>
            <li>Get in Touch</li>
          </ul>
          <div className="socials">
            <div className="socialsShape">
              <svg
                width="490"
                height="462"
                viewBox="0 0 490 462"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hexagons"
              >
                <g id="SocialsShape">
                  <g id="MainShape">
                    <line
                      id="Line 20"
                      x1="278.518"
                      y1="354.392"
                      x2="322.518"
                      y2="329.392"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                    <circle
                      id="Ellipse 13"
                      cx="379.5"
                      cy="226.5"
                      r="9"
                      stroke="#0CC5CB"
                      stroke-width="3"
                    />
                    <circle
                      id="Ellipse 15"
                      cx="383.5"
                      cy="451.5"
                      r="9"
                      stroke="#0CC5CB"
                      stroke-width="3"
                    />
                    <circle
                      id="Ellipse 14"
                      cx="270"
                      cy="361"
                      r="11.5"
                      stroke="#0CC5CB"
                      stroke-width="3"
                    />
                    <line
                      id="Line 18"
                      x1="328.518"
                      y1="255.392"
                      x2="372.518"
                      y2="230.392"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                    <path
                      id="Polygon 1"
                      d="M70.1821 42.7321L133 6.4641L195.818 42.7321V115.268L133 151.536L70.1821 115.268V42.7321Z"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                    <line
                      id="Line 4"
                      x1="194.518"
                      y1="43.3916"
                      x2="238.518"
                      y2="18.3916"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                    <line
                      id="Line 11"
                      x1="320.486"
                      y1="44.4101"
                      x2="385.486"
                      y2="6.41011"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                    <line
                      id="Line 9"
                      x1="279.518"
                      y1="139.392"
                      x2="323.518"
                      y2="114.392"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                    <line
                      id="Line 14"
                      x1="402.518"
                      y1="139.392"
                      x2="446.518"
                      y2="114.392"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                    <line
                      id="Line 23"
                      x1="385.518"
                      y1="367.392"
                      x2="429.518"
                      y2="342.392"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                    <line
                      id="Line 6"
                      x1="19.5116"
                      y1="144.395"
                      x2="68.5116"
                      y2="116.395"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                    <line
                      id="Line 5"
                      x1="68.5116"
                      y1="42.6047"
                      x2="19.5116"
                      y2="14.6047"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                    <line
                      id="Line 8"
                      x1="323.448"
                      y1="45.5672"
                      x2="280.448"
                      y2="19.5672"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                    <line
                      id="Line 13"
                      x1="363.448"
                      y1="139.567"
                      x2="320.448"
                      y2="113.567"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                    <line
                      id="Line 17"
                      x1="313.477"
                      y1="254.585"
                      x2="257.477"
                      y2="221.585"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                    <line
                      id="Line 21"
                      x1="385.451"
                      y1="368.569"
                      x2="322.451"
                      y2="330.569"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                    <line
                      id="Line 12"
                      x1="425.448"
                      y1="32.5672"
                      x2="382.448"
                      y2="6.5672"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                    <line
                      id="Line 7"
                      x1="236.457"
                      y1="139.572"
                      x2="196.457"
                      y2="115.572"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                    <line
                      id="Line 24"
                      x1="483.922"
                      y1="146.429"
                      x2="448.429"
                      y2="123.078"
                      stroke="#0CC5CB"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                    <line
                      id="Line 25"
                      x1="487.922"
                      y1="140.429"
                      x2="452.429"
                      y2="117.078"
                      stroke="#0CC5CB"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                    <circle
                      id="Ellipse 1"
                      cx="10.5"
                      cy="10.5"
                      r="9"
                      stroke="#0CC5CB"
                      stroke-width="3"
                    />
                    <circle
                      id="Ellipse 3"
                      cx="243.5"
                      cy="16.5"
                      r="7"
                      stroke="#0CC5CB"
                      stroke-width="3"
                    />
                    <circle
                      id="Ellipse 5"
                      cx="274.5"
                      cy="16.5"
                      r="7"
                      stroke="#0CC5CB"
                      stroke-width="3"
                    />
                    <circle
                      id="Ellipse 6"
                      cx="274.5"
                      cy="142.5"
                      r="7"
                      stroke="#0CC5CB"
                      stroke-width="3"
                    />
                    <circle
                      id="Ellipse 11"
                      cx="259.5"
                      cy="166.5"
                      r="7"
                      stroke="#0CC5CB"
                      stroke-width="3"
                    />
                    <circle
                      id="Ellipse 7"
                      cx="430.5"
                      cy="36.5"
                      r="7"
                      stroke="#0CC5CB"
                      stroke-width="3"
                    />
                    <circle
                      id="Ellipse 8"
                      cx="444.5"
                      cy="60.5"
                      r="7"
                      stroke="#0CC5CB"
                      stroke-width="3"
                    />
                    <circle
                      id="Ellipse 9"
                      cx="368.5"
                      cy="143.5"
                      r="7"
                      stroke="#0CC5CB"
                      stroke-width="3"
                    />
                    <circle
                      id="Ellipse 10"
                      cx="396.5"
                      cy="142.5"
                      r="7"
                      stroke="#0CC5CB"
                      stroke-width="3"
                    />
                    <circle
                      id="Ellipse 16"
                      cx="435.5"
                      cy="338.5"
                      r="7"
                      stroke="#0CC5CB"
                      stroke-width="3"
                    />
                    <circle
                      id="Ellipse 4"
                      cx="243.5"
                      cy="142.5"
                      r="7"
                      stroke="#0CC5CB"
                      stroke-width="3"
                    />
                    <circle
                      id="Ellipse 2"
                      cx="10.5"
                      cy="147.5"
                      r="9"
                      stroke="#0CC5CB"
                      stroke-width="3"
                    />
                    <circle
                      id="Ellipse 12"
                      cx="321.5"
                      cy="258.5"
                      r="9"
                      stroke="#0CC5CB"
                      stroke-width="3"
                    />
                    <line
                      id="Line 10"
                      x1="322"
                      y1="43"
                      x2="322"
                      y2="117"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                    <line
                      id="Line 19"
                      x1="321"
                      y1="268"
                      x2="321"
                      y2="332"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                    <line
                      id="Line 22"
                      x1="384"
                      y1="366"
                      x2="384"
                      y2="442"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                    <line
                      id="Line 16"
                      x1="259"
                      y1="172"
                      x2="259"
                      y2="224"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                    <line
                      id="Line 15"
                      x1="445"
                      y1="117"
                      x2="445"
                      y2="68"
                      stroke="#0CC5CB"
                      stroke-width="6"
                    />
                  </g>
                  <g id="Line1" className={isOn === 1 ? "Line1Anim" : ""}>
                    <path
                      id="Line 26"
                      d="M82.2611 51.6946L135.261 21.6946"
                      stroke="#0CC5CB"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="Line3" className={isOn === 1 ? "Line3Anim" : ""}>
                    <path
                      id="Line 28"
                      d="M84 107L133 135"
                      stroke="#0CC5CB"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="Line2" className={isOn === 1 ? "Line2Anim" : ""}>
                    <path
                      id="Line 27"
                      d="M180 108L180 52"
                      stroke="#0CC5CB"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="Line4" className={isOn === 2 ? "Line4Anim" : ""}>
                    <path
                      id="Line 29"
                      d="M211 108L211 52"
                      stroke="#0CC5CB"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="Line5" className={isOn === 2 ? "Line5Anim" : ""}>
                    <path
                      id="Line 30"
                      d="M307 108L307 52"
                      stroke="#0CC5CB"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </g>
                  {/*<g id="Line7" className={isOn === 3 ? "Line7Anim" : ""}>
                    <path
                      id="Line 32"
                      d="M430 108L430 52"
                      stroke="#0CC5CB"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </g>*/}
                  <g id="Line6" className={isOn === 3 ? "Line6Anim" : ""}>
                    <path
                      id="Line 31"
                      d="M336.652 52.4961L384.903 24.0732"
                      stroke="#0CC5CB"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <a
              href="https://www.facebook.com/EMBS.ENETCOM"
              className="social"
              id="fb"
              onMouseEnter={() => setIsOn(1)}
              onMouseLeave={() => setIsOn(0)}
            >
              <FontAwesomeIcon
                icon={["fab", "facebook"]}
                className="socialIcon"
              />
            </a>
            <a
              href="https://www.instagram.com/ieee_embs_enetcom_sbc/"
              className="social"
              id="ig"
              onMouseEnter={() => setIsOn(2)}
              onMouseLeave={() => setIsOn(0)}
            >
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                className="socialIcon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ieee-enet-com-student-branch-39167b175/?originalSubdomain=tn"
              className="social"
              id="li"
              onMouseEnter={() => setIsOn(3)}
              onMouseLeave={() => setIsOn(0)}
            >
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                className="socialIcon"
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
