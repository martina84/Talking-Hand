import React from "react";

import Slider from "react-slick";
import image1 from "../../Assets/GettyImages-1094158136-182616aa1c7a48a6b2c01cc94dab05e7.jpg";
import image2 from "../../Assets/KCHH-Sign-Language-GIrl-and-Therapist.jpg";
import image3 from "../../Assets/Musik-und-Gehörlosigkeit_web.jpg";
import image4 from "../../Assets/shutterstock-170739692.a5f4b0dbe7112684f3caffcaca964bec.jpg";
import image5 from "../../Assets/Sign-language-image-Fotolia-Daisy-Daisy.jpg";

export default function HomeSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="row g-0">
        <div className="col-md-9">
          <Slider {...settings}>
            <img src={image2} className="w-100" height={600} alt="" />
            <img src={image3} className="w-100" height={600} alt="" />
            <img src={image1} className="w-100" height={600} alt="" />
            <img src={image4} className="w-100" height={600} alt="" />
            <img src={image5} className="w-100" height={600} alt="" />
          </Slider>
        </div>

        <div className="col-md-3">
          <img src={image3} className="w-100" height={300} alt="" />
          <img src={image5} className="w-100" height={300} alt="" />
        </div>
      </div>
    </>
  );
}
