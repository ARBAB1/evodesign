"use client";
import React, { useState, useEffect } from "react";
import style from "./companies.module.css";
import Image from "next/image";
import Company1 from "../../assets/Images/company1.png";
import Company2 from "../../assets/Images/company2.png";
import Company3 from "../../assets/Images/company3.png";
import Company4 from "../../assets/Images/company4.png";
import Company5 from "../../assets/Images/company5.png";
import Company6 from "../../assets/Images/company6.png";
import Company7 from "../../assets/Images/company7.png";
import Company8 from "../../assets/Images/company8.png";
import Company9 from "../../assets/Images/company9.png";
import Company10 from "../../assets/Images/company10.png";
import Company11 from "../../assets/Images/company11.png";
import Company12 from "../../assets/Images/company12.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AfroStyles = [
  {
    id: 1,
    ClientTitle: "Chris B.",
    desig: "CEO at Astronomic",
    description:
      "”Evo has a talented design team who communicates well and produces high-quality output. We've worked with them for over a year now and they always do great work.",
  },
  {
    id: 2,
    ClientTitle: "Adrianne",
    desig: "Product Owner at Legal Innovators",
    description:
      "We chose perfectly; Evo have been an extremely creative design team, taking our “homegrown” wireframes and creatively expanding on them both functionally (i.e., UX-wise) and creatively.",
  },
  {
    id: 3,
    ClientTitle: "Greg",
    desig: "Product Owner at Legal Innovators",
    description:
      "Extremely professional and proficient design team who exceeded our expectations for our project.",
  },
  {
    id: 4,
    ClientTitle: "Mitch",
    desig: "CEO at Ramped",
    description:
      "Evo were amazing to work with! Super quick and responsive and completed the work perfectly!",
  },
  {
    id: 5,
    ClientTitle: "Conor",
    desig: "CEO at Pod1um",
    description:
      "Excellent experience over many months working with this team. High quality of work & great communicators.",
  },
];

const index = () => {
  const [nav1, setNav1] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider1, setSlider1] = useState(null);
  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
    autoplaySpeed: 1000,
    lazyLoad: true,
    asNavFor: ".slider-nav",
    focusOnSelect: true,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={`container-fluid ${style.container}`}>
      <div className={`row`}>
        <div className={`col-lg-12 ${style.heading}`}>
          <h2> +200 hundred companies impacted over 15 industries</h2>
        </div>
      </div>
      <div className={`row`}>
        <div className={`col-lg-12 ${style.companies}`}>
          <Image
            src={Company1}
            alt="Description of the image"
            className={style.companyImage}
          />
          <Image
            src={Company2}
            alt="Description of the image"
            className={style.companyImage}
          />
          <Image
            src={Company3}
            alt="Description of the image"
            className={style.companyImage}
          />
          <Image
            src={Company4}
            alt="Description of the image"
            className={style.companyImage}
          />
          <Image
            src={Company5}
            alt="Description of the image"
            className={style.companyImage}
          />
          <Image
            src={Company6}
            alt="Description of the image"
            className={style.companyImage}
          />
          <Image
            src={Company7}
            alt="Description of the image"
            className={style.companyImage}
          />
          <Image
            src={Company8}
            alt="Description of the image"
            className={style.companyImage}
          />
          <Image
            src={Company9}
            alt="Description of the image"
            className={style.companyImage}
          />
          <Image
            src={Company10}
            alt="Description of the image"
            className={style.companyImage}
          />
          <Image
            src={Company11}
            alt="Description of the image"
            className={style.companyImage}
          />
          <Image
            src={Company12}
            alt="Description of the image"
            className={style.companyImage}
          />
        </div>
      </div>
      <div className={`row ${style.Clients}`}>
        <div className={`col-lg-6 ${style.Lets}`}>
          <h1>Let’s see what our clients say</h1>
        </div>
        <div className={`col-lg-6 ${style.right}`}>
          <div className="content">
            <div className="container">
              <Slider
                {...settings}
                asNavFor={nav1}
                ref={(slider) => setSlider1(slider)}
              >
                {AfroStyles.map((item) => (
                  <div key={item.id}>
                    <div className="img-body">
                      <h6 className={style.HeadingSlider}>
                        {item.ClientTitle}
                      </h6>
                      <p>{item.desig}</p>
                      <div className="mt-2">
                        <p className={style.SlidePara}>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="thumb-wrapper">
                {AfroStyles.map((item, idx) => (
                  <div
                    key={item.id}
                    className={currentSlide === idx ? "active" : null}
                    onClick={() => {
                      slider1?.slickGoTo(idx);
                    }}
                  >
                    {/* <img src={item.src} alt={item.alt}/> */}
                    {/* {currentSlide} */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
