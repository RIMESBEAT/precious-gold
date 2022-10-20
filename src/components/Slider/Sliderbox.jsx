import React from "react";
import Slider from "react-slick";
import "./Sliderbox.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sliderbox() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplayspeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <div>
      <div className="overflow">
        <Slider {...settings}>
          <div className="carousel__img__box">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/002/006/774/small/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg"
              alt=""
            />
          </div>
          <div className="carousel__img__box">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfkKRr56E0SVI8ozjyjfo3zS_p2LNmuNHiwb1HV1mvzZw04SUvY-CIsdCq5ZtkL8PJxqI&usqp=CAU"
              alt=""
            />
          </div>
          <div className="carousel__img__box">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
              alt=""
            />
          </div>
          <div className="carousel__img__box">
            <img
              src="https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?w=2000"
              alt=""
            />
          </div>
          <div className="carousel__img__box">
            <img
              src="https://s1-ecp.esigns.com/sms/imagebox/10/947/Retail-Business_Imagebox_519x200.png"
              alt=""
            />
          </div>
          <div className="carousel__img__box">
            <img
              src="https://d1xv5jidmf7h0f.cloudfront.net/circleone/images/products_gallery_images/Retail-Banner-2.jpg"
              alt=""
            />
          </div>
          <div className="carousel__img__box">
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-shop-banner-design-template-ced8d381ed48595c749de9949ff917ae_screen.jpg?ts=1600552562"
              alt=""
            />
          </div>
          <div className="carousel__img__box">
            <img
              src="https://assets.materialup.com/uploads/6ec43bb8-d7b1-4e1d-9f44-68f7fcb817b5/attachment.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Sliderbox;
