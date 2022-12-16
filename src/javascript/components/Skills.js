import React from "react";
import ActivityCard from "./ActivityCard";
import { ReactComponent as Divider } from "./../../assets/svg/Divider.svg";
import { ReactComponent as End } from "./../../assets/svg/End.svg";

const Skills = (props) => {
  const { images, activities } = props;

  const last_index = activities.length - 1;
  return (
    <div className="column height-fit width-80-pc margin-horiz-10">
      <div className="row height-fit">
        <Divider className="margin-top-4" />
        <ActivityCard
          images={images}
          image={activities[last_index].image}
          i="0"
          title={activities[last_index].title}
          date={activities[last_index].date}
          description={activities[last_index].description}
        />
        <Divider className="margin-top-4" />
        <ActivityCard
          images={images}
          i="1"
          title={activities[last_index - 1].title}
          date={activities[last_index - 1].date}
          description={activities[last_index - 1].description}
        />
        <Divider className="margin-top-4" />
      </div>
      <div className="row height-fit margin-top-neg-7-5">
        <End className="mirror margin-top-1-5" />
        <ActivityCard
          images={images}
          i="2"
          title={activities[last_index - 2].title}
          date={activities[last_index - 2].date}
          description={activities[last_index - 2].description}
        />
        <End className="margin-top-1-5" />
      </div>
      <div className="row height-fit margin-top-neg-8">
        <Divider className="margin-top-4" />
        <ActivityCard
          images={images}
          i="3"
          title={activities[last_index - 3].title}
          date={activities[last_index - 3].date}
          description={activities[last_index - 3].description}
        />
        <Divider className="margin-top-4" />
        <ActivityCard
          images={images}
          i="4"
          title={activities[last_index - 4].title}
          date={activities[last_index - 4].date}
          description={activities[last_index - 4].description}
        />
        <Divider className="margin-top-4" />
      </div>
    </div>
  );
};

export default Skills;
