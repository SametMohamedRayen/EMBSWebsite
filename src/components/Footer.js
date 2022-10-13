import React from "react";
import { ReactComponent as FooterBg } from "./../SVG/Footer.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab);

const Footer = () => {
  return (
    <div className="footer">
      <FooterBg className="footerBg" />
      <div className="footerGrid">
        <div className="column">
          <img
            src={require("./../images/Logos.png")}
            alt="logos"
            className="footerLogos"
          />
          <div className="centerText hashtags">
            <p className="font-indigo-regular letter-space-25 font-size-175 font-color-white">
              #Teams_Build_Dream
            </p>
            <p className="font-indigo-regular letter-space-25 font-size-175 font-color-white">
              #IEEE_ENET'COM
            </p>
          </div>
          <span className="pause"></span>
          <p className="centerText font-color-white font-albori font-size-140">
            &copy; IEEE EMBS ENET'COM Student Branch Chapter 2022
          </p>
        </div>
        <div className="columnRight">
          <h2 className="contactsHeader font-color-blue font-josefin-sans font-size-2">
            Our Contacts
          </h2>
          <span className="centerText">
            <FontAwesomeIcon
              icon={["fas", "location-dot"]}
              className="contactsIcon"
            />
            <text className="font-lato font-color-white font-w-500 font-size-125 align-middle">
              Route de Tunis, Cité El Ons, Technopole de Sfax – 3018 Sfax
            </text>
          </span>
          <span className="centerText">
            <FontAwesomeIcon icon={["fas", "phone"]} className="contactsIcon" />
            <text className="font-lato font-color-white font-w-500 font-size-125 align-middle">
              (+216) 55 074 545
            </text>
          </span>
          <span className="centerText">
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="contactsIcon"
            />
            <text className="font-lato font-color-white font-w-500 font-size-125 align-middle">
              ieeeembsenetcom@gmail.com
            </text>
          </span>
          <div className="socialsRow">
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              className="socialsFooter"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={["fab", "square-instagram"]}
              className="socialsFooter"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="socialsFooter"
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
