import React from "react";
import ActivityCard from "./ActivityCard";
import { ReactComponent as Divider } from "./../../assets/svg/Divider.svg";
import { ReactComponent as End } from "./../../assets/svg/End.svg";

const Skills = (props) => {
  const { type, images } = props;
  return (
    <div className="column height-fit width-80-pc margin-horiz-10">
      <div className="row height-fit">
        <Divider className="margin-top-4" />
        <ActivityCard
          images={images}
          i="0"
          title="Activity1"
          date="11/21/2022"
          description="This is activity 1 hosted by EMBS"
        />
        <Divider className="margin-top-4" />
        <ActivityCard
          images={images}
          i="1"
          title="Activity2"
          date="11/21/2022"
          description="This is activity 2 hosted by EMBS"
        />
        <Divider className="margin-top-4" />
      </div>
      <div className="row height-fit margin-top-neg-7-5">
        <End className="mirror margin-top-1-5" />
        <ActivityCard
          images={images}
          i="2"
          title="Activity3"
          date="11/21/2022"
          description="This is activity 3 hosted by EMBS"
        />
        <End className="margin-top-1-5" />
      </div>
      <div className="row height-fit margin-top-neg-8">
        <Divider className="margin-top-4" />
        <ActivityCard
          images={images}
          i="3"
          title="Activity4"
          date="11/21/2022"
          description="This is activity 4 hosted by EMBS"
        />
        <Divider className="margin-top-4" />
        <ActivityCard
          images={images}
          i="4"
          title="Activity5"
          date="11/21/2022"
          description="This is activity 5 hosted by EMBS"
        />
        <Divider className="margin-top-4" />
      </div>
    </div>
  );
};

export default Skills;
