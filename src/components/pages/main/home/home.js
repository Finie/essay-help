import React from "react";

import "./home.css";
import HomeFirst from "../../../components/firstcomponent/componentone";
import SecondItem from "../../../components/secondhome/secondhomecomponent";
import ThirdItem from "../../../components/thirdcomponent/thirdcomponent";
import FourthItem from "../../../components/fouthcomponent/fouthcompnent";
import Services from "../../../components/onlineinfo/serviceinfo";
import { featuretData } from "../../../../assets/data/featuredata";
import Service from "../../../components/service/Service";

function Home() {
  return (
    <div className="home-container">
      <HomeFirst />

      <FourthItem>
        <Services />
      </FourthItem>

      <ThirdItem>
        <div className="our-feature-third">
          <h1>OUR FEATURES</h1>
        </div>

        <div className="feature-item-holder">
          <Service data={featuretData.data} />
        </div>
      </ThirdItem>

      <SecondItem />
    </div>
  );
}

export default Home;
