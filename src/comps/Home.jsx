import React, { useState } from "react";
import HomeNav from "./homeComps/HomeNav";
import HomeHero from "./homeComps/HomeHero";
import Features from "./homeComps/Features";
import Pricing from "./homeComps/Pricing";
import "../css/home.css";
import gsap from "gsap";
import { useRef } from "react";

const Home = () => {
  const caroRef = useRef();
  const [currentStep, setCurrentStep] = useState(0);
  const [currentValue, setCurrentvalue] = useState(0);
  const scroll = (step) => {
    gsap.to(caroRef.current, {
      x: `-${step}vw`,
      duration: 1.5,
      ease: "elastic.out(1,0.8)",
    });
    setCurrentvalue(step);
  };

  // console.log(currentStep, currentValue);
  return (
    <div className="home bg">
      <HomeNav />
      <div className="carousel">
        <div ref={caroRef} className="inner">
          <div className="item">
            <HomeHero />
          </div>
          <div className="item">
            <Features />
          </div>
          <div className="item">
            <Pricing />
          </div>
        </div>
      </div>
      <div className="selectors">
        <div
          onClick={() => scroll(0)}
          className={currentValue === 0 ? "selector active" : "selector"}
        ></div>
        <div
          onClick={() => scroll(100)}
          className={currentValue === 100 ? "selector active" : "selector"}
        ></div>
        <div
          onClick={() => scroll(200)}
          className={currentValue === 200 ? "selector active" : "selector"}
        ></div>
      </div>
    </div>
  );
};

export default Home;
