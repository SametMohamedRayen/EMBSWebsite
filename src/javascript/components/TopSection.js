import React, { useEffect, useState } from "react";
import { ReactComponent as Section1 } from "../../assets/svg/Section1.svg";
import { ReactComponent as GIFClippingPathShape } from "../../assets/svg/GIFClippingPathShape.svg";
import { ReactComponent as DNAParticle } from "../../assets/svg/DNAParticle.svg";
import { ReactComponent as Hexagona } from "../../assets/svg/Hexagona.svg";
import { ReactComponent as Blo9 } from "../../assets/svg/Blo9.svg";
import { ReactComponent as DNAParticleDark } from "../../assets/svg/DNAParticleDark.svg";
import { ReactComponent as HexagonaDark } from "../../assets/svg/HexagonaDark.svg";
import { ReactComponent as Blo9Dark } from "../../assets/svg/Blo9Dark.svg";

const TopSection = () => {
  const text1 =
    "Welcome to our laboratory !\n" +
    "If you are interested in technologies applied in biology and medicine\n" +
    "fields then this is the place for you !\n" +
    "Take a look around and discover the mysteries in our lab.";
  const text2 =
    "Here we create experiences to brew elixirs that heal the world.\n" +
    "We do our best to create technologies that help save people.\n" +
    "Come on in and let's help save millions of lives together.";

  const [dynamic_text1, setDynamicText1] = useState("");
  const textState = ["istyping1", "istyping2", "isdeleting1", "isdeleting2"];
  const [typing, setTyping] = useState(textState[0]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing === "istyping1" && dynamic_text1 !== text1) {
        setDynamicText1(text1.slice(0, dynamic_text1.length + 1));
      } else if (typing === "istyping2" && dynamic_text1 !== text2) {
        setDynamicText1(text2.slice(0, dynamic_text1.length + 1));
      } else if (dynamic_text1 === text1 && typing === "istyping1") {
        sleep(2000).then(() => {
          setTyping(textState[2]);
        });
      } else if (dynamic_text1 === text2 && typing === "istyping2") {
        sleep(2000).then(() => {
          setTyping(textState[3]);
        });
      } else if (typing === "isdeleting1") {
        setDynamicText1(text1.slice(0, dynamic_text1.length - 1));
        if (dynamic_text1.length <= 1) {
          setTyping(textState[1]);
        }
      } else if (typing === "isdeleting2") {
        setDynamicText1(text2.slice(0, dynamic_text1.length - 1));
        if (dynamic_text1.length <= 1) {
          setTyping(textState[0]);
        }
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [dynamic_text1, typing]);

  return (
    <div className="topSection">
      <Section1 className="section1" />

      <video
        autoPlay="autoplay"
        preload="auto"
        className="section1gif"
        controls
        muted
        loop
      >
        <source
          src={require("../../assets/videos/Section1Video.mp4")}
          type="video/mp4"
        />
      </video>
      <svg className="clippingPathSvg">
        <clipPath id="GIFClippingPath" clipPathUnits="objectBoundingBox">
          <path d="M0.431,0.945 L0.394,0.972 C0.324,1,0.243,1,0.185,0.915 C0.141,0.85,0.085,0.813,0.027,0.813 H0 V0 H1 V0.733 L0.98,0.761 C0.908,0.858,0.816,0.901,0.725,0.877 C0.693,0.869,0.66,0.869,0.628,0.877 L0.518,0.903 C0.488,0.91,0.459,0.924,0.431,0.945"></path>
        </clipPath>
      </svg>

      <GIFClippingPathShape className="GIFClippingPathShape" />

      <div className="intro">
        <div className="titleContainer">
          {/*<h1 className="titleShadow">
            EMBS IEEE ENET'COM<br></br>2022
          </h1>*/}
          <h1 className="title">
            EMBS IEEE ENET'COM<br></br>2022
          </h1>
        </div>
        <p className="blinking-cursor">{dynamic_text1}</p>
      </div>
      <DNAParticle className="floatingDNA" />
      <DNAParticleDark className="floatingDNABis" />
      <Blo9Dark className="floatingBlo9" />
      <Blo9 className="floatingBlo9Bis" />
      <Hexagona className="floatingHexagona" />
      <HexagonaDark className="floatingHexagonaBis" />
    </div>
  );
};

export default TopSection;
