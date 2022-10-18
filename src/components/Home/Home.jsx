import { Button } from "@nextui-org/react";
import React from "react";
import CollapsItem from "../CollapsItem/ColllapsItem";
import Directory from "../Directory/Directory";
import "./Home.css";
import FuckYou from "../../assets/bead-2.jpg";
import SliderSm from "../SliderSm/SliderSm";
function Home() {
  return (
    <div>
      <section id="hero">
        <div className="hero container">
          <div className="hero__text">
            <h1 className="hero__head">
              let us design your<span>bead</span>
            </h1>
            <p className="hero__para">we design to your test</p>
            <p className="hero__latest">check our latest design </p>
            <Button
              color="warning"
              justify="center"
              align="center"
              className="home__btn__flex"
            >
              Here
            </Button>
          </div>
          <div className="particles"></div>
          {/* <div className="waves"></div> */}
        </div>
      </section>
      <SliderSm />
      <section>
        <Directory />
        <br />
        <section>
          <div className="splited__hero">
            <div className="splited_1">
              <img src={FuckYou} alt="" />
              <img src={FuckYou} alt="" />
            </div>
            <div className="splited_2">
              <CollapsItem />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Home;
