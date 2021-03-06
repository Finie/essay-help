import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { IoLogoWhatsapp } from "react-icons/io";

import "./Howitworks.css";
import HowItem from "../../../components/howitworkscomp/howitem";
import { howLeftData } from "../../../../assets/data/howleft";
import { howRightData } from "../../../../assets/data/howRight";
import Iconcomp from "../../../components/icons/iconcomp";
import Button from "../../../components/whatsapp/whatsappbutton";

function Howitworks() {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <div className="howitworks-container">
      <div className="header">
        <h1>
          How Legal<span style={{ color: " #F4D140" }}>essay</span>writers works
        </h1>
        <Iconcomp iconName={"RiFileInfoLine"} />
        <div className="content-container">
          <div className="container-left">
            {howLeftData.data.map((item) => (
              <HowItem data={item} />
            ))}

            <div className="whatsapp-button">
              <Button url={"https://wa.me/254715438186"}>
                <span>
                  {" "}
                  <IoLogoWhatsapp
                    style={{ marginBottom: -3, marginRight: 4 }}
                  />
                  WhatsApp us by clicking here
                </span>
              </Button>
            </div>
          </div>
          <div className="container-right">
            {howRightData.data.map((item) => {
              if (item.icon === "") {
                return <HowItem data={item} />;
              } else {
                return (
                  <div className="contains-icon">
                    <div data-aos="fade-up" className="icon_">
                      <Iconcomp iconName={item.icon} />
                    </div>
                    <div className="info_">
                      <HowItem data={item} />
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howitworks;
