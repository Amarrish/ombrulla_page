import React from "react";
import carousal1 from '../Assets/crousel1.jpg';
import carousal2 from '../Assets/crousel2.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    img: carousal1,
  },
  {
    img: carousal2,
  },
];

const Customers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <p className="text-2xl text-center">OUR CUSTOMERS</p>
      <h1 className="text-4xl font-bold mb-6 text-center mt-5">They Trust Us</h1>
      <div className="mt-6">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden">
              <div className="bg-indigo-400">
                <img src={item.img} alt="" className="w-full h-44 object-cover" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Customers;



