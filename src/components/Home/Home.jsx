import { Button } from "@nextui-org/react";
import React from "react";
import Directory from "../Directory/Directory";
import "./Home.css";
import Sliderbox from "../Slider/Sliderbox";
import Testimonials from "../Testimonials/Testimonials";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
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

      <section>
        <br />
        <Sliderbox />
        <Directory />
        <br />
        <Sliderbox />
        <br />
        <Testimonials />
        <br />
        <ContactUs />
        <br />
        <Footer/>
      </section>
    </div>
  );
}

export default Home;
