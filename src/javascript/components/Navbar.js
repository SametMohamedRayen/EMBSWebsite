import React, { useEffect, useState } from "react";
import { ReactComponent as NavbarShape } from "../../assets/svg/NavbarShape.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

library.add(fab);

const Navbar = () => {
  const [isOn, setIsOn] = useState(0);
  const [navbar, setNavbar] = useState(false);
  let location = useLocation();

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className="navbar">
      <NavbarShape className={navbar ? "navbarScrolled" : "navbarShape"} />
      <nav className={navbar ? "navScrolled" : "nav"}>
        <div className="navElements">
          <img
            src={require("../../assets/images/LogoEMBS.png")}
            alt="LOGO"
            className={navbar ? "logoScrolled" : "logo"}
          />
          <ul>
            <li>
              <div className="navLink">
                <Link
                  to="/"
                  className={
                    "navLinkItem" +
                    (location.pathname === "/" ? " text-lightBlue" : "")
                  }
                >
                  Home
                </Link>
                <svg
                  className="loadHex"
                  width="141"
                  height="167"
                  viewBox="0 0 141 167"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="HoverButtonHexagon">
                    <line
                      id="Line 32"
                      x1="7.43861"
                      y1="47.7059"
                      x2="64.4386"
                      y2="13.7059"
                      stroke="url(#paint0_linear_171_98)"
                      strokeWidth="10"
                    />
                    <line
                      id="Line 33"
                      x1="10"
                      y1="43"
                      x2="10"
                      y2="108"
                      stroke="url(#paint1_linear_171_98)"
                      strokeWidth="10"
                    />
                    <circle
                      id="Ellipse 19"
                      cx="71.5"
                      cy="10.5"
                      r="8"
                      stroke="#24549B"
                      strokeWidth="5"
                    />
                    <circle
                      id="Ellipse 22"
                      cx="10.5"
                      cy="115.5"
                      r="8"
                      stroke="#24549B"
                      strokeWidth="5"
                    />
                    <circle
                      id="Ellipse 23"
                      cx="68.5"
                      cy="156.5"
                      r="8"
                      stroke="#24549B"
                      strokeWidth="5"
                    />
                    <circle
                      id="Ellipse 24"
                      cx="130.5"
                      cy="51.5"
                      r="8"
                      stroke="#24549B"
                      strokeWidth="5"
                    />
                    <line
                      id="Line 34"
                      x1="133.561"
                      y1="118.294"
                      x2="76.5614"
                      y2="152.294"
                      stroke="url(#paint2_linear_171_98)"
                      strokeWidth="10"
                    />
                    <line
                      id="Line 35"
                      x1="131"
                      y1="123"
                      x2="131"
                      y2="58"
                      stroke="url(#paint3_linear_171_98)"
                      strokeWidth="10"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_171_98"
                      x1="22"
                      y1="48"
                      x2="55.5"
                      y2="30"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0CC5CB" />
                      <stop offset="1" stopColor="#24549B" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_171_98"
                      x1="5"
                      y1="61.5"
                      x2="5"
                      y2="88.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0CC5CB" />
                      <stop offset="1" stopColor="#24549B" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_171_98"
                      x1="116"
                      y1="123"
                      x2="91"
                      y2="139"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0CC5CB" />
                      <stop offset="1" stopColor="#24549B" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_171_98"
                      x1="136"
                      y1="102.5"
                      x2="136"
                      y2="77.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0CC5CB" />
                      <stop offset="1" stopColor="#24549B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </li>
            <li>
              <div className="navLink">
                <Link
                  to="/about"
                  className={
                    "navLinkItem" +
                    (location.pathname === "/about" ? " text-lightBlue" : "")
                  }
                >
                  About
                </Link>
                <svg
                  className="loadHex"
                  width="141"
                  height="167"
                  viewBox="0 0 141 167"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="HoverButtonHexagon">
                    <line
                      id="Line 32"
                      x1="7.43861"
                      y1="47.7059"
                      x2="64.4386"
                      y2="13.7059"
                      stroke="url(#paint0_linear_171_98)"
                      strokeWidth="10"
                    />
                    <line
                      id="Line 33"
                      x1="10"
                      y1="43"
                      x2="10"
                      y2="108"
                      stroke="url(#paint1_linear_171_98)"
                      strokeWidth="10"
                    />
                    <circle
                      id="Ellipse 19"
                      cx="71.5"
                      cy="10.5"
                      r="8"
                      stroke="#24549B"
                      strokeWidth="5"
                    />
                    <circle
                      id="Ellipse 22"
                      cx="10.5"
                      cy="115.5"
                      r="8"
                      stroke="#24549B"
                      strokeWidth="5"
                    />
                    <circle
                      id="Ellipse 23"
                      cx="68.5"
                      cy="156.5"
                      r="8"
                      stroke="#24549B"
                      strokeWidth="5"
                    />
                    <circle
                      id="Ellipse 24"
                      cx="130.5"
                      cy="51.5"
                      r="8"
                      stroke="#24549B"
                      strokeWidth="5"
                    />
                    <line
                      id="Line 34"
                      x1="133.561"
                      y1="118.294"
                      x2="76.5614"
                      y2="152.294"
                      stroke="url(#paint2_linear_171_98)"
                      strokeWidth="10"
                    />
                    <line
                      id="Line 35"
                      x1="131"
                      y1="123"
                      x2="131"
                      y2="58"
                      stroke="url(#paint3_linear_171_98)"
                      strokeWidth="10"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_171_98"
                      x1="22"
                      y1="48"
                      x2="55.5"
                      y2="30"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0CC5CB" />
                      <stop offset="1" stopColor="#24549B" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_171_98"
                      x1="5"
                      y1="61.5"
                      x2="5"
                      y2="88.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0CC5CB" />
                      <stop offset="1" stopColor="#24549B" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_171_98"
                      x1="116"
                      y1="123"
                      x2="91"
                      y2="139"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0CC5CB" />
                      <stop offset="1" stopColor="#24549B" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_171_98"
                      x1="136"
                      y1="102.5"
                      x2="136"
                      y2="77.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0CC5CB" />
                      <stop offset="1" stopColor="#24549B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </li>
            <li>
              <div className="navLink">
                <Link
                  to="/activities"
                  className={
                    "navLinkItem" +
                    (location.pathname === "/activities"
                      ? " text-lightBlue"
                      : "")
                  }
                >
                  Activities
                </Link>
                <svg
                  className="loadHex"
                  width="141"
                  height="167"
                  viewBox="0 0 141 167"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="HoverButtonHexagon">
                    <line
                      id="Line 32"
                      x1="7.43861"
                      y1="47.7059"
                      x2="64.4386"
                      y2="13.7059"
                      stroke="url(#paint0_linear_171_98)"
                      strokeWidth="10"
                    />
                    <line
                      id="Line 33"
                      x1="10"
                      y1="43"
                      x2="10"
                      y2="108"
                      stroke="url(#paint1_linear_171_98)"
                      strokeWidth="10"
                    />
                    <circle
                      id="Ellipse 19"
                      cx="71.5"
                      cy="10.5"
                      r="8"
                      stroke="#24549B"
                      strokeWidth="5"
                    />
                    <circle
                      id="Ellipse 22"
                      cx="10.5"
                      cy="115.5"
                      r="8"
                      stroke="#24549B"
                      strokeWidth="5"
                    />
                    <circle
                      id="Ellipse 23"
                      cx="68.5"
                      cy="156.5"
                      r="8"
                      stroke="#24549B"
                      strokeWidth="5"
                    />
                    <circle
                      id="Ellipse 24"
                      cx="130.5"
                      cy="51.5"
                      r="8"
                      stroke="#24549B"
                      strokeWidth="5"
                    />
                    <line
                      id="Line 34"
                      x1="133.561"
                      y1="118.294"
                      x2="76.5614"
                      y2="152.294"
                      stroke="url(#paint2_linear_171_98)"
                      strokeWidth="10"
                    />
                    <line
                      id="Line 35"
                      x1="131"
                      y1="123"
                      x2="131"
                      y2="58"
                      stroke="url(#paint3_linear_171_98)"
                      strokeWidth="10"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_171_98"
                      x1="22"
                      y1="48"
                      x2="55.5"
                      y2="30"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0CC5CB" />
                      <stop offset="1" stopColor="#24549B" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_171_98"
                      x1="5"
                      y1="61.5"
                      x2="5"
                      y2="88.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0CC5CB" />
                      <stop offset="1" stopColor="#24549B" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_171_98"
                      x1="116"
                      y1="123"
                      x2="91"
                      y2="139"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0CC5CB" />
                      <stop offset="1" stopColor="#24549B" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_171_98"
                      x1="136"
                      y1="102.5"
                      x2="136"
                      y2="77.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0CC5CB" />
                      <stop offset="1" stopColor="#24549B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </li>
            <li>
              <div className="navLink">
                <Link
                  to="/get-in-touch"
                  className={
                    "navLinkItem" +
                    (location.pathname === "/get-in-touch"
                      ? " text-lightBlue"
                      : "")
                  }
                >
                  Get in Touch
                </Link>
                <svg
                  className="loadHex"
                  width="141"
                  height="167"
                  viewBox="0 0 141 167"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="HoverButtonHexagon">
                    <line
                      id="Line 32"
                      x1="7.43861"
                      y1="47.7059"
                      x2="64.4386"
                      y2="13.7059"
                      stroke="url(#paint0_linear_171_98)"
                      strokeWidth="10"
                    />
                    <line
                      id="Line 33"
                      x1="10"
                      y1="43"
                      x2="10"
                      y2="108"
                      stroke="url(#paint1_linear_171_98)"
                      strokeWidth="10"
                    />
                    <circle
                      id="Ellipse 19"
                      cx="71.5"
                      cy="10.5"
                      r="8"
                      stroke="#24549B"
                      strokeWidth="5"
                    />
                    <circle
                      id="Ellipse 22"
                      cx="10.5"
                      cy="115.5"
                      r="8"
                      stroke="#24549B"
                      strokeWidth="5"
                    />
                    <circle
                      id="Ellipse 23"
                      cx="68.5"
                      cy="156.5"
                      r="8"
                      stroke="#24549B"
                      strokeWidth="5"
                    />
                    <circle
                      id="Ellipse 24"
                      cx="130.5"
                      cy="51.5"
                      r="8"
                      stroke="#24549B"
                      strokeWidth="5"
                    />
                    <line
                      id="Line 34"
                      x1="133.561"
                      y1="118.294"
                      x2="76.5614"
                      y2="152.294"
                      stroke="url(#paint2_linear_171_98)"
                      strokeWidth="10"
                    />
                    <line
                      id="Line 35"
                      x1="131"
                      y1="123"
                      x2="131"
                      y2="58"
                      stroke="url(#paint3_linear_171_98)"
                      strokeWidth="10"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_171_98"
                      x1="22"
                      y1="48"
                      x2="55.5"
                      y2="30"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0CC5CB" />
                      <stop offset="1" stopColor="#24549B" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_171_98"
                      x1="5"
                      y1="61.5"
                      x2="5"
                      y2="88.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0CC5CB" />
                      <stop offset="1" stopColor="#24549B" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_171_98"
                      x1="116"
                      y1="123"
                      x2="91"
                      y2="139"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0CC5CB" />
                      <stop offset="1" stopColor="#24549B" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_171_98"
                      x1="136"
                      y1="102.5"
                      x2="136"
                      y2="77.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0CC5CB" />
                      <stop offset="1" stopColor="#24549B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </li>
          </ul>
          <div className="socials">
            <div className="socialsShape">
              <svg
                width="493"
                height="463"
                viewBox="0 0 493 463"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hexagons"
              >
                <g id="SocialsShape">
                  <g id="SocialsMain">
                    <line
                      id="Line 20"
                      x1="282.615"
                      y1="354.989"
                      x2="326.615"
                      y2="329.989"
                      stroke="url(#paint0_linear_147_78)"
                      strokeWidth="6"
                    />
                    <circle
                      id="Ellipse 13"
                      cx="383.597"
                      cy="227.097"
                      r="9"
                      stroke="#24549B"
                      strokeWidth="3"
                    />
                    <circle
                      id="Ellipse 15"
                      cx="387.597"
                      cy="452.097"
                      r="9"
                      stroke="#24549B"
                      strokeWidth="3"
                    />
                    <circle
                      id="Ellipse 14"
                      cx="274.097"
                      cy="361.597"
                      r="11.5"
                      stroke="#24549B"
                      strokeWidth="3"
                    />
                    <line
                      id="Line 18"
                      x1="332.615"
                      y1="255.989"
                      x2="376.615"
                      y2="230.989"
                      stroke="#24549B"
                      strokeWidth="6"
                    />
                    <path
                      id="Polygon 1"
                      d="M74.2791 43.3291L137.097 7.06116L199.915 43.3291V115.865L137.097 152.133L74.2791 115.865V43.3291Z"
                      stroke="#0CC5CB"
                      strokeWidth="6"
                    />
                    <line
                      id="Line 4"
                      x1="198.615"
                      y1="43.9887"
                      x2="242.615"
                      y2="18.9887"
                      stroke="url(#paint1_linear_147_78)"
                      strokeWidth="6"
                    />
                    <line
                      id="Line 11"
                      x1="324.583"
                      y1="45.0072"
                      x2="389.583"
                      y2="7.00715"
                      stroke="#0CC5CB"
                      strokeWidth="6"
                    />
                    <line
                      id="Line 9"
                      x1="283.615"
                      y1="139.989"
                      x2="327.615"
                      y2="114.989"
                      stroke="url(#paint2_linear_147_78)"
                      strokeWidth="6"
                    />
                    <line
                      id="Line 14"
                      x1="404.615"
                      y1="139.989"
                      x2="448.615"
                      y2="114.989"
                      stroke="url(#paint3_linear_147_78)"
                      strokeWidth="6"
                    />
                    <line
                      id="Line 23"
                      x1="389.615"
                      y1="367.989"
                      x2="433.615"
                      y2="342.989"
                      stroke="url(#paint4_linear_147_78)"
                      strokeWidth="6"
                    />
                    <line
                      id="Line 6"
                      x1="22.614"
                      y1="144.989"
                      x2="73.614"
                      y2="115.989"
                      stroke="url(#paint5_linear_147_78)"
                      strokeWidth="6"
                    />
                    <line
                      id="Line 5"
                      x1="72.6086"
                      y1="43.2018"
                      x2="23.6086"
                      y2="15.2018"
                      stroke="url(#paint6_linear_147_78)"
                      strokeWidth="6"
                    />
                    <line
                      id="Line 8"
                      x1="327.545"
                      y1="46.1642"
                      x2="284.545"
                      y2="20.1642"
                      stroke="url(#paint7_linear_147_78)"
                      strokeWidth="6"
                    />
                    <line
                      id="Line 13"
                      x1="367.545"
                      y1="140.164"
                      x2="324.545"
                      y2="114.164"
                      stroke="url(#paint8_linear_147_78)"
                      strokeWidth="6"
                    />
                    <line
                      id="Line 17"
                      x1="317.574"
                      y1="255.182"
                      x2="261.574"
                      y2="222.182"
                      stroke="url(#paint9_linear_147_78)"
                      strokeWidth="6"
                    />
                    <line
                      id="Line 21"
                      x1="389.547"
                      y1="369.166"
                      x2="326.547"
                      y2="331.166"
                      stroke="#0CC5CB"
                      strokeWidth="6"
                    />
                    <line
                      id="Line 12"
                      x1="429.545"
                      y1="33.1643"
                      x2="386.545"
                      y2="7.16426"
                      stroke="url(#paint10_linear_147_78)"
                      strokeWidth="6"
                    />
                    <line
                      id="Line 7"
                      x1="240.553"
                      y1="140.17"
                      x2="200.553"
                      y2="116.17"
                      stroke="url(#paint11_linear_147_78)"
                      strokeWidth="6"
                    />
                    <line
                      id="Line 24"
                      x1="486.019"
                      y1="147.026"
                      x2="450.526"
                      y2="123.675"
                      stroke="#0CC5CB"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      id="Line 25"
                      x1="490.019"
                      y1="141.026"
                      x2="454.526"
                      y2="117.675"
                      stroke="#0CC5CB"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle
                      id="Ellipse 3"
                      cx="247.597"
                      cy="16.0971"
                      r="7"
                      stroke="#24549B"
                      strokeWidth="3"
                    />
                    <circle
                      id="Ellipse 5"
                      cx="278.597"
                      cy="17.0971"
                      r="7"
                      stroke="#24549B"
                      strokeWidth="3"
                    />
                    <circle
                      id="Ellipse 6"
                      cx="278.597"
                      cy="143.097"
                      r="7"
                      stroke="#24549B"
                      strokeWidth="3"
                    />
                    <circle
                      id="Ellipse 11"
                      cx="263.597"
                      cy="167.097"
                      r="7"
                      stroke="#24549B"
                      strokeWidth="3"
                    />
                    <circle
                      id="Ellipse 7"
                      cx="434.597"
                      cy="37.0971"
                      r="7"
                      stroke="#24549B"
                      strokeWidth="3"
                    />
                    <circle
                      id="Ellipse 8"
                      cx="446.597"
                      cy="61.097"
                      r="7"
                      stroke="#24549B"
                      strokeWidth="3"
                    />
                    <circle
                      id="Ellipse 9"
                      cx="372.597"
                      cy="144.097"
                      r="7"
                      stroke="#24549B"
                      strokeWidth="3"
                    />
                    <circle
                      id="Ellipse 10"
                      cx="398.597"
                      cy="143.097"
                      r="7"
                      stroke="#24549B"
                      strokeWidth="3"
                    />
                    <circle
                      id="Ellipse 16"
                      cx="439.597"
                      cy="339.097"
                      r="7"
                      stroke="#24549B"
                      strokeWidth="3"
                    />
                    <circle
                      id="Ellipse 4"
                      cx="247.597"
                      cy="143.097"
                      r="7"
                      stroke="#24549B"
                      strokeWidth="3"
                    />
                    <circle
                      id="Ellipse 2"
                      cx="14.5969"
                      cy="148.097"
                      r="9"
                      transform="rotate(55.5772 14.5969 148.097)"
                      stroke="#24549B"
                      strokeWidth="3"
                    />
                    <circle
                      id="Ellipse 17"
                      cx="14.5969"
                      cy="11.097"
                      r="9"
                      transform="rotate(93.3582 14.5969 11.097)"
                      stroke="#24549B"
                      strokeWidth="3"
                    />
                    <circle
                      id="Ellipse 12"
                      cx="325.597"
                      cy="259.097"
                      r="9"
                      stroke="#24549B"
                      strokeWidth="3"
                    />
                    <line
                      id="Line 10"
                      x1="326.097"
                      y1="43.597"
                      x2="326.097"
                      y2="117.597"
                      stroke="#0CC5CB"
                      strokeWidth="6"
                    />
                    <line
                      id="Line 19"
                      x1="325.097"
                      y1="268.597"
                      x2="325.097"
                      y2="332.597"
                      stroke="url(#paint12_linear_147_78)"
                      strokeWidth="6"
                    />
                    <line
                      id="Line 22"
                      x1="388.097"
                      y1="366.597"
                      x2="388.097"
                      y2="442.597"
                      stroke="url(#paint13_linear_147_78)"
                      strokeWidth="6"
                    />
                    <line
                      id="Line 16"
                      x1="263.097"
                      y1="172.597"
                      x2="263.097"
                      y2="224.597"
                      stroke="url(#paint14_linear_147_78)"
                      strokeWidth="6"
                    />
                    <line
                      id="Line 15"
                      x1="447.097"
                      y1="117.597"
                      x2="447.097"
                      y2="68.5971"
                      stroke="url(#paint15_linear_147_78)"
                      strokeWidth="6"
                    />
                  </g>
                  <g id="Line1" className={isOn === 1 ? "Line1Anim" : ""}>
                    <path
                      id="Line 26"
                      d="M86.3581 52.2917L139.358 22.2917"
                      stroke="#0CC5CB"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </g>
                  <g id="Line3" className={isOn === 1 ? "Line3Anim" : ""}>
                    <path
                      id="Line 28"
                      d="M88.097 107.597L137.097 135.597"
                      stroke="#0CC5CB"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </g>
                  <g id="Line2" className={isOn === 1 ? "Line2Anim" : ""}>
                    <path
                      id="Line 27"
                      d="M184.097 108.597L184.097 52.597"
                      stroke="#0CC5CB"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </g>
                  <g id="Line4" className={isOn === 2 ? "Line4Anim" : ""}>
                    <path
                      id="Line 29"
                      d="M215.097 108.597L215.097 52.597"
                      stroke="#0CC5CB"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </g>
                  <g id="Line5" className={isOn === 2 ? "Line5Anim" : ""}>
                    <path
                      id="Line 30"
                      d="M311.097 108.597L311.097 52.597"
                      stroke="#0CC5CB"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </g>
                  <g id="Line6" className={isOn === 3 ? "Line6Anim" : ""}>
                    <path
                      id="Line 31"
                      d="M340.749 53.0931L389 24.6702"
                      stroke="#0CC5CB"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </g>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_147_78"
                    x1="323.597"
                    y1="328.097"
                    x2="296.097"
                    y2="345.597"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.218237" stopColor="#0CC5CB" />
                    <stop offset="1" stopColor="#24549B" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_147_78"
                    x1="205.597"
                    y1="46.597"
                    x2="235.097"
                    y2="28.0971"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0CC5CB" />
                    <stop offset="1" stopColor="#24549B" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_147_78"
                    x1="325.097"
                    y1="120.097"
                    x2="285.097"
                    y2="142.597"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0CC5CB" />
                    <stop offset="0.464514" stopColor="#24549B" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_147_78"
                    x1="442.097"
                    y1="121.597"
                    x2="426.097"
                    y2="130.597"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0CC5CB" />
                    <stop offset="1" stopColor="#24549B" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_147_78"
                    x1="400.097"
                    y1="366.597"
                    x2="421.597"
                    y2="355.597"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0CC5CB" />
                    <stop offset="1" stopColor="#24549B" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_147_78"
                    x1="75.0967"
                    y1="118.597"
                    x2="24.0967"
                    y2="147.597"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0CC5CB" />
                    <stop offset="0.9999" stopColor="#24549B" />
                    <stop offset="1" stopColor="#0CC5CB" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_147_78"
                    x1="32.5969"
                    y1="12.597"
                    x2="71.5969"
                    y2="34.597"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#24549B" />
                    <stop offset="1" stopColor="#0CC5CB" />
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_147_78"
                    x1="318.097"
                    y1="36.097"
                    x2="291.597"
                    y2="21.0971"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0CC5CB" />
                    <stop offset="0.6116" stopColor="#24549B" />
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear_147_78"
                    x1="330.597"
                    y1="115.597"
                    x2="350.597"
                    y2="126.097"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0CC5CB" />
                    <stop offset="1" stopColor="#24549B" />
                  </linearGradient>
                  <linearGradient
                    id="paint9_linear_147_78"
                    x1="276.097"
                    y1="227.597"
                    x2="295.097"
                    y2="239.597"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0CC5CB" />
                    <stop offset="1" stopColor="#24549B" />
                  </linearGradient>
                  <linearGradient
                    id="paint10_linear_147_78"
                    x1="391.097"
                    y1="6.09701"
                    x2="410.114"
                    y2="16.7413"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0CC5CB" />
                    <stop offset="1" stopColor="#24549B" />
                  </linearGradient>
                  <linearGradient
                    id="paint11_linear_147_78"
                    x1="205.097"
                    y1="113.597"
                    x2="235.097"
                    y2="133.097"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0CC5CB" />
                    <stop offset="1" stopColor="#24549B" />
                  </linearGradient>
                  <linearGradient
                    id="paint12_linear_147_78"
                    x1="322.097"
                    y1="327.097"
                    x2="322.097"
                    y2="296.097"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0CC5CB" />
                    <stop offset="1" stopColor="#24549B" />
                  </linearGradient>
                  <linearGradient
                    id="paint13_linear_147_78"
                    x1="388.597"
                    y1="381.097"
                    x2="390.597"
                    y2="419.097"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0CC5CB" />
                    <stop offset="0.702892" stopColor="#24549B" />
                  </linearGradient>
                  <linearGradient
                    id="paint14_linear_147_78"
                    x1="260.097"
                    y1="220.097"
                    x2="260.097"
                    y2="198.597"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0CC5CB" />
                    <stop offset="1" stopColor="#24549B" />
                  </linearGradient>
                  <linearGradient
                    id="paint15_linear_147_78"
                    x1="450.097"
                    y1="114.597"
                    x2="451.097"
                    y2="93.0971"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0CC5CB" />
                    <stop offset="1" stopColor="#24549B" />
                  </linearGradient>
                </defs>
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
              href="src/js/components/Navbar"
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
              href="src/js/components/Navbar?originalSubdomain=tn"
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
