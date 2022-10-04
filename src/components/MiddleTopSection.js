import React, { useEffect, useState } from "react";
import StaffElement from "./StaffElement";
import rubyCrown from "../images/crowns.png";
import basicCrown from "../images/crown.png";
import moneyBag from "../images/money-bag.png";
import glasses from "../images/glasses.png";
import bookAndQuill from "../images/writing.png";
import TextSlider from "./TextSlider";

const MiddleTopSection = () => {
  /*const [staffOn, setStaff] = useState(false);*/
  const [rubyCrownHover, setRubyCrownHover] = useState(false);
  const [basicCrownHover, setBasicCrownHover] = useState(false);
  const [moneyBagHover, setMoneyBagHover] = useState(false);
  const [glassesHover, setGlassesHover] = useState(false);
  const [bookAndQuillHover, setBookAndQuillHover] = useState(false);

  /*const BringStaffOn = () => {
    if (window.scrollY >= 300) {
      setStaff(true);
    }
  };

  useEffect(() => {
    BringStaffOn();
    window.addEventListener("scroll", BringStaffOn);
  });*/

  return (
    <>
      <img
        src={require("../images/MiddleTopSectionBg.png")}
        className="bgMiddleTopSection"
        alt="background"
      />
      <div className="middleTopSection">
        <h1
          className={
            "staffHeadlineShadow" + (true ? "On" : "Off") + " absolute"
          }
        >
          M<span style={{ color: "#0CC5CB" }}>ieee</span>t the Team
        </h1>
        <h1 className={"staffHeadline" + (true ? "On" : "Off")}>
          M<span style={{ color: "#0CC5CB" }}>ieee</span>t the Team
        </h1>
        <div className="staffGrid">
          <div className="rowThirds">
            <div
              onMouseEnter={() => setRubyCrownHover(true)}
              onMouseLeave={() => setRubyCrownHover(false)}
              className="fit-content"
            >
              <StaffElement
                staffName="Ahlem Marzougi"
                staffPosition="Chair"
                emoji={rubyCrown}
                emojiPosition={
                  rubyCrownHover ? "crownPositionHover" : "crownPosition"
                }
              />
            </div>
            <div
              onMouseEnter={() => setBasicCrownHover(true)}
              onMouseLeave={() => setBasicCrownHover(false)}
              className="fit-content"
            >
              <StaffElement
                staffName="Ahmed Chtourou"
                staffPosition="Vice Chair"
                emoji={basicCrown}
                emojiPosition={
                  basicCrownHover ? "crownPositionHover" : "crownPosition"
                }
              />
            </div>
            <div
              onMouseEnter={() => setMoneyBagHover(true)}
              onMouseLeave={() => setMoneyBagHover(false)}
              className="fit-content"
            >
              <StaffElement
                staffName="Oumayma Trifii"
                staffPosition="Treasurer"
                emoji={moneyBag}
                emojiPosition={
                  moneyBagHover ? "moneyBagPositionHover" : "moneyBagPosition"
                }
              />
            </div>
          </div>
          <div className="rowHalves">
            <div
              onMouseEnter={() => setGlassesHover(true)}
              onMouseLeave={() => setGlassesHover(false)}
              className="fit-content"
            >
              <StaffElement
                staffName="Mohamed Rayen Samet"
                staffPosition="Webmaster"
                emoji={glasses}
                emojiPosition={
                  glassesHover ? "glassesPositionHover" : "glassesPosition"
                }
              />
            </div>
            <div
              onMouseEnter={() => setBookAndQuillHover(true)}
              onMouseLeave={() => setBookAndQuillHover(false)}
              className="fit-content"
            >
              <StaffElement
                staffName="Mohamed Turki"
                staffPosition="Secretary"
                emoji={bookAndQuill}
                emojiPosition={
                  bookAndQuillHover
                    ? "bookAndQuillPositionHover"
                    : "bookAndQuillPosition"
                }
              />
            </div>
          </div>
        </div>
        <TextSlider
          texts={[
            '"Ahlem\'s quote in italic"\n -Ahlem Marzougi-',
            `"Ahmed's quote in italic"\n -Ahmed Chtourou-`,
            `"Oumayma's quote in italic"\n -Oumayma Trifii-`,
            `"Rayen's quote in italic"\n -Mohamed Rayen Samet-`,
            `"Mohamed's quote in italic"\n -Mohamed Turki-`,
          ]}
        />
      </div>
    </>
  );
};

export default MiddleTopSection;
