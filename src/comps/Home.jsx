import React from "react";
import HomeNav from "./homeComps/HomeNav";
import HomeHero from "./homeComps/HomeHero";
import Features from "./homeComps/Features";
import Pricing from "./homeComps/Pricing";
import "../css/home.css";

const Home = () => {
  return (
    <div className="home bg">
      <HomeNav />
      <div className="carousel">
        <div className="inner">
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
      <div className="controls">
        <button>
          <h6>Back</h6>
        </button>
        <button>
          <h6>Forward</h6>
        </button>
      </div>
    </div>
  );
};

export default Home;
