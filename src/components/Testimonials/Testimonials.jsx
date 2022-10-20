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
    className: "center",
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

  return (
    <div className="testimonial">
      <h2>Testimonials</h2>
      <div className="testimonial__grid">
        <div className="testimonial__text">
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        </div>
        <div className="testimonial__center ">
          <Slider {...settings}>
            <Card
              css={{ p: "$2", mw: "100%", bg: "$blue" }}
              className="testimonial__center "
            >
              <Card.Header>
                <User
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWUK7wcgzeCENqRhHb-KG8qf-nh16XlQHi2g&usqp=CAU"
                  name="Juliana Rimes"
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
            <Card css={{ p: "$2", mw: "100%", bg: "$success" }}>
              <Card.Header>
                <User
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
            <Card
              css={{ p: "$2", mw: "100%", bg: "$warning" }}
              className="orange"
            >
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
