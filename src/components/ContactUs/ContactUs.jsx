import React from "react";
import "aos/dist/aos.css";

import "./ContactUs.css";

import { Fragment } from "react";

import {
  Button,
  Grid,
  Input,

  Textarea,
} from "@nextui-org/react";
import Socials from "../Socials/Socials";

function ContactUs() {

  return (
    <Fragment>
      <div className="container__contact">
        <Grid.Container gap={1} justify="center" css={{ bg: "$white" }}>
          <div className="contact__content">
            <Grid md={8} data-aos="fade-up">
              <div className="Contact__info">
                <h2>Contact Information</h2>
                <p>
                  Fill up the form and our team will get back to you within 24
                  hours
                </p>
                <div className="contact__text">
                  <br />
                  <br />
                  <br />
                  <span>
                    <i className="fa-solid fa-phone contact__text__icon"></i>
                    +234 8163537324
                  </span>

                  <span>
                    <i className="fa-solid fa-message contact__text__icon"></i>
                    elijahisaiah44@gmail.com
                  </span>

                  <span className="">
                    <i className="fa-solid fa-location-dot contact__text__icon "></i>
                    10 Bella Shmurda Street
                  </span>
                </div>
                <Socials />
              </div>
            </Grid>
            <Grid
              ms={12}
              css={{ position: "relative", zIndex: "0" }}
              data-aos="slide-up"
            >
              <div className="contact__msg">
                <br />
                <br />
                <br />
                <Input
                  underlined
                  color="warning"
                  type="text"
                  labelPlaceholder="First Name"
                  width="100%"
                />
                <br />
                <br />
                <br />
                <Input
                  underlined
                  color="warning"
                  type="text"
                  labelPlaceholder="Last Name"
                  width="100%"
                />
                <br />
                <br />
                <br />
                <Input
                  underlined
                  color="warning"
                  type="email"
                  labelPlaceholder="@email"
                  width="100%"
                />
                <br />
                <br />
                <br />
                <Input
                  underlined
                  type="tel"
                  color="warning"
                  labelPlaceholder="Phone"
                  width="100%"
                />
                <br />
                <br />
                <br />
                <Textarea
                  bordered
                  color="warning"
                  labelPlaceholder="Write Your Message Here"
                  width="100%"
                />
                <br />
                <br />
                <br />
                <div className="contact__btn">
                  <Button type="submit" css={{ bg: "#D9580D", ai: "center" }}>
                    Submit
                  </Button>
                </div>
              </div>
            </Grid>
          </div>
        </Grid.Container>
      </div>
    </Fragment>
  );
}

export default ContactUs;
