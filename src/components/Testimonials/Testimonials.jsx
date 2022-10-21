import { Card, Text, User } from "@nextui-org/react";
import Slider from "react-slick";

import AOS from "aos";
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Testimonials.css";

function Testimonials() {
  const settings = {
    // className: "",
    vertical: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    initialSlide: 0,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    // className: "center",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  return (
    <div
      className="testimonial"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
      data-aos-once="false"
    >
      <h2>Testimonials</h2>
      <div className="testimonial__grid">
        <div
          className="testimonial__text"
          data-aos="slide-right"
          data-aos-delay="50"
        >
          <h2>What People Say About Us</h2>
        </div>
        <div
          className="testimonial__center "
          data-aos="slide-up"
          data-aos-delay="50"
        >
          <Slider {...settings}>
            <Card css={{ p: "$2", mw: "100%", bg: "$pink900" }}>
              <Card.Header>
                <User
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWUK7wcgzeCENqRhHb-KG8qf-nh16XlQHi2g&usqp=CAU"
                  name="Juliana Rimes"
                  description="UI/UX Designer @Github"
                  size="xl"
                />
              </Card.Header>
              <Card.Body css={{ py: "$2" }}>
                <Text css={{ color: "$white" }}>
                  Make beautiful websites regardless of your design experience.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  voluptatum porro provident reiciendis debitis.
                </Text>
              </Card.Body>
            </Card>
            <Card css={{ p: "$2", mw: "100%", bg: "$success" }}>
              <Card.Header>
                <User
                  css={{ color: "$white" }}
                  src="https://i.pinimg.com/736x/b6/79/5e/b6795ecb7c933cdad10ceda3e10131e4.jpg"
                  name="Rejoice Rimesking"
                  description="UI/UX Designer @Github"
                  size="xl"
                />
              </Card.Header>
              <Card.Body css={{ py: "$2" }}>
                <Text>
                  Make beautiful websites regardless of your design experience.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  voluptatum porro provident reiciendis debitis.
                </Text>
              </Card.Body>
            </Card>
            <Card css={{ p: "$2", mw: "100%", bg: "#F28C0F" }}>
              <Card.Header>
                <User
                  src="https://img.freepik.com/free-photo/portrait-beautiful-black-woman-using-white-towel-her-face_23-2149095680.jpg?w=2000"
                  name="Lovet Francisca"
                  description="UI/UX Designer @Github"
                  size="xl"
                />
              </Card.Header>
              <Card.Body css={{ py: "$2" }}>
                <Text css={{ py: "$2", color: "$white" }}>
                  Make beautiful websites regardless of your design experience.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  voluptatum porro provident reiciendis debitis.
                </Text>
              </Card.Body>
            </Card>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

// export default function App() {
//   return (
//   );
// }
