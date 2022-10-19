import { Card, Text, User } from "@nextui-org/react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Testimonials.css";

function Testimonials() {
  const settings = {
    // className: "slider variable-width",
    vertical: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    initialSlide: 0,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
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
          slidesToScroll: 2,
          initialSlide: 2,
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

  return (
    <div className="testimonial">
      <h2>Testimonials</h2>
      <div className="testimonial__grid">
        <div className="testimonial__text">
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        </div>
        <div className="testimonial__center" style={{width:600}}>
          <Slider {...settings} className="testimonial">
            <Card css={{ p: "$6", mw: "400px" }}>
              <Card.Header>
                <User
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  name="Ariana Wattson"
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
            <Card css={{ p: "$6", mw: "400px" }}>
              <Card.Header>
                <User
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  name="Ariana Wattson"
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
            <Card css={{ p: "$6", mw: "400px" }}>
              <Card.Header>
                <User
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  name="Ariana Wattson"
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
