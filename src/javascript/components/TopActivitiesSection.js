import React, { useEffect, useState } from "react";
import { ReactComponent as ActivitiesClippingPath } from "../../assets/svg/ActivitiesClippingPath.svg";
import { ReactComponent as DNAParticle } from "../../assets/svg/DNAParticle.svg";
import { ReactComponent as Hexagona } from "../../assets/svg/Hexagona.svg";
import { ReactComponent as Blo9 } from "../../assets/svg/Blo9.svg";
import { ReactComponent as DNAParticleDark } from "../../assets/svg/DNAParticleDark.svg";
import { ReactComponent as HexagonaDark } from "../../assets/svg/HexagonaDark.svg";
import { ReactComponent as Blo9Dark } from "../../assets/svg/Blo9Dark.svg";
import SoftSkills1 from "../../assets/images/activities/SoftSkills1.png";
import SoftSkills2 from "../../assets/images/activities/SoftSkills2.jpg";
import SoftSkills3 from "../../assets/images/activities/SoftSkills3.jpg";
import HardSkills1 from "../../assets/images/activities/HardSkills1.jpg";
import HardSkills2 from "../../assets/images/activities/HardSkills2.jpg";
import { ReactComponent as RegularHex } from "../../assets/svg/RegularHex.svg";
import { ReactComponent as HighlightedHex } from "../../assets/svg/HighlightedHex.svg";

const TopActivitiesSection = () => {
  const imgArray = [
    SoftSkills1,
    SoftSkills2,
    SoftSkills3,
    HardSkills1,
    HardSkills2,
  ];
  /*const getRandom5Activities = () => {
        for (let i = 0; i < 5; i++) {
          let randInt = Math.floor(Math.random() * 3) + 1;
          let randImg = Math.floor(Math.random() * 2) + 1;
          for (let img in imgArray) {
          }
        }
      };*/
  const [index, setIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(imgArray[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index + 1 === imgArray.length ? 0 : index + 1);
      setCurrentImage(imgArray[index]);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  const rows = [];
  for (let i = 0; i < 5; i++) {
    if (i === index) {
      rows.push(<HighlightedHex key={i} className="height-5 line-height-5" />);
    } else {
      rows.push(<RegularHex key={i} className="height-5 line-height-5" />);
    }
  }

  return (
    <div className="topSection">
      <div className="centerContent">
        <div className="row absolute z-2 width-10-pc height-fit margin-top-6-5">
          {rows}
        </div>
      </div>
      <img className="activitiesClip" src={currentImage} alt="activity" />
      <svg className="clippingPathSvg">
        <clipPath id="ActivitiesClippingPath" clipPathUnits="objectBoundingBox">
          <path d="M0.492,0.967 L0.418,0.99 C0.329,1,0.236,0.988,0.159,0.908 C0.133,0.881,0.105,0.859,0.077,0.841 L0,0.794 V0 H1 V0.716 L0.943,0.792 C0.893,0.858,0.834,0.9,0.771,0.914 L0.693,0.931 L0.492,0.967" />
        </clipPath>
      </svg>

      <ActivitiesClippingPath className="GIFClippingPathShape" />

      <DNAParticle className="floatingDNA" />
      <DNAParticleDark className="floatingDNABis" />
      <Blo9Dark className="floatingBlo9" />
      <Blo9 className="floatingBlo9Bis" />
      <Hexagona className="floatingHexagona" />
      <HexagonaDark className="floatingHexagonaBis" />
    </div>
  );
};

export default TopActivitiesSection;
