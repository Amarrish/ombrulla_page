import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import place1 from '../Assets/google.png'
import place2 from '../Assets/Ai.jpg'
import place3 from '../Assets/comp.jpg'
import place4 from '../Assets/impact.jpg'
const data = [
  {
    cont: "We would like to express our gratitude for the collaboration on the development of our Business Intelligence & Analytics solutions. Ombrulla and its analytics team performed admirably and we are pleased with the solution provided to us.",
    name: "UAE",
    place: 'Terranz Dubai, UAE',
    img: place1
  },
  {
    cont: "We would like to express our gratitude for the collaboration on the development of our Business Intelligence & Analytics solutions. Ombrulla and its analytics team performed admirably and we are pleased with the solution provided to us.",
    name: "james",
    place: 'Managing Director USA.',
    img: place2
  },
  {
    cont: "We would like to express our gratitude for the collaboration on the development of our Business Intelligence & Analytics solutions. Ombrulla and its analytics team performed admirably and we are pleased with the solution provided to us.",
    name: "manoj menon",
    place: 'AZEL IT Solutions',
    img: place3
  },
  {
    cont: "We would like to express our gratitude for the collaboration on the development of our Business Intelligence & Analytics solutions. Ombrulla and its analytics team performed admirably and we are pleased with the solution provided to us.",
    name: " Tony Michael",
    place: 'CEO, New York, USA',
    img: place4
  },
];

const Customers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Set the number of slides to show
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <p className="text-2xl text-center">OUR CUSTOMERS</p>
      <h1 className="text-4xl font-bold mb-6 text-center mt-5">They Trust Us</h1>
      <div className="mt-6 w-full justify-center items-center">
        <Slider {...settings}>
        {data.map((item, index) => (
  <div key={index} className="bg-white rounded-xl border sm:h-full items-center justify-center xl:p-10">
    <div className=" md:w-1/2">
      <p className="text-center text-justify"><span className="xl:text-8xl text-blue-600">''</span>{item.cont}</p>
    </div>
    <div className="flex items-center  bg-slate-200 p-5"> 
      <div><img src={item.img} alt="" className="w-10 h-10 rounded-full" /></div>
      <div className="ml-2"> 
        <p>{item.name}</p>
        <p className="text-indigo-600">{item.place}</p>
      </div>
    </div>
  </div>
))}
        </Slider>
      </div>
    </div>
  );
};

export default Customers;
