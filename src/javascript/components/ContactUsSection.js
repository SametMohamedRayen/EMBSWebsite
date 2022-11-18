import React, { useState } from "react";
import Input from "./Input";
import Checkbox from "./Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const ContactUsSection = () => {
  const [email, setEmail] = useState(true);
  const [phone, setPhone] = useState(false);
  const getEmail = (value) => {
    setEmail(value);
  };
  const getPhone = (value) => {
    setPhone(value);
  };
  return (
    <form className={email || phone ? "margin-btm-8" : "margin-btm-15"}>
      <div className="relative height-50 margin-btm-15 centerContent">
        <div className="absolute margin-top-15 width-90-pc centerContent row margin-btm-25">
          <div
            className={
              "column centerContent centerText height-35 width-20-pc margin-left-7 transition-duration-500 " +
              (email || phone ? "margin-top-5" : "margin-top-1")
            }
          >
            <div>
              <p className="margin-0 font-size-175 font-josefin-sans font-color-darkBlue">
                You are sending an email to :
              </p>
              <p className="margin-0 font-lato font-color-gray">
                ieeeembsenetcom@gmail.com
              </p>
            </div>
            <div>
              <p className="margin-0 font-size-175 margin-0 font-size-175 font-josefin-sans font-color-darkBlue">
                Based in :
              </p>
              <p className="margin-0 font-lato font-color-gray">
                Route de Tunis, Cité El Ons, Technopole de Sfax – 3018 Sfax
              </p>
            </div>
            <br></br>
            <div className="row margin-horiz-2">
              <Checkbox
                getValue={getEmail}
                icon="fa-solid fa-envelope"
                size="width-5 height-5 line-height-5 font-size-180"
                init
              />
              <Checkbox
                getValue={getPhone}
                icon="fa-solid fa-phone"
                size="width-5 height-5 line-height-5 font-size-180"
              />
            </div>
            <div className="commentsOnContactUs">
              {!(email && phone) ? (
                !email && !phone ? (
                  <p className="">
                    We will only receive your message!
                    <br></br>A moment to just share your thoughts.
                  </p>
                ) : (
                  <p>
                    We will get back to you by {email ? "e-mail" : "phone"}!
                  </p>
                )
              ) : (
                <p>We will get back to you by e-mail and phone!</p>
              )}
            </div>
          </div>
          <div className="relative width-60-pc column margin-left-neg-10">
            <h1 className="row margin-0 padding-0 font-josefin-sans font-color-blue margin-left-neg-3 font-size-4">
              Contact Us
            </h1>
            <div className="row personalInfoRow">
              <div className="column">
                <Input
                  type="text"
                  placeholder="Your Name"
                  height="height-4-5"
                  width="width-22-5"
                />
              </div>
              <div className="column">
                <Input
                  type="text"
                  placeholder="Your Last Name"
                  height="height-4-5"
                  width="width-22-5"
                />
              </div>
            </div>
            <div className="row personalInfoRow">
              {!(email && phone) ? (
                !email && !phone ? (
                  <></>
                ) : (
                  <Input
                    type={phone ? "number" : "email"}
                    placeholder={phone ? "Your Phone" : "Your Email"}
                    height="height-4-5"
                    width="width-48-44"
                    margin="margin-top-neg-6"
                  />
                )
              ) : (
                <>
                  <div className="column">
                    <Input
                      type="email"
                      placeholder="Your Email"
                      height="height-4-5"
                      width="width-22-5"
                      margin="margin-top-neg-6"
                    />
                  </div>
                  <div className="column">
                    <Input
                      type="number"
                      placeholder="Your Phone Number"
                      height="height-4-5"
                      width="width-22-5"
                      margin="margin-top-neg-6"
                    />
                  </div>
                </>
              )}
            </div>
            <div className="row">
              <Input
                type="text"
                placeholder="Subject"
                height="height-4-5"
                width="width-48-44"
                margin="margin-top-neg-6"
              />
            </div>
            <div className="row">
              <Input
                type="text-area"
                placeholder="Your Message"
                height="6"
                width="width-48-44"
                margin="margin-top-neg-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "row width-30-pc margin-left-55-5 " +
          (email || phone
            ? "margin-top-neg-3"
            : "margin-top-neg-10 transition-duration-500")
        }
      >
        <div>
          <button type="reset" className="roundButtonReset">
            <div className="absolute roundButtonResetOverlay"></div>
            <FontAwesomeIcon icon="fa-solid fa-arrow-rotate-right" />
          </button>
        </div>
        <div className="fit-content">
          <button
            type="submit"
            className="roundButtonSend"
            onClick={() => {
              console.log("Sent");
            }}
          >
            <div className="absolute roundButtonSendOverlay"></div>
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactUsSection;
