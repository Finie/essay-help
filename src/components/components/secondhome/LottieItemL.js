import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "react-lottie";

import "./lotieiteml.css";

const LottieItemL = ({ animationData,title,body }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <div  className="lottie-holder">


        <div className="lottie">

      <Lottie options={defaultOptions} height={300} width={300} />
        </div>

      <div  className="lotie-description">
        <header>{title}</header>
        <section>{body}</section>
      </div>
    </div>
  );
};

export default LottieItemL;
