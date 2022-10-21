import React from "react";
import "./ContactUs.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Grid,
  Input,
  Row,
  Text,
  Textarea,
  User,
} from "@nextui-org/react";

function ContactUs() {
  return (
    <Fragment>
      <div className="container__contact">
        <div className="contact__content">
          <Grid.Container gap={2} justify="center" css={{ bg: "$white" }}>
            <Grid xs={3}>
              <div className="Contact__info">
                <h2>Contact Information</h2>
                <p>
                  Fill up the form and our team will get back to you within 24
                  hours
                </p>
                <div className="contact__text">
                  <br />
                  <br />
                  <span>
                    <i className="fa-solid fa-phone"></i>
                    +234 8163537324
                  </span>
                  <br />
                  <br />
                  <span>
                    <i className="fa-solid fa-message"></i>
                    elijahisaiah44@gmail.com
                  </span>
                  <br />
                  <br />
                  <span>
                    <i className="fa-solid fa-location-dot"></i>
                    10 Bella Shmurda Street
                  </span>
                </div>
                <div className="social__icons__contact">
                  <Link
                    className="facebook"
                    target="_blank"
                    to="\www.facebook.com"
                  >
                    <BsFacebook />
                  </Link>
                  <Link
                    className="instagram"
                    target="_blank"
                    to="\www.facebook.com"
                  >
                    <BsInstagram />
                  </Link>
                  <Link
                    className="whatsapp"
                    target="_blank"
                    to="\wa.me/message/5ZGJK5PBFOMRH1"
                  >
                    <BsWhatsapp />
                  </Link>
                  <Link
                    className="tiktok"
                    target="_blank"
                    to="\tiktok.com/@rimesbeat"
                  >
                    <SiTiktok />
                  </Link>
                </div>
              </div>
            </Grid>
            <Grid xs={6}>
              <div className="contact__msg">
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

                <Button type="submit" css={{ bg: "#D9580D", ai: "center" }}>
                  Submit
                </Button>
              </div>
            </Grid>
          </Grid.Container>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default ContactUs;
