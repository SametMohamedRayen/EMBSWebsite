import React from "react";
import { ReactComponent as NavbarShape } from "./SVG/NavbarShape.svg";
import { ReactComponent as SocialMediaShape } from "./SVG/SocialsShape.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarShape className="shape" />
      <div className="nav">
        <a href="">
          <img
            className="logo"
            src={require("./images/Logo EMBS.png")}
            alt="Logo"
          />
        </a>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Activities</a>
          </li>
          <li>
            <a href="">Get in Touch</a>
          </li>
        </ul>
        {/*<ul>
          <li>
            <a id="fbMol" href="https://www.facebook.com/EMBS.ENETCOM">
              F
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ieee_embs_enetcom_sbc/">I</a>
          </li>
          <li>
            <a href="https://www.instagram.com/ieee_embs_enetcom_sbc/">L</a>
          </li>
        </ul>*/}
      </div>
    </nav>
  );
};

export default Navbar;
